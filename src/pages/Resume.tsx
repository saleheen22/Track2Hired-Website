import React, { useState, useRef, useContext, useEffect } from 'react';
import axios from 'axios';
import { AuthContext } from '../provider/AuthProvider';
import { ArrowUpTrayIcon, DocumentIcon } from '@heroicons/react/24/outline';

import * as pdfjs from 'pdfjs-dist';

// Set up PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Resume = () => {
 
  const { user } = useContext(AuthContext);
  const [extractedText, setExtractedText] = useState<string>('');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isExtracting, setIsExtracting] = useState<boolean>(false);
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [resumeUrl, setResumeUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true); // Add loading state
  const [savedResumeName, setSavedResumeName] = useState<string | null>(null); // Store resume filename
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (user?.email) {
      fetchExistingResume(user.email);
    } else {
      setIsLoading(false);
    }
  }, []);
  const fetchExistingResume = async (email: string) => {
    try {
      setIsLoading(true);
      const response = await axios.get(`https://track2hired-server.onrender.com/resume/${email}`,{
        withCredentials: true
      });

      if (response.data.success && response.data.resume) {
        setExtractedText(response.data.resume.extractedText || '');
        setSavedResumeName(response.data.resume.fileName || null);
      }
    } catch (err) {
      // Resume might not exist yet, not necessarily an error
      console.log('No resume found or error fetching resume:', err);
    } finally {
      setIsLoading(false);
    }
  };
  // Function to handle saving resume to database
  const handleSaveResume = async () => {
    if (!user?.email || !resumeFile || !extractedText) {
      setError('Cannot save: missing file or extracted text');
      return;
    }

    try {
      // Send to server
      const response = await axios.patch(
        `https://track2hired-server.onrender.com/resume/upload/${user.email}`,
        {
          fileName: resumeFile?.name || 'resume.pdf',

          extractedText: extractedText,
        },{
          withCredentials: true
        }
      );

      if (response.data.success) {
        // Success feedback
        alert(`Resume saved successfully!`);
      } else {
        throw new Error('Failed to save resume');
      }
    } catch (err) {
      console.error('Error saving resume:', err);
      setError('Failed to save resume to database');
    }
  };

  // Function to extract text from PDF
  const extractTextFromPdf = async (file: File) => {
    try {
      setIsExtracting(true);

      // Convert file to ArrayBuffer
      const arrayBuffer = await file.arrayBuffer();

      // Load PDF document
      const pdf = await pdfjs.getDocument({ data: arrayBuffer }).promise;

      let fullText = '';

      // Extract text from each page
      for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        const textContent = await page.getTextContent();
        const pageText = textContent.items
          .map(item => ('str' in item ? item.str : ''))
          .join(' ');
        fullText += pageText + '\n\n';
      }

      return fullText;
    } finally {
      setIsExtracting(false);
    }
  };

  // Handle file upload
  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    setError(null);
    if (!file) return;

    // Validate that file is PDF
    if (file.type !== 'application/pdf') {
      setError('Please upload a PDF file');
      return;
    }

    // Create URL for PDF preview
    const fileUrl = URL.createObjectURL(file);
    setResumeFile(file);
    setResumeUrl(fileUrl);

    // Extract text
    try {
      const text = await extractTextFromPdf(file);
      setExtractedText(text);
    } catch (err) {
      console.error('Error extracting text:', err);
      setError('Failed to extract text from PDF');
    }
  };

  // Trigger file input click
  const handleUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Resume Manager</h1>

      {isLoading ? (
        <div className="text-center py-8">
          <p>Loading resume data...</p>
        </div>
      ) : (
        <>
          {/* Show previously saved resume info if any */}
          {savedResumeName && extractedText && !resumeFile && (
            <div className="mb-6 bg-blue-50 p-4 border border-blue-200 rounded-lg">
              <div className="flex items-center">
                <DocumentIcon className="h-8 w-8 text-blue-500 mr-3" />
                <div>
                  <p className="font-medium">
                    Previously saved resume: {savedResumeName}
                  </p>
                  <p className="text-sm text-gray-600">
                    Upload a new file to replace it
                  </p>
                </div>
              </div>
            </div>
          )}

          <div className="mb-8">
            <div
              className="border-2 border-dashed border-primary-300 rounded-lg p-8 text-center cursor-pointer hover:bg-gray-50 transition-colors"
              onClick={handleUploadClick}
            >
              {/* Upload UI remains the same */}
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                className="hidden"
                accept="application/pdf"
              />

              {!resumeUrl ? (
                <div>
                  <ArrowUpTrayIcon className="mx-auto h-12 w-12 mb-4 text-primary-500" />
                  <p className="text-lg mb-2">
                    Click to {extractedText ? 'update' : 'upload'} your resume
                    (PDF)
                  </p>
                  <p className="text-sm text-gray-500">
                    Maximum file size: 5MB
                  </p>
                </div>
              ) : (
                <div className="flex items-center justify-center">
                  <DocumentIcon className="h-10 w-10 text-red-500 mr-3" />
                  <span>{resumeFile?.name}</span>
                  <button
                    className="ml-4 btn btn-primary btn-sm"
                    onClick={e => {
                      e.stopPropagation();
                      handleUploadClick();
                    }}
                  >
                    Change File
                  </button>
                </div>
              )}

              {error && <p className="text-red-500 mt-2">{error}</p>}
            </div>
          </div>

          {resumeUrl && (
            <div className="border rounded-lg p-4 bg-white shadow-md mb-6">
              <h2 className="text-xl font-semibold mb-4">Resume Preview</h2>
              <button
                onClick={handleSaveResume}
                className="btn btn-success my-5"
              >
                Save Resume
              </button>
              <iframe
                src={resumeUrl}
                width="100%"
                height="600px"
                title="Resume Preview"
                className="border"
              />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Resume;
