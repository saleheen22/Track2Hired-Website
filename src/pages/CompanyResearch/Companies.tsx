import JobTable from '../Common/JobTable';

const Companies = () => {
  return (
    <JobTable
      title="Company Research"
      linkPathPrefix="/dashboard/company-research/"
      onEdit={jobID => {
        console.log(`Edit job ${jobID}`);
        // Add your edit logic here
      }}
      onDelete={jobID => {
        console.log(`Delete job ${jobID}`);
        // Add your delete logic here
      }}
    />
  );
};

export default Companies;
