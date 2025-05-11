import React, { useState } from 'react';
import { Job } from '../../provider/JobsProvider';

interface EditModalProps {
  isOpen: boolean;
  onClose: () => void;
  job: Job;
  mode: 'job' | 'coverLetter' | 'coldEmail' | 'companyResearch';
  onSave: (updatedData: Partial<Job>) => Promise<void>;
}

const EditModal: React.FC<EditModalProps> = ({ 
  isOpen, 
  onClose, 
  job, 
  mode, 
  onSave 
}) => {
  const [title, setTitle] = useState(job.title || '');
  const [company, setCompany] = useState(job.company || '');
  const [description, setDescription] = useState(job.description || '');
  const [url, setUrl] = useState(job.url || '');
  const [coverLetter, setCoverLetter] = useState(job.coverLetter || '');
  const [coldEmail, setColdEmail] = useState(job.coldEmail || '');
  const [companyResearch, setCompanyResearch] = useState(job.companyResearch || '');
  const [isSaving, setIsSaving] = useState(false);

  if (!isOpen) return null;

  const handleSave = async () => {
    setIsSaving(true);
    try {
      const updatedData: Partial<Job> = {};
      
      if (mode === 'job') {
        updatedData.title = title;
        updatedData.company = company;
        updatedData.description = description;
        updatedData.url = url;
      } else if (mode === 'coverLetter') {
        updatedData.coverLetter = coverLetter;
      } else if (mode === 'coldEmail') {
        updatedData.coldEmail = coldEmail;
      } else if (mode === 'companyResearch') {
        updatedData.companyResearch = companyResearch;
      }
      
      await onSave(updatedData);
      onClose();
    } catch (error) {
      console.error('Error saving changes:', error);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">
            {mode === 'job' ? 'Edit Job Details' : 
             mode === 'coverLetter' ? 'Edit Cover Letter' : 
             mode === 'companyResearch' ? 'Edit Company Research' : 'Edit Cold Email'}
          </h2>
          
          {mode === 'job' && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Job Title</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700">Company</label>
                <input
                  type="text"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700">URL</label>
                <input
                  type="text"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700">Job Description</label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={6}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            </div>
          )}
          
          {mode === 'coverLetter' && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Cover Letter Content</label>
              <textarea
                value={coverLetter}
                onChange={(e) => setCoverLetter(e.target.value)}
                rows={15}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 font-serif"
                style={{ whiteSpace: 'pre-wrap', lineHeight: '1.6' }}
              />
            </div>
          )}
          
          {mode === 'coldEmail' && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Cold Email Content</label>
              <textarea
                value={coldEmail}
                onChange={(e) => setColdEmail(e.target.value)}
                rows={15}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 font-serif"
                style={{ whiteSpace: 'pre-wrap', lineHeight: '1.6' }}
              />
            </div>
          )}
          
          {mode === 'companyResearch' && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Company Research Content</label>
              <textarea
                value={companyResearch}
                onChange={(e) => setCompanyResearch(e.target.value)}
                rows={15}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 font-serif"
                style={{ whiteSpace: 'pre-wrap', lineHeight: '1.6' }}
              />
            </div>
          )}
          
          <div className="mt-6 flex justify-end space-x-3">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              disabled={isSaving}
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:opacity-50"
            >
              {isSaving ? 'Saving...' : 'Save Changes'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditModal;