import React, { useState, useContext, useEffect } from 'react';
import { useParams } from 'react-router';
import { JobsContext } from '../../provider/JobsProvider';

import axios from 'axios';
import Loader from '../Common/Loader';
import { SparklesIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

interface Question {
  id: string;
  question: string;
  options?: string[];
  correctAnswer?: number;
  type: 'behavioral' | 'technical';
}

interface InterviewData {
  behavioralQuestions: Question[];
  technicalQuestions: Question[];
  generated: boolean;
  jobID: string;
}

const SingleMockInterview = () => {
  const { jobs, refetchJobs } = useContext(JobsContext);

  const { jobID } = useParams<{ jobID: string }>();

  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [interviewData, setInterviewData] = useState<InterviewData | null>(
    null
  );
  const [selectedAnswers, setSelectedAnswers] = useState<
    Record<string, number>
  >({});
  const [showResults, setShowResults] = useState<boolean>(false);

  // Find the job from context
  const job = jobs.find(j => j.jobID === jobID);

  // Fetch or initialize interview data
  useEffect(() => {
    if (job?.mockInterviewData) {
      try {
        const parsedData =
          typeof job.mockInterviewData === 'string'
            ? JSON.parse(job.mockInterviewData)
            : job.mockInterviewData;

        setInterviewData(parsedData);
      } catch (error) {
        console.error('Error parsing interview data:', error);
      }
    }
  }, [job]);

  // Generate interview questions
  const generateInterviewQuestions = async () => {
    if (!job) return;

    setIsGenerating(true);

    try {
      const response = await axios.post(
        `http://localhost:3000/generate-interview/${jobID}`,
        {
          jobTitle: job.title,
          company: job.company,
          description: job.description,
        }
      );

      if (response.data.success) {
        setInterviewData(response.data.interviewData);
        refetchJobs(); // Update job data in context
      }
    } catch (error) {
      console.error('Error generating interview questions:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  // Handle answer selection
  const handleAnswerSelect = (questionId: string, optionIndex: number) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionId]: optionIndex,
    }));
  };

  // Check answers and show results
  const checkAnswers = () => {
    setShowResults(true);
  };

  // If job not found, show loader
  if (!job) {
    return <Loader message="Loading interview questions" />;
  }

  return (
    <div className="p-5 max-w-7xl mx-auto">
      {/* Job details header */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold">{job.title}</h2>
        <p className="text-gray-600">{job.company}</p>
      </div>

      {/* Interview sections */}
      {!interviewData ? (
        // Show generate button if no interview data
        <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 text-center">
          <p className="text-gray-600 mb-4">
            No interview questions have been generated for this job yet.
          </p>
          <button
            onClick={generateInterviewQuestions}
            className="btn bg-blue-500 text-white"
            disabled={isGenerating}
          >
            {isGenerating ? (
              <>
                <span className="loading loading-spinner loading-sm mr-2"></span>
                Generating Questions...
              </>
            ) : (
              <>
                <SparklesIcon className="h-5 w-5 mr-2" />
                Generate Interview Questions
              </>
            )}
          </button>
        </div>
      ) : (
        // Show interview questions
        <div className="space-y-8">
          {/* Behavioral section */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl  md:text-2xl font-semibold mb-4 text-blue-700">
              Behavioral Questions
            </h3>
            <div className="space-y-6">
              {interviewData.behavioralQuestions.map((question, idx) => (
                <div
                  key={question.id}
                  className="bg-gray-50 p-4 rounded-lg border border-gray-200"
                >
                  <p className="font-medium text-lg md:text-xl mb-3">
                    {idx + 1}. {question.question}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Technical section */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl  md:text-2xl font-semibold mb-4 text-green-700">
              Technical Questions
            </h3>
            <div className="space-y-6">
              {interviewData.technicalQuestions.map((question, idx) => (
                <div
                  key={question.id}
                  className="bg-gray-50 p-4 rounded-lg border border-gray-200"
                >
                  <p className="font-medium text-lg md:text-xl mb-3">
                    {idx + 1}. {question.question}
                  </p>
                  <div className="pl-5 space-y-2">
                    {question.options?.map((option, optionIdx) => (
                      <label
                        key={optionIdx}
                        className={`flex items-start p-2 rounded ${
                          showResults
                            ? optionIdx === question.correctAnswer
                              ? 'bg-green-100 border border-green-300'
                              : selectedAnswers[question.id] === optionIdx
                                ? 'bg-red-100 border border-red-300'
                                : 'bg-white border border-gray-200'
                            : selectedAnswers[question.id] === optionIdx
                              ? 'bg-blue-100 border border-blue-300'
                              : 'bg-white border border-gray-200'
                        }`}
                      >
                        <input
                          type="radio"
                          name={`question-${question.id}`}
                          className="mt-1 mr-2"
                          onChange={() =>
                            handleAnswerSelect(question.id, optionIdx)
                          }
                          checked={selectedAnswers[question.id] === optionIdx}
                          disabled={showResults}
                        />
                        <span>{option}</span>
                        {showResults &&
                          optionIdx === question.correctAnswer && (
                            <CheckCircleIcon className="h-5 w-5 text-green-600 ml-2" />
                          )}
                      </label>
                    ))}
                  </div>
                  {showResults && (
                    <div className="mt-3 text-sm">
                      {selectedAnswers[question.id] ===
                      question.correctAnswer ? (
                        <p className="text-green-600">Correct answer!</p>
                      ) : (
                        <p className="text-red-600">
                          Incorrect. The correct answer is:{' '}
                          {question.options?.[question.correctAnswer || 0]}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex justify-between">
            <button
              className="btn btn-primary"
              onClick={checkAnswers}
              disabled={showResults}
            >
              Check Answers
            </button>

            {showResults && (
              <button
                className="btn btn-secondary"
                onClick={() => {
                  setSelectedAnswers({});
                  setShowResults(false);
                }}
              >
                Reset & Try Again
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleMockInterview;
