const app = require("./app")
const { port } = require("./secret")
const connectDB = require("./config/db")





app.listen(port, async ()=>{
    console.log(`Server is running http://localhost:${port}`)
    await connectDB
})