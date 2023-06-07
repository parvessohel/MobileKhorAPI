// contactModelRouter.js

const express = require("express");
const {createContact, getAllContacts, getContactById, updateContactById, deleteContactById} = require("../controllers/contactModelController");

const router = express.Router();

// Routes for contact models
router.post("/", createContact);
router.get("/", getAllContacts);
router.get("/:id", getContactById);
router.put("/:id", updateContactById);
router.delete("/:id", deleteContactById);

module.exports = router;
