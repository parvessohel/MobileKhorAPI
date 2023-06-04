const { Schema, model } = require("mongoose")
const User = require("./userModel")


const contactSchema = new Schema({
    contactUsPara: {
        type: String,
    },

    contactName:
        { type: String },

    contactEmail:
        { type: String },

    contactPhone:
        { type: String },

    contactMessage:
        { type: String },

    createdBy: {
        type: Schema.Types.ObjectId,
        ref: User

    }



}, { timestamp: true })

const contactModel = model(contactmodels, contactSchema)
module.exports = contactModel