import React from 'react';
import { Link } from 'react-router';

const AboutUs = () => (
  <div className="max-w-3xl mx-auto p-6">
    <h1 className="text-3xl font-bold mb-4 text-blue-700">About Track2Hired</h1>
    <p className="mb-4 text-lg">
      <strong>Track2Hired</strong> is your all-in-one platform to supercharge
      your job search. Our mission is to help job seekers stay organized, save
      time, and land their dream jobs faster.
    </p>
    <p className="mb-4">
      We provide a seamless experience through our web dashboard and our
      powerful browser extension. With Track2Hired, you can:
    </p>
    <ul className="list-disc ml-6 mb-4">
      <li>
        Save job listings from sites like LinkedIn, Indeed, Glassdoor, and
        ZipRecruiter with a single click using our extension.
      </li>
      <li>
        Automatically capture job details (title, company, description, and URL)
        and store them securely in your personal dashboard.
      </li>
      <li>Track your job applications, interviews, and offers in one place.</li>
      <li>
        Generate AI-powered cover letters, cold emails, and company research to
        stand out in your applications.
      </li>
      <li>
        Practice with AI-generated mock interview questions tailored to your
        target roles.
      </li>
    </ul>
    <p className="mb-4">
      Our team is passionate about making the job search process smarter and
      less stressful. We believe in privacy, transparency, and empowering users
      with the best tools.
    </p>
    <p className="mb-8">
      Want to know how we handle your data? Read our{' '}
      <Link to="/privacy" className="text-blue-600 underline">
        Privacy Policy
      </Link>
      .
    </p>
    <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
    <p>
      Have questions, feedback, or need support? Reach out to us at{' '}
      <a
        href="mailto:muntasaleheen@gmail.com"
        className="text-blue-600 underline"
      >
        muntasaleheen@gmail.com
      </a>
      .
    </p>
  </div>
);

export default AboutUs;
