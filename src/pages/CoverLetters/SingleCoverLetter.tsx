import React, { useState, useContext } from 'react';
import { 
  ClipboardDocumentIcon, 
  ArrowDownTrayIcon,
  SparklesIcon 
} from '@heroicons/react/24/outline';
import { JobsContext } from '../../provider/JobsProvider';
import { useParams} from 'react-router';


const SingleCoverLetter = () => {
    const { jobs } = useContext(JobsContext);
    const { jobID } = useParams<{ jobId: string }>();
    const [copyStatus, setCopyStatus] = useState('');
    const [isGenerating, setIsGenerating] = useState(false);
    
    // Get the job associated with this ID
    console.log(jobID);
    const job = jobs.find(j => j.jobID === jobID);
    
    // Function to generate cover letter
    const generateCoverLetter = async () => {
        setIsGenerating(true);
        
        try {
            // Here you would implement your generation logic
            // For example:
            // const response = await axios.post('...');
            // Then update the job with the new cover letter in your context or database
            
            console.log(`Generating cover letter for job: ${jobId}`);
            
            // Simulate delay for demo purposes
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            // This is where you would update the job with the new cover letter
            
        } catch (err) {
            console.error('Error generating cover letter:', err);
        } finally {
            setIsGenerating(false);
        }
    };
    
    const copyToClipboard = () => {
        if (!job?.coverLetter) return;
        
        navigator.clipboard.writeText(job.coverLetter);
        setCopyStatus('Copied to clipboard!');
        setTimeout(() => setCopyStatus(''), 2000);
    };
    
    const downloadDocFile = () => {
        if (!job?.coverLetter) return;
        
        // Create blob with cover letter content
        const blob = new Blob([job.coverLetter], { type: 'application/msword' });
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
        return (
            <div className="flex items-center justify-center h-[70vh] px-4">
                <div className="text-center max-w-md">
                    <svg 
                        className="mx-auto h-12 w-12 text-gray-400" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor" 
                        aria-hidden="true"
                    >
                        <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth="2" 
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
                        />
                    </svg>
                    <h2 className="mt-4 text-lg font-medium text-gray-900">Job not found</h2>
                    <p className="mt-2 text-sm text-gray-500">
                        We couldn't find this job. It may have been deleted or the URL might be incorrect.
                    </p>
                    <div className="mt-6">
                        <button 
                            className="btn bg-blue-500"
                            onClick={() => window.history.back()}
                        >
                            <SparklesIcon className="h-5 w-5 mr-2" />
                            Go Back to Cover Letters
                        </button>
                    </div>
                </div>
            </div>
        );
    }
    
    return (
        <div className="p-5 max-w-full mx-auto">
            {/* Job details header */}
            <div className="mb-4">
                <h2 className="text-2xl font-bold">{job.title}</h2>
                <p className="text-gray-600">{job.company}</p>
            </div>
            
            {/* If there's no cover letter yet, show the generate button */}
            {!job.coverLetter ? (
                <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 text-center">
                    <p className="text-gray-600 mb-4">No cover letter has been created for this job yet.</p>
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
                            
                          
                                <SparklesIcon className="h-5 w-5 mr-2" />
                                Generate Cover Letter
                                </>
                          
                        
                        )}
                    </button>
                </div>
            ) : (
                <>
                    {/* Display the cover letter content */}
                    <pre className="bg-gray-50 p-6 rounded-lg border border-gray-200 whitespace-pre-wrap">
                        {job.coverLetter}
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
                            <SparklesIcon className="h-4 w-4" />
                            {isGenerating ? 'Generating...' : 'Regenerate'}
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