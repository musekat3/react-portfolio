import React from 'react';

const Resume = () => {
    const [resumeData, setResumeData] = React.useState({});
      return (
    <div className="container mt-5">
      <h2 className="mb-3">React Resume Component Example</h2>
      <div className="resume-content">
        {/* Resume fields go here */}
      </div>
      <button className="btn btn-danger" onClick={handlePrint}>
        Print Resume
      </button>
    </div>
  );

  };

  export default Resume;