const express = require("express");
const router = express.Router();
const lawController = require("../controllers/lawController");

router.post("/laws", lawController.getlaws);


module.exports = router;