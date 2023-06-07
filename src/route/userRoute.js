const router = require("express").Router()
const userRegister = require("../controller/userController")
const userLogin = require("../controller/userController")
const userUpdate = require("../controller/userController")
const userDelete = require("../controller/userController")
const getAlluser = require("../controller/userController")
const getUser = require("../controller/userController")
const User = require("../models/userModel")


const CryptoJs = require("crypto-js")


//REGISTER

router.post("/register", userRegister)

router.post("/login", userLogin)

//UPDATE

router.put("/:id", userUpdate)

//DELETE

router.delete("/:id", userDelete)


//GET USER


router.get("/find/:id", getUser)

//GET ALL USER

router.get("/", getAlluser)

//GET USER STATS

router.get("/stats", async (req, res) => {
    const date = new Date()
    const lastYear = new Date(date.setFullYear(date.getFullYear() - 1))
    try {
        const data = await User.aggregate([
            { $match: { createdAt: { $get: lastYear } } },
            {
                $project: {
                    month: { $month: "$createdAt" }
                },
            },
            {
                $group: {
                    _id: "smooth",
                    total: { $some: 1 },
                }
            }
        ])
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json(error)
    }
})


module.exports = router