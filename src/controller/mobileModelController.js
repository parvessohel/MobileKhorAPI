// mobileModelController.js

const MobileModel = require("../models/mobileModel");

// Controller for creating a new mobile model
createMobileModel = async (req, res) => {
  try {
    const mobileModel = await MobileModel.create(req.body);
    res.status(201).json({ success: true, data: mobileModel });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Controller for fetching all mobile models
getAllMobileModels = async (req, res) => {
  try {
    const mobileModels = await MobileModel.find();
    res.status(200).json({ success: true, data: mobileModels });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Controller for fetching a single mobile model by ID
getMobileModelById = async (req, res) => {
  try {
    const mobileModel = await MobileModel.findById(req.params.id);
    if (!mobileModel) {
      return res.status(404).json({ success: false, error: "Mobile model not found" });
    }
    res.status(200).json({ success: true, data: mobileModel });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Controller for updating a mobile model by ID
updateMobileModelById = async (req, res) => {
  try {
    const mobileModel = await MobileModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!mobileModel) {
      return res.status(404).json({ success: false, error: "Mobile model not found" });
    }
    res.status(200).json({ success: true, data: mobileModel });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Controller for deleting a mobile model by ID
deleteMobileModelById = async (req, res) => {
  try {
    const mobileModel = await MobileModel.findByIdAndDelete(req.params.id);
    if (!mobileModel) {
      return res.status(404).json({ success: false, error: "Mobile model not found" });
    }
    res.status(200).json({ success: true, data: {} });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};


module.exports = {createMobileModel, getAllMobileModels, getMobileModelById, updateMobileModelById, deleteMobileModelById}