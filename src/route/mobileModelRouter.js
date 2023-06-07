// mobileModelRouter.js

const express = require("express");
const { createMobileModel, getAllMobileModels, getMobileModelById, updateMobileModelById, deleteMobileModelById } = require("../controller/mobileModelController");


const router = express.Router();

// Routes for mobile models
router.post("/", createMobileModel);
router.get("/", getAllMobileModels);
router.get("/:id", getMobileModelById);
router.put("/:id", updateMobileModelById);
router.delete("/:id", deleteMobileModelById);

module.exports = router;
