import React from 'react';

const Privacy = () => (
  <div className="max-w-3xl mx-auto p-6">
    <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
    <p className="mb-2">
      <strong>Effective Date:</strong> June 2024
    </p>
    <p className="mb-6">
      Track2Hired (“we”, “us”, or “our”) is committed to protecting your
      privacy. This Privacy Policy explains how we collect, use, and safeguard
      your information when you use the Track2Hired Chrome extension and the
      Track2Hired website (
      <a
        href="https://track2hired.web.app"
        className="text-blue-600 underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        https://track2hired.web.app
      </a>
      ).
    </p>

    <h2 className="text-xl font-semibold mt-6 mb-2">Information We Collect</h2>
    <ol className="list-decimal ml-6 mb-4">
      <li className="mb-2">
        <strong>Personally Identifiable Information</strong>
        <br />
        <span>Email Address:</span> We collect your email address when you log
        in to Track2Hired. This is used to associate saved jobs with your
        account.
      </li>
      <li className="mb-2">
        <strong>Job Data</strong>
        <br />
        When you use the extension to save a job, we collect the job title,
        company name, job description, job URL, and the date you saved the job.
      </li>
      <li className="mb-2">
        <strong>Authentication</strong>
        <br />
        We use a secure authentication token (JWT) stored as a cookie to keep
        you logged in. We do not collect your password or other sensitive
        credentials.
      </li>
      <li className="mb-2">
        <strong>No Sensitive Data</strong>
        <br />
        We do not collect health, financial, or payment information.
        <br />
        We do not collect your browsing history, keystrokes, or personal
        communications.
      </li>
    </ol>

    <h2 className="text-xl font-semibold mt-6 mb-2">
      How We Use Your Information
    </h2>
    <ul className="list-disc ml-6 mb-4">
      <li>To allow you to save and view jobs in your Track2Hired account.</li>
      <li>To authenticate your session and keep your account secure.</li>
      <li>To improve our services and provide support.</li>
    </ul>

    <h2 className="text-xl font-semibold mt-6 mb-2">
      Data Sharing and Disclosure
    </h2>
    <ul className="list-disc ml-6 mb-4">
      <li>
        We do not sell, rent, or share your personal information with third
        parties, except as required by law or to operate our service (e.g.,
        secure cloud storage).
      </li>
      <li>
        Your data is only used for the purpose of providing the Track2Hired
        service.
      </li>
    </ul>

    <h2 className="text-xl font-semibold mt-6 mb-2">Data Security</h2>
    <ul className="list-disc ml-6 mb-4">
      <li>We use industry-standard security measures to protect your data.</li>
      <li>Authentication tokens are stored securely as cookies.</li>
      <li>Access to your data is restricted to authorized personnel only.</li>
    </ul>

    <h2 className="text-xl font-semibold mt-6 mb-2">Your Choices</h2>
    <ul className="list-disc ml-6 mb-4">
      <li>
        You can view, edit, or delete your saved jobs at any time by logging
        into your Track2Hired account.
      </li>
      <li>
        You can request deletion of your account and associated data by
        contacting us at{' '}
        <a
          href="mailto:muntasaleheen@gmail.com"
          className="text-blue-600 underline"
        >
          muntasaleheen@gmail.com
        </a>
        .
      </li>
    </ul>

    <h2 className="text-xl font-semibold mt-6 mb-2">Changes to This Policy</h2>
    <p className="mb-4">
      We may update this Privacy Policy from time to time. Any changes will be
      posted on this page with an updated effective date.
    </p>

    <h2 className="text-xl font-semibold mt-6 mb-2">Contact Us</h2>
    <p>
      If you have any questions or concerns about this Privacy Policy, please
      contact us at:
      <br />
      Email:{' '}
      <a
        href="mailto:muntasaleheen@gmail.com"
        className="text-blue-600 underline"
      >
        muntasaleheen@gmail.com
      </a>
    </p>
  </div>
);

export default Privacy;
