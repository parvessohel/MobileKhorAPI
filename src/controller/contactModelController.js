// contactModelController.js

const ContactModel = require("../models/contactModels");

// Controller for creating a new contact
exports.createContact = async (req, res) => {
  try {
    const contact = await ContactModel.create(req.body);
    res.status(201).json({ success: true, data: contact });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Controller for fetching all contacts
exports.getAllContacts = async (req, res) => {
  try {
    const contacts = await ContactModel.find();
    res.status(200).json({ success: true, data: contacts });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Controller for fetching a single contact by ID
exports.getContactById = async (req, res) => {
  try {
    const contact = await ContactModel.findById(req.params.id);
    if (!contact) {
      return res.status(404).json({ success: false, error: "Contact not found" });
    }
    res.status(200).json({ success: true, data: contact });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Controller for updating a contact by ID
exports.updateContactById = async (req, res) => {
  try {
    const contact = await ContactModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!contact) {
      return res.status(404).json({ success: false, error: "Contact not found" });
    }
    res.status(200).json({ success: true, data: contact });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Controller for deleting a contact by ID
exports.deleteContactById = async (req, res) => {
  try {
    const contact = await ContactModel.findByIdAndDelete(req.params.id);
    if (!contact) {
      return res.status(404).json({ success: false, error: "Contact not found" });
    }
    res.status(200).json({ success: true, data: {} });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};


module.exports= {createContact, getAllContacts, getContactById, updateContactById, deleteContactById}
