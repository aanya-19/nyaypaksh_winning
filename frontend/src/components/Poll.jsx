import React, { useState } from "react";
import "../styles/Paksh.css";

function Poll() {
  const [step, setStep] = useState("upload"); // Steps: upload -> create -> poll
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState(["", ""]);
  const [selectedOption, setSelectedOption] = useState("");
  const [poll, setPoll] = useState(null);
  const [votes, setVotes] = useState({});
  const [fileName, setFileName] = useState("");
  const [formData, setFormData] = useState({
    judgeName: "",
    email: "",
    caseId: "",
    suggestions: "",
  });
  const [caseDetails, setCaseDetails] = useState({
    title: "",
    description: "",
    file: null,
  });

  // Handle case details form inputs
  const handleCaseDetailsChange = (e) => {
    const { name, value } = e.target;
    setCaseDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
    }
  };

  const handleCaseDetailsSubmit = (e) => {
    e.preventDefault();
   
    setStep("create");
    
  };

  // Handle poll creation inputs
  const handleQuestionChange = (e) => setQuestion(e.target.value);

  const handleOptionChange = (index, value) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const handleAddOption = () => setOptions([...options, ""]);
  const handleRemoveOption = (index) => setOptions(options.filter((_, i) => i !== index));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (question && options.every((opt) => opt)) {
      setPoll({ question, options });
      setVotes(options.reduce((acc, option) => ({ ...acc, [option]: 0 }), {}));
      setStep("poll");
    } else {
      alert("Please complete the form with valid inputs");
    }
  };

  const handleVoteChange = (e) => setSelectedOption(e.target.value);

  const handleVoteSubmit = (e) => {
    e.preventDefault();
    if (selectedOption) {
      setVotes((prevVotes) => {
        // Safely update the vote count
        const newVotes = { ...prevVotes };
        newVotes[selectedOption] = (newVotes[selectedOption] || 0) + 1;
        return newVotes;
      });
    }
  };
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCommonSubmit = (e) => {
    e.preventDefault();
    handleSubmit(e);
    handleVoteSubmit(e);
    console.log("Suggestions form submitted with data:", formData);
  };

  return (
    <div className="poll-container">
      {step === "upload" ? (
        <form onSubmit={handleCaseDetailsSubmit} className="case-details-form">
          <h1>Provide Case Details</h1>
          <div className="input-group">
            <label htmlFor="title">Case Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={caseDetails.title}
              onChange={handleCaseDetailsChange}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="description">Case Description</label>
            <input
              id="description"
              name="description"
              rows="4"
              value={caseDetails.description}
              onChange={handleCaseDetailsChange}
              required
                  ></input>
                </div>
                <div className="input-group">
            <label htmlFor="file">Upload Case Document</label>
            <div
              className="upload-box-paksh"
              onClick={() => document.getElementById("file").click()}
            >
              <p>Drag and Drop file here <br /><br /><a href="#"><i class='bx bxs-file-doc' ></i>Choose file</a></p>
              {fileName && <p className="file-info">Selected file: {fileName}</p>}
              <input
                type="file"
                id="file"
                name="file"
                accept=".pdf,.doc,.docx"
                onChange={handleFileUpload}
                required
              />
            </div>
          </div>
          <button type="submit" className="submit-button">Proceed to Create Poll</button>
        </form>
      ) : step === "create" ? (
        <form onSubmit={handleSubmit} className="poll-form">
          <h1>Create a New Poll</h1>
          <div className="input-group">
            <label htmlFor="question">Poll Question</label>
            <input
              type="text"
              id="question"
              value={question}
              onChange={handleQuestionChange}
              required
            />
          </div>
          <div className="options-group">
            {options.map((option, index) => (
              <div key={index} className="option-input-group">
                <input
                  type="text"
                  value={option}
                  onChange={(e) => handleOptionChange(index, e.target.value)}
                  placeholder="Option"
                  required
                />
                {options.length > 2 && (
                  <button type="button" onClick={() => handleRemoveOption(index)}>
                    Remove
                  </button>
                )}
              </div>
            ))}
            <button type="button" onClick={handleAddOption}>Add Option</button>
          </div>
          <button type="submit" className="submit-button">Create Poll</button>
        </form>
      ) : (
        <div className="poll-display">
      
          <h1>{poll.question}</h1>
          <form onSubmit={handleVoteSubmit} className="poll-options-form">
            {poll.options.map((option, index) => (
              <div key={index} className="poll-option">
                <input
                  type="radio"
                  id={`option${index}`}
                  name="poll"
                  value={option}
                  checked={selectedOption === option}
                  onChange={handleVoteChange}
                />
                <label htmlFor={`option${index}`}>{option}</label>
              </div>
            ))}
          </form>
          <div className="poll-results">
            <h2>Poll Results</h2>
            {poll.options.map((option, index) => (
              <div key={index} className="result-bar">
                <span className="feature-name">{option}</span>
                <div className="bar" style={{ width: `${votes[option] || 0}%` }}></div>
                <span className="percentage">{votes[option] || 0} votes</span>
              </div>
            ))}
          </div>
          <div className="form-container">
            <h1 className="form-title">Judge's Expert Suggestions</h1>
            <form onSubmit={handleCommonSubmit} className="feedback-form">
              <div className="form-group">
                <label htmlFor="judgeName">Judge's Name</label>
                <input
                  type="text"
                  id="judgeName"
                  name="judgeName"
                  placeholder="Enter your name"
                  value={formData.judgeName}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="suggestions">Your Suggestions</label>
                <textarea
                  id="suggestions"
                  name="suggestions"
                  rows="4"
                  placeholder="Provide your expert suggestions based on the case"
                  value={formData.suggestions}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <div className="form-group">
                <button type="submit" className="submit-button">Submit</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Poll;
