const { Schema, model } = require("mongoose")


const mobileModelSchema = new Schema({
    modelName: {
        type: String,
        unique: true
    }
})

const mobileModel = model(mobileModels, mobileModelSchema)
module.exports = mobileModel