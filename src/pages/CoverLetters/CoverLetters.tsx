import JobTable from '../Common/JobTable';
const CoverLetters = () => {
  return (
    <JobTable
      title="Cover Letters"
      linkPathPrefix="/dashboard/cover-letters/"
      onDelete={jobID => {
        console.log(`Delete job ${jobID}`);
      }}
    />
  );
};

export default CoverLetters;
