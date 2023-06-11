require('events').EventEmitter.defaultMaxListeners = 15; // Increase the limit as needed
const CryptoJs = require("crypto-js")
const User = require("../models/userModel")
require("dotenv")

const userRegister = async (req, res) => {

    try {
        const newUser = new User({
            userName: req.body.userName,
            email: req.body.email,
            password: CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString(),
            image: req.body.image,
            
        })
        
            const savedUser = await newUser.save()
            res.status(201).json(savedUser)
        } catch (err) {
            res.status(500).json(err)
        }
    
    }


const userLogin =  async (req, res) => {

        try {
            const user = await User.findOne({ userName: req.body.userName })
            !user && res.status(401).json("Wrong credentials!")
    
    
            const hashedPassword = CryptoJS.AES.decrypt(user.password, process.env.PASS_SEC)
            const Originalpassword = hashedPassword.toString(CryptoJs.enc.Utf8)
    
            Originalpassword !== req.body.password && res.status(401).json("Wrong credentials!")
    
            const accessToken = jwt.sign({
                id: user._id,
                isAdmin: user.isAdmin
            },
                process.env.JWT_SEC,
                { expiresIn: "3d" }
            )
    
            const { password, ...others } = user._doc
            res.status(200).json(...others, accessToken)
        } catch (err) {
            res.status(500).json(err)
        }
    
    }

const userUpdate = async (req, res) => {
        if (req.body.password) {
            req.body.password = CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString()
        }
        try {
            const updatedUser = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body
            }, { new: true })
            res.status(200).json(updatedUser)
        } catch (error) {
            res.status(500).json(error)
        }
    
    }

const userDelete = async (req, res) => {
        try {
            await User.findByIdAndDelete(req.params.id)
            res.status(200).json("User has been deleted")
    
        } catch (error) {
            res.status(500).json(error)
        }
    }

const getUser = async (req, res) => {
        try {
            const user = await User.findById(req.params.id)
            const { password, ...others } = user._doc
            res.status(200).json(others)
        } catch (error) {
            res.status(500).json(error)
        }
    }

const getAlluser = async (req, res) => {
        const query = req.query.new
        try {
            const users = query ? await User.find().sort({ _id: -1 }).limit(5) : await User.find();
            res.status(200).json(users)
        } catch (error) {
            res.status(500).json(error)
        }
}

module.exports = {userRegister, userLogin, userUpdate, userDelete, getUser, getAlluser}