import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { AuthContext } from './AuthProvider';
// import { useQuery, useMutation, useQueryClient } from 'react-query';

export interface Job {
  jobID: string;
  email: string;
  company: string;
  description: string;
  title: string;
  coverLetter?: string;
  companyResearch?: string;
  interview?: boolean;
  offer?: boolean;
  applied?: boolean;
  interviewDate?: Date | null | string;
  dateExtracted?: Date | null | string;
}

interface JobsContextType {
  jobs: Job[];
  setJobs: React.Dispatch<React.SetStateAction<Job[]>>;
  toggleStatus: (
    jobID: string,
    field: 'interview' | 'offer' | 'applied'
  ) => Promise<void>;
  updateInterviewDate: (jobID: string, date: Date | null) => Promise<void>;
  isLoading: boolean;
}

export const JobsContext = createContext<JobsContextType>({
  jobs: [],
  setJobs: () => {},
  toggleStatus: async () => {},
  updateInterviewDate: async () => {},
  isLoading: false,
});

export const JobsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { user } = useContext(AuthContext);
  const [jobs, setJobs] = useState<Job[]>([]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchJobs = async () => {
    if (!user?.email) return;

    try {
      setIsLoading(true);
      const response = await axios.get(
        `http://localhost:3000/jobs/${user.email}`,
        { withCredentials: true }
      );
      setJobs(response.data);
    } catch (error) {
      console.error('Failed to load jobs:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, [user]);
  const refetchJobs = async () => {
    await fetchJobs();
  };
  const toggleStatus = async (
    jobID: string,
    field: 'interview' | 'offer' | 'applied'
  ) => {
    try {
      const { data } = await axios.patch(
        `http://localhost:3000/toggle-status/${jobID}`,
        { field }
      );
      // Update the state locally based on the new field value returned by the server.
      setJobs(prevJobs =>
        prevJobs.map(job =>
          job.jobID === jobID ? { ...job, [field]: data.value } : job
        )
      );
      return data;
    } catch (error) {
      console.error('Error toggling status:', error);
      throw error;
    }
  };
  const updateInterviewDate = async (
    jobID: string,
    interviewDate: Date | null
  ) => {
    try {
      const { data } = await axios.patch(
        `http://localhost:3000/interview-date/${jobID}`,
        {
          interviewDate,
        }
      );

      // Update the job in local state with the new interview date
      setJobs(prevJobs =>
        prevJobs.map(job =>
          job.jobID === jobID
            ? { ...job, interviewDate: data.interviewDate }
            : job
        )
      );

      return data;
    } catch (error) {
      console.error('Error updating interview date:', error);
      throw error;
    }
  };
  return (
    <JobsContext.Provider
      value={{
        jobs,
        setJobs,
        toggleStatus,
        updateInterviewDate,
        isLoading,
        refetchJobs,
      }}
    >
      {children}
    </JobsContext.Provider>
  );
};
export default JobsProvider;
