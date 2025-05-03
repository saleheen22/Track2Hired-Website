import React, { useState, useContext, useEffect } from 'react';
import Loader from '../Common/Loader';

import {
  ClipboardDocumentIcon,
  ArrowDownTrayIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';
import { JobsContext } from '../../provider/JobsProvider';
import { useParams } from 'react-router';
import axios from 'axios';

const SingleCoverLetter = () => {
  const { jobs, refetchJobs } = useContext(JobsContext);

  const { jobID } = useParams<{ jobID: string }>();
  const [copyStatus, setCopyStatus] = useState('');

  const [isGenerating, setIsGenerating] = useState(false);

  // Get the job associated with this ID
  console.log(jobID);
  const job = jobs.find(j => j.jobID === jobID);
  const [coverLetter, setCoverLetter] = useState(job?.coverLetter || null);

  useEffect(() => {
    const currentJob = jobs.find(j => j.jobID === jobID);
    if (currentJob?.coverLetter) {
      setCoverLetter(currentJob.coverLetter);
    }
  }, [jobs, jobID]);
  // Function to generate cover letter
  const generateCoverLetter = async () => {
    setIsGenerating(true);

    try {
      const response = await axios.post(
        `http://localhost:3000/generate-cover-letter/${jobID}`
      );
      refetchJobs();
      const coverLetter = response.data.coverLetter;
      console.log('This is response', response.data);
      console.log('Cover letter', coverLetter);
      setCoverLetter(coverLetter);
    } catch (err) {
      console.error('Error generating cover letter:', err);
    } finally {
      setIsGenerating(false);
    }
  };

  const copyToClipboard = () => {
    if (!coverLetter) return;

    navigator.clipboard.writeText(coverLetter);
    setCopyStatus('Copied to clipboard!');
    setTimeout(() => setCopyStatus(''), 2000);
  };

  const downloadDocFile = () => {
    if (!coverLetter) return;

    // Create blob with cover letter content
    const blob = new Blob([coverLetter], { type: 'application/msword' });
    const url = URL.createObjectURL(blob);

    // Create download link and click it
    const a = document.createElement('a');
    a.href = url;
    a.download = `Cover_Letter_${job?.company || 'Company'}_${job?.title || 'Position'}.doc`;
    document.body.appendChild(a);
    a.click();

    // Clean up
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // If job not found
  if (!job) {
    return <Loader message="Loading cover letter" />;
  }

  return (
    <div className="p-5 max-w-full mx-auto">
      {/* Job details header */}
      <div className="mb-4">
        <h2 className="text-2xl font-bold">{job.title}</h2>
        <p className="text-gray-600">{job.company}</p>
      </div>

      {/* If there's no cover letter yet, show the generate button */}
      {!coverLetter ? (
        <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 text-center">
          <p className="text-gray-600 mb-4">
            No cover letter has been created for this job yet.
          </p>
          <button
            onClick={generateCoverLetter}
            className="btn bg-blue-500"
            disabled={isGenerating}
          >
            {isGenerating ? (
              <>
                <span className="loading loading-spinner loading-sm mr-2"></span>
                Generating...
              </>
            ) : (
              <>
                <SparklesIcon
                  className="h-5 w-5 mr-2 text-white"
                  onClick={generateCoverLetter}
                />
                <span className="text-white">Generate Cover Letter</span>
              </>
            )}
          </button>
        </div>
      ) : (
        <>
          {/* Display the cover letter content */}
          <pre className="bg-gray-50 p-6 rounded-lg border border-gray-200 whitespace-pre-wrap">
            {coverLetter}
          </pre>

          {/* Actions container */}
          <div className="flex items-center mt-4 gap-3">
            {/* Copy button */}
            <button
              onClick={copyToClipboard}
              className="btn btn-outline btn-sm flex items-center gap-2"
            >
              <ClipboardDocumentIcon className="h-4 w-4" />
              Copy
            </button>

            {/* Download button */}
            <button
              onClick={downloadDocFile}
              className="btn btn-outline btn-sm flex items-center gap-2"
            >
              <ArrowDownTrayIcon className="h-4 w-4" />
              Download
            </button>

            {/* Regenerate button */}
            <button
              onClick={generateCoverLetter}
              className="btn bg-blue-500 btn-sm flex items-center gap-2"
              disabled={isGenerating}
            >
              <SparklesIcon
                onClick={generateCoverLetter}
                className="h-4 w-4 text-white"
              />
              <span className="text-white">
                {isGenerating ? 'Generating...' : 'Regenerate'}
              </span>
            </button>

            {/* Display the copy status if available */}
            {copyStatus && (
              <span className="text-sm text-green-600 italic ml-2">
                {copyStatus}
              </span>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default SingleCoverLetter;
