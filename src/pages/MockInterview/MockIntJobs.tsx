import JobTable from '../Common/JobTable';

const MockIntJobs = () => {

    return (
      <JobTable 
      title="Interview Preparation" 
      linkPathPrefix="/dashboard/mock-interviews/"
      onEdit={(jobID) => {
        console.log(`Edit job ${jobID}`);
        // Add your edit logic here
      }}
      onDelete={(jobID) => {
        console.log(`Delete job ${jobID}`);
        // Add your delete logic here
      }}
    />
    );
};

export default MockIntJobs;