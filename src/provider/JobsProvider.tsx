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
}

interface JobsContextType {
  jobs: Job[];
  setJobs: React.Dispatch<React.SetStateAction<Job[]>>;
}

export const JobsContext = createContext<JobsContextType>({
  jobs: [],
  setJobs: () => {}
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

  return (
    <JobsContext.Provider value={{ jobs, setJobs }}>
      {children}
    </JobsContext.Provider>
  );
};
export default JobsProvider;