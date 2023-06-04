const { Schema, model } = require("mongoose")
const User = require("./userModel")
const Brand = require("./brandModel")


const mobileModelSchema = new Schema({
    modelName: {
        type: String,
        unique: true
    },

    network: {
        technology: { type: String },
        twogGBands: { type: String },
        threeGBands: { type: String },
        fourGBands: { type: String },
        fiveGBands: { type: String },
        speed: { type: String }

    },

    launch: {
        announced:
            { type: String }
    },

    body: {
        dimensions: { type: String },
        weight: { type: String },
        build: { type: String },
        sim: { type: String }
    },
    display: {
        type: { type: String },
        size: { type: String },
        resolution: { type: String },
        protection: { type: String },

    },
    platform: {
        os: { type: String },
        chipset: { type: String },
        cpu: { type: String },
        gpu: { type: String },
    },
    memory: {
        cardslot: { type: String },
        internalCardSlot: { type: String },

    },
    mainCamera: {
        tripple: { type: String },
        feature: { type: String },
        video: { type: String },

    },
    selfieCamera: {
        single: { type: String },
        feature: { type: String },
        video: { type: String },

    },
    sound: {
        loudSpeaker: { type: String },
        threePointmmJack: { type: String },

    },

    comms: {
        wlan: { type: String },
        blutooth: { type: String },
        position: { type: String },
        nfc: { type: String },
        radio: { type: String },
        usb: { type: String },

    },

    features: {
        sensors: { type: String },

    },
    battery: {
        batterytype: { type: String },
        charging: { type: String },

    },
    misc: {
        colors: { type: String },
        models: { type: String },
        sar: { type: String },
        sar_eu: { type: String },
        radpriceio: { type: String },


    },
    tests: {
        performance: { type: String },
        dispay: { type: String },
        camera: { type: String },
        loudspeeker_eu: { type: String },
        batteryLife: { type: String },


    },

    createdBy: {
        type: Schema.Types.ObjectId,
        ref: User



    },

    createdBy: {
        type: Schema.Types.ObjectId,
        ref: Brand

    }

}, { timestamps: true })

const mobileModel = model(mobileModels, mobileModelSchema)
module.exports = mobileModel