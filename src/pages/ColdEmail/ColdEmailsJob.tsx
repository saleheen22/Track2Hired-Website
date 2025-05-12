
import JobTable from '../Common/JobTable';
const ColdEmailsJob = () => {
  return (
    <JobTable
      title="Cold Emails"
      linkPathPrefix="/dashboard/cold-email/"
 
      onDelete={jobID => {
        console.log(`Delete job ${jobID}`);
        // Add your delete logic here
      }}
    />
  );
};

export default ColdEmailsJob;
