import React, { useContext } from 'react';
import { Link } from 'react-router';
import { JobsContext } from '../../provider/JobsProvider';
import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline';
import Loader from './Loader';

interface JobTableProps {
  title: string;
  linkPathPrefix: string;
  showActions?: boolean;
  onEdit?: (jobID: string) => void;
  onDelete?: (jobID: string) => void;
  customActions?: (jobID: string) => React.ReactNode;
}

const JobTable: React.FC<JobTableProps> = ({
  title,
  linkPathPrefix,
  showActions = true,
  onEdit,
  onDelete,
  customActions
}) => {
  const { jobs, isLoading } = useContext(JobsContext);

  if (isLoading) {
    return <Loader message={`Loading ${title.toLowerCase()}...`} />;
  }

  // Filter out jobs with no title or company for a cleaner UI
  const validJobs = jobs.filter(job => job.title && job.company);

  if (validJobs.length === 0) {
    return (
      <div className="p-5 text-center">
        <p className="text-gray-500">No jobs found.</p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto p-2 md:p-4">
      <table className="min-w-full table-auto border-collapse border border-gray-200">
        <thead className="text-lg md:text-xl">
          <tr className="bg-gray-50">
          <th className="border px-1 py-1 md:px-4 md:py-2 text-xs md:text-lg text-center font-bold">#</th>
            <th className="border px-1 py-1 md:px-4 md:py-2 text-xs md:text-lg text-left">{title}</th>
            {showActions && (
              <th className="border px-1 py-1 md:px-4 md:py-2 text-xs md:text-lg text-center">Actions</th>
            )}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {validJobs.map((job, index) => (
            <tr key={job.jobID || index} className="hover:bg-gray-50">
               <td className="border px-1 py-1 md:px-4 md:py-2 text-center ">{index+1}</td>
              <td className="border  px-1 py-1 md:px-4 md:py-2">
                <Link
                  to={`${linkPathPrefix}${job.jobID}`}
                  className="text-blue-600 text-sm md:text-base hover:underline font-bold "
                >
                  {job.title}
                </Link>
                <div className="text-xs text-gray-500">{job.company}</div>
              </td>

              {showActions && (
                <td className="border px-1 py-1 md:px-4 md:py-2">
                  <div className="flex space-x-1 md:space-x-2 justify-center">
                    {customActions ? (
                      customActions(job.jobID)
                    ) : (
                      <>
                        {onEdit && (
                          <button 
                            className="btn btn-ghost btn-xs p-1"
                            onClick={() => onEdit(job.jobID)}
                          >
                            <PencilSquareIcon className="h-3 w-3 md:h-4 md:w-4 text-blue-600" />
                          </button>
                        )}
                        {onDelete && (
                          <button 
                            className="btn btn-ghost btn-xs p-1"
                            onClick={() => onDelete(job.jobID)}
                          >
                            <TrashIcon className="h-3 w-3 md:h-4 md:w-4 text-red-600" />
                          </button>
                        )}
                      </>
                    )}
                  </div>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default JobTable;