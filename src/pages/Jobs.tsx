import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router";


interface Job {
  jobID: string ;
  email: string;
  company: string;
  description: string;
  title: string;
  coverLetter: string,
  companyResearch?: string;
}
const Jobs = () => {
    const [generatingCompanyId, setGeneratingCompanyId] = useState<string | null>(null);

const companyResearchMutation = useMutation({
  mutationFn: async (jobId: string) => {
    setGeneratingCompanyId(jobId);
    const response = await axios.post(
      `http://localhost:3000/companySearch/${jobId}`
    );
    return response.data;
  },
  onSuccess: () => {
    setGeneratingCompanyId(null);
    queryClient.invalidateQueries({ queryKey: ['jobs', user?.email] });
  },
  onError: () => {
    setGeneratingCompanyId(null);
  }
});

const handleCompanyResearch = async (jobId: string) => {
  try {
    companyResearchMutation.mutate(jobId);
  } catch (error) {
    console.error('Failed to perform company research:', error);
  }
};
  const [generatingJobId, setGeneratingJobId] = useState<string | null>(null);

    const {user} = useContext(AuthContext);
    console.log(user);
    const queryClient = useQueryClient();

    const { data: jobs, isLoading, error } = useQuery({
      queryKey: ['jobs', user?.email],
      queryFn: async () => {
          if (!user?.email) throw new Error('User email not found');
          const { data } = await axios.get(
              `http://localhost:3000/jobs/${user.email}`
          );
          return data as Job[];
      },
      enabled: !!user?.email // Only run query if user email exists
  });
  const generateCoverLetterMutation = useMutation({
    mutationFn: async (jobId: string) => {
      setGeneratingJobId(jobId);
        const response = await axios.post(
            `http://localhost:3000/generate-cover-letter/${jobId}`
        );
        return response.data;
    },
    onSuccess: () => {
      setGeneratingJobId(null);
        // Refetch jobs after successful cover letter generation
        queryClient.invalidateQueries({ queryKey: ['jobs', user?.email] });
    },
    onError: () => {
      setGeneratingJobId(null);
  }
});

const handleGenerateCoverLetter = async (jobId: string) => {
    try {
        generateCoverLetterMutation.mutate(jobId);
    } catch (error) {
        console.error('Failed to generate cover letter:', error);
    }
};

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
    return (
      <div>
      <div className="overflow-x-auto">
          <table className="table">
              <thead>
                  <tr>
                      <th>Title</th>
                      <th>Company</th>
                      <th>Description</th>
                      <th>Cover Letter</th>
                      <th>Company Research</th>
                  </tr>
              </thead>
              <tbody>
                        {jobs?.map((job) => (
                            <tr key={job.jobID}>
                                <td><Link to={`/dashboard/job`}state={{ job }}>{job.title}</Link></td>
                                <td>{job.company}</td>
                                <td className=" text-justify max-w-md p-4">
                                    {job.description}
                                </td>
                                <td>
                                    {job.coverLetter ? (
                                        <pre className="text-justify max-w-md p-4">
                                        {job.coverLetter}
                                      </pre>
                                        
                                    ) : (
                                        <button 
                                            className="btn btn-primary"
                                            onClick={() => handleGenerateCoverLetter(job.jobID)}
                                            disabled={generatingJobId === job.jobID}
                                        >
                                            {generatingJobId === job.jobID
                                                ? 'Generating...'
                                                : 'Generate Cover Letter'
                                            }
                                        </button>
                                    )}
                                </td>
                                <td>
        {job.companyResearch ? (
          <pre className="text-justify max-w-md p-4">{job.companyResearch}</pre>
        ) : (
          <button 
            className="btn btn-secondary"
            onClick={() => handleCompanyResearch(job.jobID)}
            disabled={generatingCompanyId === job.jobID}
          >
            {generatingCompanyId === job.jobID ? 'Searching...' : 'Search Company Info'}
          </button>
        )}
      </td>
                            </tr>
                        ))}
                    </tbody>
                  
          </table>
      </div>
        </div>
    );
};

export default Jobs;