import React, { useContext, useState } from 'react';
import { IoCopyOutline } from 'react-icons/io5';
import { GrDocumentDownload } from "react-icons/gr";
import { AuthContext } from '../provider/AuthProvider';

const CopyableText = () => {
    const {user} = useContext(AuthContext);
  const textToCopy  : string= `
[Your Name]
[Your Address]
[Your Phone Number]
[Your Email Address]

[Date]

Hiring Manager
[Restaurant Name/Company Name - If known, otherwise omit]
[Restaurant/Company Address - If known, otherwise omit]

**Subject: Application for Line Cook Position**

Dear Hiring Manager,

I am writing to express my strong interest in the Line Cook position advertised recently. With my experience in fast-paced kitchen environments and a genuine passion for food preparation and culinary arts, I am confident that I possess the skills and dedication necessary to be a valuable asset to your team.

Throughout my previous experience, I have developed proficiency in various cooking techniques, efficient station management, and maintaining impeccable standards of cleanliness and food safety. I am adept at working collaboratively with kitchen staff under pressure, ensuring orders are prepared accurately, consistently, and in a timely manner to meet service demands. My focus is always on contributing to a smooth kitchen operation and delivering high-quality dishes.

I am particularly drawn to this opportunity [mention the restaurant name here if known, otherwise omit this specific phrase] and am seeking a position where I can apply my skills within a professional and supportive environment. The mention of great benefits further reinforces my interest, suggesting a company culture that values its employees and encourages long-term commitment.

Thank you for considering my application. My resume provides further detail on my qualifications and work history. I am eager to learn more about this role and discuss how my abilities align with your needs. I look forward to the possibility of an interview at your convenience.

Sincerely,

[Your Typed Name].`;

  const [copyStatus, setCopyStatus] = useState('');

  const copyToClipboard = async () => {
    try {
      // Use the Clipboard API if available
      await navigator.clipboard.writeText(textToCopy);
      setCopyStatus('Copied!');
    } catch (error) {
      setCopyStatus('Failed to copy!');
    }

    // Clear the status message after a short delay if needed.
    setTimeout(() => setCopyStatus(''), 2000);
  };
  const downloadDocFile = () => {
    const blob = new Blob([textToCopy], { type: 'application/msword' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${user?.displayName}.doc`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      {/* Display the text inside a styled container */}
      <pre
        style={{
          background: '#f5f5f5',
          padding: '15px',
          borderRadius: '4px',
          border: '1px solid #ddd',
          whiteSpace: 'pre-wrap'
        }}
      >
        {textToCopy}
      </pre>

      {/* Copy button */}
      <button
        onClick={copyToClipboard}
        style={{
          marginTop: '10px',
          padding: '8px 12px',
          cursor: 'pointer'
        }}
      >
       <IoCopyOutline />

      </button>
      <button
        onClick={downloadDocFile}
        style={{
          marginTop: '10px',
          marginLeft: '10px',
          padding: '8px 12px',
          cursor: 'pointer'
        }}
      >
        <GrDocumentDownload />

      </button>

      {/* Display the copy status if available */}
      {copyStatus && (
        <span style={{ marginLeft: '10px', fontStyle: 'italic' }}>
          {copyStatus}
        </span>
      )}
    </div>
  );
};

export default CopyableText;
