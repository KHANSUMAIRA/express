
const mongoose = require("mongoose")
require('dotenv').config()
const user = require('./module')
const { hash, compare } = require('bcryptjs')
const { sign } = require('jsonwebtoken')



const signup = async (req, res) => {
    const { username, password, email } = req.body;
    console.log({ username, password, email })
try
      {
        await connect(process.env.MONGO_URI)
        console.log("DB Connected")
        const existingUser = await user.exists({ email: email })
        if (existingUser) {
            res.status(208).json({
                message: "Already Exists"
            })
        }

        else {
            await user.create({ username, email, password: await hash(password, 12) })
            console.log("User Created")
            res.status(201).json({
                message: " Successfully"
            })
        }
    }
    catch (error) {
        res.json({
            message: error
        })
    }
}

const getuserprofile = (req, res) => {
    res.send('Hello')
}




const Login = async (req, res) => {

    const { password, email } = req.body;

    try {
        await mongoose.connect(process.env.MONGO_URI)
        const existingUser = await user.findOne({ email: email })

        if (!existingUser) {
            res.status(404).json({
                message: "User not found"
            })
        }

        else {

     const decryptPassword = await compare(password, existingUser.password)
    
     if (email == existingUser.email && decryptPassword) {
                const token = sign(
                    {
                        id: existingUser._id,
                        username: existingUser.username,
                        email: existingUser.email
                    }
                    ,
                    process.env.JWT_SECRET
                )

                res.json({
                    message: "Successfully",
                    token: token
                })
            }

     else {
                res.json({
                    message: "invalid "
                })
            }

        }

    }
    catch (error) {
        res.json({
            message: error
        })

    }
}

const allUsers = async (req, res) => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        const users = await user.find()
        res.json(
            {
                Users: users
            }
        )

    }

    catch (error) {
        res.json(
            {
                message: error
            }
        )

    }
}


const getUserbyEmail = async (req, res) => {

    const { email } = req.params


    try {
        await mongoose.connect(process.env.MONGO_URI)
        const users = await user.findOne({ email: email })
        res.json(
            {
                users: users
            }
        )

    }

    catch (error) {
        res.json(
            {
                message: error
            }
        )

    }
}


const userbyEmail = async (req, res) => {

    const { email } = req.query


    try {
        await mongoose.connect(process.env.MONGO_URI)
        const users = await user.findOne({ email: email })
        res.json(
            {
                users: users
            }
        )

    }

    catch (error) {
        res.json(
            {
                message: error
            }
        )

    }
}



module.exports = { getuserprofile , Login,  signup, allUsers, getUserbyEmail, userbyEmail }