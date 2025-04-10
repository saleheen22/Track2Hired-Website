import React, { useState, useRef, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../provider/AuthProvider';
import { ArrowUpTrayIcon, DocumentIcon } from '@heroicons/react/24/outline';
import { JobsContext } from '../provider/JobsProvider';
import * as pdfjs from 'pdfjs-dist';

// Set up PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Resume = () => {
    const { jobs } = useContext(JobsContext);
    const { user } = useContext(AuthContext);
    const [extractedText, setExtractedText] = useState<string>('');
    const [isExtracting, setIsExtracting] = useState<boolean>(false);
    const [resumeFile, setResumeFile] = useState<File | null>(null);
    const [resumeUrl, setResumeUrl] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);
    
    // Function to convert file to base64
    const convertToBase64 = (file: File): Promise<string> => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result as string);
            reader.onerror = error => reject(error);
        });
    };
    
    // Function to handle saving resume to database
    const handleSaveResume = async () => {
        if (!user?.email || !resumeFile || !extractedText) {
            setError('Cannot save: missing file or extracted text');
            return;
        }
        
        try {
            // Convert file to base64
            const base64Data = await convertToBase64(resumeFile);
            
            // Send to server
            const response = await axios.patch(
                `http://localhost:3000/resume/upload/${user.email}`, 
                {
                    fileName: resumeFile?.name || 'resume.pdf',
                   
                    extractedText: extractedText
                }
            );
            
            if (response.data.success) {
                // Success feedback
                alert(`Resume saved successfully! Updated ${response.data.modifiedCount} job records.`);
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
                    .map(item => 'str' in item ? item.str : '')
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
            
            <div className="mb-8">
                <div 
                    className="border-2 border-dashed border-primary-300 rounded-lg p-8 text-center cursor-pointer hover:bg-gray-50 transition-colors"
                    onClick={handleUploadClick}
                >
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
                            <p className="text-lg mb-2">Click to upload your resume (PDF)</p>
                            <p className="text-sm text-gray-500">Maximum file size: 5MB</p>
                        </div>
                    ) : (
                        <div className="flex items-center justify-center">
                            <DocumentIcon className="h-10 w-10 text-red-500 mr-3" />
                            <span>{resumeFile?.name}</span>
                            <button 
                                className="ml-4 btn btn-primary btn-sm"
                                onClick={(e) => {
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
                <div className="border rounded-lg p-4 bg-white shadow-md">
                    <h2 className="text-xl font-semibold mb-4">Resume Preview</h2>
                    <iframe
                        src={resumeUrl}
                        width="100%" 
                        height="600px"
                        title="Resume Preview"
                        className="border"
                    />
                </div>
            )}
            
            {extractedText && (
                <div className="border rounded-lg p-4 bg-white shadow-md">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-semibold">Extracted Text</h2>
                        <button 
                            onClick={handleSaveResume}
                            className="btn btn-primary"
                        >
                            Save Resume
                        </button>
                    </div>
                    <div className="whitespace-pre-wrap border p-4 bg-gray-50 h-[600px] overflow-y-auto text-sm">
                        {extractedText}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Resume;