const { Schema, model } = require("mongoose")
const bcrypt = require("bcrypt")
const { defaultImagePath } = require("../secret")




const userSchema = new Schema({
    userName: {
        type: String,
        required: [true, "Username is required"],
        trim: true,
        minLength: [3, "Username must be over 3 characters"],
        maxLength: [33, "Username must be under 33 characters"]

    },
    EMAIL: {
        type: String,
        unique: true,

        required: [true, "Email is required"],
        trim: true,
        lowercase: true,
        validate: {
            validator: function (v) {
                return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(v)
            },
            message: "Please enter a valid email"
        }
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minLength: [6, "Password must be over 6 characters"],

        set: (v) => bcrypt.hashSync(v, bcrypt.genSaltSync(10))

    },
    Image: {
        type: String,
        default: defaultImagePath

    },
    isAdmin: {
        type: Boolean,
        default: false
    }

},
    { timeseries: true })

const User = model(Users, userSchema)



module.exports = User

