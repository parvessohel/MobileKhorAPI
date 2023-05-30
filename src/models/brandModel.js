const { Schema, model } = require("mongoose")
const { brandImagePath } = require("../secret")


const brandSchema = new Schema({
    brandName:{
        type: String,
        required: [true, "Username is required"],
        trim: true,
        minLength: [3, "Username must be over 3 characters"],
        maxLength: [33, "Username must be under 33 characters"]
    },
    Image: {
        type: String,
        default: brandImagePath

    },
    brandSlug: {
        type: String
    }
}, {timeseries: true})

const Brand = model(brands, brandSchema)

module.exports = Brand

