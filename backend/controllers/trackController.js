const path = require("path");
const { addCase } = require("../models/trackModel");

const addNewCase = async (req, res) => {
  const { caseId, caseName, partiesInvolved, hearingDate, status } = req.body;
  const uploadedFile = req.file; // Access the uploaded file information

  // Validate input
  if (!caseId || !caseName || !partiesInvolved || !hearingDate || !uploadedFile) {
    return res.status(400).json({ message: "Please provide all required details." });
  }

  // Construct the file link
  const documentLink = `/uploads/${uploadedFile.filename}`;

  try {
    // Add case to the database
    const newCase = await addCase(caseId, caseName, partiesInvolved, hearingDate, status, documentLink);

    // Respond with success
    return res.status(201).json({
      message: "Case added successfully",
      case: newCase,
      documentLink,
    });
  } catch (error) {
    console.error("Error adding case:", error);
    return res.status(500).json({ message: "Failed to add case." });
  }
};

module.exports = { addNewCase };
