
import React, {  useContext } from 'react';
import {Link} from 'react-router';
import { JobsContext } from '../../provider/JobsProvider';
import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline';

const MockIntJobs = () => {
    const {jobs} = useContext(JobsContext)
    return (
        <div className="overflow-x-auto p-2 md:p-4">
      <table className="min-w-full table-auto border-collapse border border-gray-200 ">
        <thead>
          <tr className="bg-gray-50">
            <th className="border px-1 py-1 md:px-4 md:py-2 text-xs md:text-2xl text-left">Jobs </th>
            <th className="border px-1 py-1 md:px-4 md:py-2 text-xs md:text-2xl text-center">Actions</th>
          </tr>
      
        </thead>
        <tbody className="bg-white divide-y  divide-gray-200">
          {jobs.map((job, index) => (
            <tr key={job.jobID || index} className="hover:bg-gray-50">
              <td className="border px-1 py-1 md:px-4 md:py-2">
              <Link 
                      to={`/dashboard/mock-interviews/${job.jobID}`}
                      className="text-blue-600 text-sm md:text-base hover:underline font-bold"
                    >
                      {job.title}
                    </Link>
                <div className="text-xs text-gray-500">{job.company}</div>
              </td>

              
              {/* Actions */}
              <td className="border px-1 py-1 md:px-4 md:py-2">
                <div className="flex space-x-1 md:space-x-2 justify-center">
                  <button className="btn btn-ghost btn-xs p-1">
                    <PencilSquareIcon className="h-3 w-3 md:h-4 md:w-4 text-blue-600" />
                  </button>
                  <button className="btn btn-ghost btn-xs p-1">
                    <TrashIcon className="h-3 w-3 md:h-4 md:w-4 text-red-600" />
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

export default MockIntJobs;