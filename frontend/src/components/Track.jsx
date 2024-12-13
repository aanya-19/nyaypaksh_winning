import React, { useState } from "react";
import axios from "axios";
import "../styles/Track.css";

function Track() {
  const [caseId, setCaseId] = useState("");
  const [caseName, setCaseName] = useState("");
  const [partiesInvolved, setPartiesInvolved] = useState("");
  const [hearingDate, setHearingDate] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [status, setStatus] = useState("Ongoing");
  const [uploadedFile, setUploadedFile] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");
  const [cases, setCases] = useState([
    {
      caseId: "12345",
      caseName: "XYZ vs ABC Corp",
      partiesInvolved: "XYZ Corp, ABC Corp",
      hearingDate: "2024-10-15",
      priority: "High",
      status: "Ongoing",
      documentLink: "N/A",
    },
  ]);

  const handleAddCase = async (e) => {
    e.preventDefault();

    if (!caseId || !caseName || !partiesInvolved || !hearingDate || !uploadedFile) {
      alert("Please provide all required details.");
      return;
    }

    const formData = new FormData();
    formData.append("caseId", caseId);
    formData.append("caseName", caseName);
    formData.append("partiesInvolved", partiesInvolved);
    formData.append("hearingDate", hearingDate);
    formData.append("priority", priority);
    formData.append("status", status);
    formData.append("document", uploadedFile);

    try {
      const response = await axios.post("http://localhost:5000/api/track/add-case", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert(response.data.message);

      setCases((prevCases) => [
        ...prevCases,
        {
          caseId,
          caseName,
          partiesInvolved,
          hearingDate,
          priority,
          status,
          documentLink:`http://localhost:5000${ response.data.documentLink || "Uploaded Document"}`,
         
        },
      ]);
      console.log(response.data.documentLink);

      setCaseId("");
      setCaseName("");
      setPartiesInvolved("");
      setHearingDate("");
      setPriority("Medium");
      setUploadedFile(null);
    } catch (error) {
      console.error("Error adding case:", error);
      alert("Failed to add case.");
    }
  };

  const filteredCases = cases.filter((caseItem) => {
    const matchesSearch = caseItem.caseName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      caseItem.partiesInvolved.toLowerCase().includes(searchQuery.toLowerCase()) ||
      caseItem.caseId.includes(searchQuery);

    const matchesStatus = filterStatus === "All" || caseItem.status === filterStatus;

    return matchesSearch && matchesStatus;
  });

  const getPriorityClass = (priority) => {
    switch (priority) {
      case "High":
        return "priority-high";
      case "Medium":
        return "priority-medium";
      case "Low":
        return "priority-low";
      default:
        return "";
    }
  };

  return (
    <div className="tracker">
      <div className="tracker-head">
        <h2>Case Tracking</h2>
        <div className="cards">
          <div className="card">Total Cases<br /> <p>{cases.length}</p></div>
          <div className="card">Ongoing Cases<br /> <p>{cases.filter((c) => c.status === "Ongoing").length}</p></div>
          <div className="card">Closed Cases<br /> <p>{cases.filter((c) => c.status === "Closed").length}</p></div>
        </div>
       
      </div>

      <section className="case-details">
        <h3>Cases</h3>
        <div className="filters">
  
          <input
            type="text"
            placeholder="Search cases..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}>
            <option value="All">All</option>
            <option value="Ongoing">Ongoing</option>
            <option value="Closed">Closed</option>
          </select>
        </div>
        <table>
          <thead>
            <tr>
              <th>Case ID</th>
              <th>Case Name</th>
              <th>Parties Involved</th>
              <th>Hearing Date</th>
              <th>Priority</th>
              <th>Status</th>
              <th>Document</th>
            </tr>
          </thead>
          <tbody>
            {filteredCases.map((caseItem, index) => (
              <tr key={index}>
                <td>{caseItem.caseId}</td>
                <td>{caseItem.caseName}</td>
                <td>{caseItem.partiesInvolved}</td>
                <td>{caseItem.hearingDate}</td>
                <td className={getPriorityClass(caseItem.priority)}>{caseItem.priority}</td>
                <td>{caseItem.status}</td>
                <td>
                  {caseItem.documentLink !== "N/A" ? (
                    <a href={caseItem.documentLink} target="_blank" rel="noopener noreferrer">
                      View Document
                    </a>
                  ) : (
                    "N/A"
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="add-case-section">
          <h3>Add New Case</h3>
          <form onSubmit={handleAddCase}>
            <div className="first">
            <label>
              <input
                type="text"
                value={caseId}
                onChange={(e) => setCaseId(e.target.value)}
                placeholder="Enter Case ID"
                required
              />
            </label>
            <label>

              <input
                type="text"
                value={caseName}
                onChange={(e) => setCaseName(e.target.value)}
                placeholder="Enter Case Name"
                required
              />
            </label>
            <label>
      
              <input
                type="text"
                value={partiesInvolved}
                onChange={(e) => setPartiesInvolved(e.target.value)}
                placeholder="Enter Parties Involved"
                required
              />
            </label>
            <label>
        
              <input
                type="date"
                value={hearingDate}
                onChange={(e) => setHearingDate(e.target.value)}
                required
              />
            </label>
            </div>
            <div className="second">
            <label>
      
              <select value={priority} onChange={(e) => setPriority(e.target.value)}>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
            </label>
            <label>
         
              <input
                type="file"
                onChange={(e) => setUploadedFile(e.target.files[0])}
                required
              />
            </label>
            </div>
            <div className="track-sub">
            <button type="submit">Add Case</button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Track;
