import React, { useContext } from 'react';
import { Link } from 'react-router';
import { JobsContext } from '../../provider/JobsProvider';
import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
const TrackedJobs = () => {
  const { jobs, toggleStatus } = useContext(JobsContext);
  const handleToggle = (job: Job, field: 'applied' | 'interview' | 'offer') => {
    toggleStatus(job.jobID, field);
  };

  return (
    <div className="overflow-x-auto p-4">
      <table className="min-w-full table-auto border-collapse border border-gray-200 ">
        <thead className="text-2xl">
          <tr className="bg-gray-50">
      
            <th className="border px-4 py-2  w-1/3 text-left">Job</th>
            <th className="border px-4 py-2 text-center">Applied</th>
            <th className="border px-4 py-2 text-center">Interview</th>
            <th className="border px-4 py-2 text-center">Offer</th>
            <th className="border px-4 py-2 text-center">Actions</th>
            <th className="border px-4 py-2 text-center">Interview Date</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {jobs.map((job, index) => (
            <tr key={job.jobID || index}>
              
              <td className="border px-4 py-2">
                <Link to={`/dashboard/job`} state={{ job }} className="text-blue-600 text-xl hover:underline font-bold">
                  {job.title}
                </Link>
                <div className="text-sm text-gray-500">{job.company}</div>
              </td>

              {/* applied */}
              <td className="border text-center px-2 py-2">
              <label>
            <input type="checkbox" className="checkbox  checkbox-success text-white"
            checked={!!job.applied}
            onChange={() => handleToggle(job, 'applied')} />
          </label>
              </td>
              {/* interview */}
              <td className="border text-center px-4 py-2">
              <label>
            <input type="checkbox" className="checkbox text-white checkbox-success" checked={!!job.interview}
                  onChange={() => handleToggle(job, 'interview')} />
          </label>
              </td>
              {/* offer */}
              <td className="border text-center px-4 py-2">
              <label>
            <input type="checkbox" className="checkbox text-white checkbox-success" checked={!!job.offer}
                  onChange={() => handleToggle(job, 'offer')}/>
          </label>
              </td>
                {/* Interview Date */}
                <td className="border text-center px-4 py-2">
                <DatePicker
                  selected={job.interviewDate ? new Date(job.interviewDate) : null}
              
                  dateFormat="MM/dd/yyyy"
                  className="input input-bordered w-full max-w-xs text-center"
                  placeholderText="Select date"
                  isClearable
                />
              </td>
              
              <td className="border px-4 py-2">
  <div className="flex space-x-2">
    <button className="btn btn-ghost btn-xs text-blue-600">
      <PencilSquareIcon className="h-5 w-5" />
    </button>
    <button className="btn btn-ghost btn-xs text-red-600">
      <TrashIcon className="h-5 w-5" />
    </button>
  </div>
</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TrackedJobs;