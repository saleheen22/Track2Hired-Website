import React from 'react';
import JobTable from '../Common/JobTable';
const ColdEmailsJob = () => {
  return (
    <JobTable
      title="Cold Emails"
      linkPathPrefix="/dashboard/cold-email/"
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

export default ColdEmailsJob;
