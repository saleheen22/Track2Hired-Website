import React, { useState } from "react";

// Define the shape of our job application data
interface JobApplication {
  id: number;
  jobTitle: string;
  company: string;
  companyDescription: string;
  dateApplied: string;
  skillMatch: number; // e.g., percentage value
  coldEmailRecruiter: boolean;
  coldEmailAlumni: boolean;
  coldMessageAlumni: boolean;
  companyResearch: boolean;
  coverLetter: boolean;
  mockInterview: boolean;
}

// Initial job data with default values
const initialJobs: JobApplication[] = [
  {
    id: 1,
    jobTitle: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    companyDescription: "A leading tech company focusing on innovative solutions.",
    dateApplied: "2025-03-25",
    skillMatch: 85,
    coldEmailRecruiter: false,
    coldEmailAlumni: false,
    coldMessageAlumni: false,
    companyResearch: false,
    coverLetter: false,
    mockInterview: false,
  },
  {
    id: 2,
    jobTitle: "UX Designer",
    company: "Design Studio",
    companyDescription:
      "A creative agency specializing in design and user experience.",
    dateApplied: "2025-03-20",
    skillMatch: 75,
    coldEmailRecruiter: false,
    coldEmailAlumni: false,
    coldMessageAlumni: false,
    companyResearch: false,
    coverLetter: false,
    mockInterview: false,
  },
  // Add more jobs as needed
];

const JobTable: React.FC = () => {
  const [jobs, setJobs] = useState<JobApplication[]>(initialJobs);

  // Handler to toggle boolean fields (for outreach/preparation)
  const toggleField = (
    jobId: number,
    field: keyof Pick<
      JobApplication,
      "coldEmailRecruiter" | "coldEmailAlumni" | "coldMessageAlumni" | "companyResearch" | "coverLetter" | "mockInterview"
    >
  ) => {
    setJobs((prevJobs) =>
      prevJobs.map((job) =>
        job.id === jobId
          ? { ...job, [field]: !job[field] }
          : job
      )
    );
  };

  return (
    <div className="max-w-full mx-auto p-4 overflow-auto">
      <table className="min-w-full border border-gray-200 bg-white rounded">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-3 px-4">Job Title</th>
            <th className="py-3 px-4">Company</th>
            <th className="py-3 px-4">Company Description</th>
            <th className="py-3 px-4">Date Applied</th>
            <th className="py-3 px-4">Skill Match</th>
            <th className="py-3 px-4">Cold Email to Recruiter</th>
            <th className="py-3 px-4">Cold Email to Alumni</th>
            <th className="py-3 px-4">Cold Message to Alumni</th>
            <th className="py-3 px-4">Company Research</th>
            <th className="py-3 px-4">Cover Letter</th>
            <th className="py-3 px-4">Mock Interview</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((job) => (
            <tr key={job.id} className="border-b">
              <td className="py-3 px-4">{job.jobTitle}</td>
              <td className="py-3 px-4">{job.company}</td>
              <td className="py-3 px-4">{job.companyDescription}</td>
              <td className="py-3 px-4">{job.dateApplied}</td>
              <td className="py-3 px-4 text-center">{job.skillMatch}%</td>
              <td className="py-3 px-4 text-center">
                <input
                  type="checkbox"
                  checked={job.coldEmailRecruiter}
                  onChange={() => toggleField(job.id, "coldEmailRecruiter")}
                  className="h-4 w-4"
                />
              </td>
              <td className="py-3 px-4 text-center">
                <input
                  type="checkbox"
                  checked={job.coldEmailAlumni}
                  onChange={() => toggleField(job.id, "coldEmailAlumni")}
                  className="h-4 w-4"
                />
              </td>
              <td className="py-3 px-4 text-center">
                <input
                  type="checkbox"
                  checked={job.coldMessageAlumni}
                  onChange={() => toggleField(job.id, "coldMessageAlumni")}
                  className="h-4 w-4"
                />
              </td>
              <td className="py-3 px-4 text-center">
                <input
                  type="checkbox"
                  checked={job.companyResearch}
                  onChange={() => toggleField(job.id, "companyResearch")}
                  className="h-4 w-4"
                />
              </td>
              <td className="py-3 px-4 text-center">
                <input
                  type="checkbox"
                  checked={job.coverLetter}
                  onChange={() => toggleField(job.id, "coverLetter")}
                  className="h-4 w-4"
                />
              </td>
              <td className="py-3 px-4 text-center">
                <input
                  type="checkbox"
                  checked={job.mockInterview}
                  onChange={() => toggleField(job.id, "mockInterview")}
                  className="h-4 w-4"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
<button className="btn" onClick={()=>document.getElementById('my_modal_4').showModal()}>open modal</button>
<dialog id="my_modal_4" className="modal">
  <div className="modal-box w-11/12 max-w-5xl">
    <h3 className="font-bold text-lg">Hello!</h3>
    <p className="py-4">Click the button below to close</p>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>

    </div>
  );
};

export default JobTable;
