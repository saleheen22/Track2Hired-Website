import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { AuthContext } from '../provider/AuthProvider';

type AddJobFormValues = {
  title: string;
  company: string;
  description: string;
  url: string;
};

const AddJob = () => {
  const { user } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<AddJobFormValues>();

  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  const onSubmit = async (data: AddJobFormValues) => {
    setErrorMsg(null);
    setSuccessMsg(null);

    if (!user?.email) {
      setErrorMsg('You must be logged in to add a job.');
      return;
    }

    const jobData = {
      title: data.title,
      description: data.description,
      email: user.email,
      company: data.company,
      url: data.url,
      dateExtracted: new Date().toISOString(),
    };

    try {
      await axios.post(
        'https://track2hired-server.onrender.com/save/jobs',
        jobData,
        { withCredentials: true }
      );
      setSuccessMsg('Job added successfully!');
      reset();
      alert('Job added successfully!');
    } catch (error: unknown) {
      if (axios.isAxiosError(error) && error.response?.status === 409) {
        setErrorMsg('This job has already been saved!');
      } else if (error instanceof Error) {
        setErrorMsg(error.message);
      } else {
        setErrorMsg(
            'Failed to add job. Please try again.'
        );
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-blue-50 to-blue-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white shadow-xl rounded-lg p-8 w-full max-w-lg border border-blue-200"
      >
        <h2 className="text-2xl font-bold mb-6 text-blue-700 text-center">
          Add a New Job
        </h2>
        {successMsg && (
          <div className="mb-4 text-green-600 font-semibold text-center">
            {successMsg}
          </div>
        )}
        {errorMsg && (
          <div className="mb-4 text-red-600 font-semibold text-center">
            {errorMsg}
          </div>
        )}
        <div className="mb-4">
          <label className="block text-blue-700 font-semibold mb-2">
            Job Title
          </label>
          <input
            type="text"
            {...register('title', { required: 'Job title is required' })}
            className={`input input-bordered w-full border-blue-300 focus:border-blue-500 focus:ring-blue-500 ${
              errors.title ? 'border-red-500' : ''
            }`}
            placeholder="e.g. Software Engineer"
          />
          {errors.title && (
            <span className="text-red-500 text-sm">{errors.title.message}</span>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-blue-700 font-semibold mb-2">
            Company
          </label>
          <input
            type="text"
            {...register('company', { required: 'Company is required' })}
            className={`input input-bordered w-full border-blue-300 focus:border-blue-500 focus:ring-blue-500 ${
              errors.company ? 'border-red-500' : ''
            }`}
            placeholder="e.g. Google"
          />
          {errors.company && (
            <span className="text-red-500 text-sm">
              {errors.company.message}
            </span>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-blue-700 font-semibold mb-2">
            Job Description
          </label>
          <textarea
            {...register('description', {
              required: 'Job description is required',
            })}
            className={`input input-bordered w-full border-blue-300 focus:border-blue-500 focus:ring-blue-500 min-h-[120px] ${
              errors.description ? 'border-red-500' : ''
            }`}
            placeholder="Describe the job role and requirements"
          />
          {errors.description && (
            <span className="text-red-500 text-sm">
              {errors.description.message}
            </span>
          )}
        </div>
        <div className="mb-6">
          <label className="block text-blue-700 font-semibold mb-2">
            Job URL
          </label>
          <input
            type="url"
            {...register('url', { required: 'Job URL is required' })}
            className={`input input-bordered w-full border-blue-300 focus:border-blue-500 focus:ring-blue-500 ${
              errors.url ? 'border-red-500' : ''
            }`}
            placeholder="https://example.com/job"
          />
          {errors.url && (
            <span className="text-red-500 text-sm">{errors.url.message}</span>
          )}
        </div>
        <button
          type="submit"
          className="btn w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors duration-200"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Adding...' : 'Add Job'}
        </button>
      </form>
    </div>
  );
};

export default AddJob;
