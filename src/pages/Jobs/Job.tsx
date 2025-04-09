import { useLocation } from 'react-router';

const Job = () => {
  const location = useLocation();
  const { job } = location.state || {};

  if (!job) {
    return <div>No job data found.</div>;
  }

  return (
    <div>
      <h1>{job.title}</h1>
      <p>Company: {job.company}</p>
      <p>Description: {job.description}</p>
      <pre>{job.coverLetter}</pre>
    </div>
  );
};

export default Job;
