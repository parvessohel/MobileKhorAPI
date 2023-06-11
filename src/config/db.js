const mongoose = require("mongoose")
const {port} = require("../secret")

const Port = port

const connectDB = async (options = {})=>{

    mongoose.connect("mongodbURL")
    .then(()=>{
        app.listen(Port, () => {
            console.log(`Server is running at http://localhost:${Port}`)
        })
    }).catch((err)=>{
        console.log(err)
    })

}

module.exports = connectDB

