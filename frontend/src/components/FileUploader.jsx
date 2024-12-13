import React, { useState } from "react";
import "../styles/Summary.css";

function FileUploader({ onFileUpload }) {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (file) {
      onFileUpload(file);
    } else {
      alert("Please upload a file.");
    }
  };

  return (
    <div className="uploader">
    <div className="file-uploader-modern">
        
      <div className="upload-container">
        <input
          id="file-upload"
          type="file"
          accept=".pdf, .docx, .txt"
          onChange={handleFileChange}
        />
      </div>
      </div>
      <button className="upload-button" onClick={handleUpload}>
        Upload File
      </button>
    </div>
  );
}

export default FileUploader;
