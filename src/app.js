const express = require("express")

const brandRouter = require("../src/route/brandRouter")
const userRouter = require("../src/route/userRoute")
const mobileModelRouter = require("../src/route/userRoute")
const contactRouter = require("../src/route/userRoute")

const app = express()

app.use(express.json())

app.use("/users", userRouter)
app.use("/brands", brandRouter)
app.use("/mobileModels", mobileModelRouter)
app.use("/contacts", contactRouter)

app.get("/", (req, res) => {
    res.send("Hi hello")
})

module.exports = app