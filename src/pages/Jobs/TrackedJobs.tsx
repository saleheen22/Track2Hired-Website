import { useContext, useState } from 'react';
import Loader from '../Common/Loader';
import { JobsContext, Job } from '../../provider/JobsProvider';
import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import EditModal from '../Common/EditModal';
const TrackedJobs = () => {
  const {
    jobs,
    toggleStatus,
    updateInterviewDate,
    deleteJob,
    updateJob,
    isLoading,
  } = useContext(JobsContext);
  console.log(jobs.length);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [currentJob, setCurrentJob] = useState<Job | null>(null);
  const handleToggle = (job: Job, field: 'applied' | 'interview' | 'offer') => {
    toggleStatus(job.jobID, field);
  };
  const handleDelete = async (jobID: string) => {
    if (window.confirm('Are you sure you want to delete this job?')) {
      try {
        await deleteJob(jobID);
      } catch (error) {
        console.error('Failed to delete job:', error);
      }
    }
  };

  const handleEdit = (job: Job) => {
    setCurrentJob(job);
    setIsEditModalOpen(true);
  };

  const handleSave = async (updatedData: Partial<Job>) => {
    if (currentJob) {
      try {
        await updateJob(currentJob.jobID, updatedData);
      } catch (error) {
        console.error('Failed to update job:', error);
      }
    }
  };

  const handleDateChange = (jobID: string, date: Date | null | string) => {
    console.log('Selected date:', date);
    updateInterviewDate(jobID, date as Date | null);
  };
  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className="overflow-x-auto p-2 md:p-4">
      <table className="min-w-full table-auto border-collapse border border-gray-200 ">
        <thead>
          <tr className="bg-gray-50">
            <th className="border px-1 py-1 md:px-4 md:py-2 text-xs md:text-2xl text-center">
              #
            </th>

            <th className="border px-1 py-1 md:px-4 md:py-2 text-xs md:text-2xl text-left">
              Job
            </th>
            <th className="border px-1 py-1 md:px-4 md:py-2 text-xs md:text-2xl  text-center hidden sm:table-cell">
              Applied
            </th>
            <th className="border px-1 py-1 md:px-4 md:py-2 text-xs md:text-2xl  text-center hidden sm:table-cell">
              Interview
            </th>
            <th className="border px-1 py-1 md:px-4 md:py-2 text-xs  md:text-2xl text-center hidden sm:table-cell">
              Offer
            </th>
            <th className="border px-1 py-1 md:px-4 md:py-2 text-xs md:text-2xl text-center">
              Date
            </th>
            <th className="border px-1 py-1 md:px-4 md:py-2 text-xs md:text-2xl text-center">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y  divide-gray-200">
          {jobs.map((job, index) => (
            <tr key={job.jobID || index} className="hover:bg-gray-50">
              <td className="border px-1 py-1 md:px-4 md:py-2 text-center font-semibold">
                {index + 1}
              </td>

              <td className="border px-1 py-1 md:px-4 md:py-2">
                <a
                  href={job.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 text-sm md:text2xl md:text-base hover:underline font-bold"
                >
                  {job.title}
                </a>
                <div className="text-xs text-gray-500">{job.company}</div>
              </td>

              {/* Applied - hidden on very small screens */}
              <td className="border text-center px-1 py-1 md:px-2 md:py-2 hidden sm:table-cell">
                <label>
                  <input
                    type="checkbox"
                    className="checkbox checkbox-sm md:checkbox-md checkbox-success"
                    checked={!!job.applied}
                    onChange={() => handleToggle(job, 'applied')}
                  />
                </label>
              </td>

              {/* Interview - hidden on very small screens */}
              <td className="border text-center px-1 py-1 md:px-4 md:py-2 hidden sm:table-cell">
                <label>
                  <input
                    type="checkbox"
                    className="checkbox checkbox-sm md:checkbox-md checkbox-success"
                    checked={!!job.interview}
                    onChange={() => handleToggle(job, 'interview')}
                  />
                </label>
              </td>

              {/* Offer - hidden on very small screens */}
              <td className="border text-center px-1 py-1 md:px-4 md:py-2 hidden sm:table-cell">
                <label>
                  <input
                    type="checkbox"
                    className="checkbox checkbox-sm md:checkbox-md checkbox-success"
                    checked={!!job.offer}
                    onChange={() => handleToggle(job, 'offer')}
                  />
                </label>
              </td>

              {/* Interview Date */}
              <td className="border text-center px-1 py-1 md:px-4 md:py-2">
                <DatePicker
                  selected={
                    job.interviewDate ? new Date(job.interviewDate) : null
                  }
                  onChange={date => handleDateChange(job.jobID, date)}
                  dateFormat="MM/dd/yy"
                  className="input  w-full text-center text-xs md:text-sm"
                  placeholderText="Select"
                  isClearable
                />
              </td>

              {/* Actions */}
              <td className="border px-1 py-1 md:px-4 md:py-2">
                <div className="flex space-x-1 md:space-x-2 justify-center">
                  <button
                    className="btn btn-ghost btn-xs p-1"
                    onClick={() => handleEdit(job)}
                  >
                    <PencilSquareIcon className="h-3 w-3 md:h-4 md:w-4 text-blue-600" />
                  </button>
                  <button
                    className="btn btn-ghost btn-xs p-1"
                    onClick={() => handleDelete(job.jobID)}
                  >
                    <TrashIcon className="h-3 w-3 md:h-4 md:w-4 text-red-600" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {currentJob && (
        <EditModal
          isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
          job={currentJob}
          mode="job"
          onSave={handleSave}
        />
      )}
    </div>
  );
};

export default TrackedJobs;
