import React, { useContext, useState } from 'react';
import { IoCopyOutline } from 'react-icons/io5';
import { GrDocumentDownload } from "react-icons/gr";
import { AuthContext } from '../provider/AuthProvider';

const CopyableText = () => {
    const {user} = useContext(AuthContext);
  const textToCopy  : string= `
[`;

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
