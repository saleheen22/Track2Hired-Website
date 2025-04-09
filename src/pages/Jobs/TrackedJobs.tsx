import React, { useContext } from 'react';
import { Link } from 'react-router';
import { JobsContext } from '../../provider/JobsProvider';
import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline';

const TrackedJobs = () => {
  const { jobs } = useContext(JobsContext);

  return (
    <div className="overflow-x-auto p-4">
      <table className="min-w-full table-auto border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-50">
      
            <th className="border px-4 py-2 text-left w-1/2">Job</th>
            <th className="border px-4 py-2 text-left">Applied</th>
            <th className="border px-4 py-2 text-left">Interview</th>
            <th className="border px-4 py-2 text-left">Offer</th>
            <th className="border px-4 py-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {jobs.map((job, index) => (
            <tr key={job.jobID || index}>
              
              <td className="border px-4 py-2">
                <Link to={`/dashboard/job`} state={{ job }} className="text-blue-600 hover:underline">
                  {job.title}
                </Link>
                <div className="text-sm text-gray-500">{job.company}</div>
              </td>
              <td className="border px-4 py-2">
              <label>
            <input type="checkbox" className="checkbox text-green-600" />
          </label>
              </td>
              <td className="border px-4 py-2">
              <label>
            <input type="checkbox" className="checkbox text-green-600" />
          </label>
              </td>
              <td className="border px-4 py-2">
              <label>
            <input type="checkbox" className="checkbox text-green-600" />
          </label>
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