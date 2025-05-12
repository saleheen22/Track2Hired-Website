import JobTable from '../Common/JobTable';

const Companies = () => {
  return (
    <JobTable
      title="Company Research"
      linkPathPrefix="/dashboard/company-research/"
  
      onDelete={jobID => {
        console.log(`Delete job ${jobID}`);
        // Add your delete logic here
      }}
    />
  );
};

export default Companies;
