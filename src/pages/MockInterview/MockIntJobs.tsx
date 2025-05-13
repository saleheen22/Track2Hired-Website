import JobTable from '../Common/JobTable';

const MockIntJobs = () => {
  return (
    <JobTable
      title="Interview Preparation"
      linkPathPrefix="/dashboard/mock-interviews/"
      onDelete={jobID => {
        console.log(`Delete job ${jobID}`);
        // Add your delete logic here
      }}
    />
  );
};

export default MockIntJobs;
