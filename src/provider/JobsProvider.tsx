import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { AuthContext } from './AuthProvider';

export interface Job {
  jobID: string;
  email: string;
  company: string;
  description: string;
  title: string;
  coverLetter: string;
  companyResearch?: string;
  // Optionally add the status fields if not already defined:
  interview?: boolean;
  offer?: boolean;
  applied?: boolean;
}

interface JobsContextType {
  jobs: Job[];
  setJobs: React.Dispatch<React.SetStateAction<Job[]>>;
  toggleStatus: (jobID: string, field: 'interview' | 'offer' | 'applied') => Promise<void>;

}

export const JobsContext = createContext<JobsContextType>({
  jobs: [],
  setJobs: () => {},
  toggleStatus: async () => {}

});

export const JobsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user } = useContext(AuthContext);
  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    if (user?.email) {
      axios
        .get(`http://localhost:3000/jobs/${user.email}`)
        .then((response) => setJobs(response.data))
        .catch((error) => console.error('Failed to load jobs:', error));
    }
  }, [user]);
  const toggleStatus = async (
    jobID: string,
    field: 'interview' | 'offer' | 'applied'
  ) => {
    try {
      const { data } = await axios.patch(`http://localhost:3000/toggle-status/${jobID}`, { field });
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
  return (
    <JobsContext.Provider value={{ jobs, setJobs, toggleStatus }}>
      {children}
    </JobsContext.Provider>
  );
};
export default JobsProvider;