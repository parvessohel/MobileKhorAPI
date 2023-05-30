require("dotenv").config()
const port = process.env.PORT || 3002
const mongodbURL = process.env.MONGODB_ATLAS_URL
const defaultImagePath = process.env.DEFAULT_USER_IMAGE_PATH || "public/images/users/default.jpg"
const brandImagePath = process.env.DEFAULT_USER_IMAGE_PATH || "public/images/brands/oneplus.jpg"



module.exports = {port, mongodbURL, defaultImagePath, brandImagePath}