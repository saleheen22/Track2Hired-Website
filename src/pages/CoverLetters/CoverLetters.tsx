import JobTable from '../Common/JobTable';
const CoverLetters = () => {
  return (
    <JobTable
      title="Cover Letters" 
      linkPathPrefix="/dashboard/cover-letter/"
      onEdit={(jobID) => {
        console.log(`Edit job ${jobID}`);
        
      }}
      onDelete={(jobID) => {
        console.log(`Delete job ${jobID}`);
        
      }}
    />
  );
    
};

export default CoverLetters;