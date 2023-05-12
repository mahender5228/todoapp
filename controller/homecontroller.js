// const express = require('express')
// const bcrypt = require('bcrypt')
// const jwt = require('jsonwebtoken')

// const app = express()
// const sendResponsecookie = require('../methords/utilites')

// const sendResponse = require('../methords/methords')
// const User = require('../models/usermodel');
// module.exports = {
//     register: async (req, res) => {
        
//         const user = await User.findOne({ dataemail: req.body.email });
//         if(!user)return next(new errorhandler("Email already registered",400))

//          else {
//             const hashedpassword = await bcrypt.hash(req.body.password, 10)
//             const user = new User({
//                 datafirstname: req.body.firstname,
//                 dataemail: req.body.email,
//                 datapassword: hashedpassword,
//                 datacountry: req.body.country,
//                 datacity: req.body.city,
//                 datapin: req.body.pincode,
//                 datastate: req.body.state,
//                 datalastname: req.body.lastname,
//                 datagender: req.body.gender
//             });
//             await user.save();
//             sendResponsecookie(user, res, "register succesfully", 201)

//         }

//     },
//     login:  async (req, res) => {


//         const user = await User.findOne({ dataemail: req.body.email })

//         if (user) {
//             const match = await bcrypt.compare(req.body.password, user.datapassword);
//             if (match) {
//                 sendResponsecookie(user, res, 'User login successful', 201)

//             } else {
//                 sendResponsecookie(user, res, 'invalid password', 400)

//             }
//         } else {
//             sendResponsecookie(user, res, 'invalid email', 400)

//         }

//     },
//     profile:   async (req, res) => {
//         res.status(200).json({ success: true, user: req.user, })
//     },
//     logout:  async (req, res) => {
//         res.status(200).cookie("token", "", { expires: new Date(Date.now()) }).json({ success: true, user: req.user, message: "loggedout" })
//     },
// }
const express = require('express')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const app = express()
const sendResponsecookie = require('../methords/utilites')

const sendResponse = require('../methords/methords')
const User = require('../models/usermodel');

module.exports = {
    register: async (req, res, next) => {
        try {
            const user = await User.findOne({ dataemail: req.body.email });
            if (!user) {
                const hashedpassword = await bcrypt.hash(req.body.password, 10)
                const user = new User({
                    datafirstname: req.body.firstname,
                    dataemail: req.body.email,
                    datapassword: hashedpassword,
                    datacountry: req.body.country,
                    datacity: req.body.city,
                    datapin: req.body.pincode,
                    datastate: req.body.state,
                    datalastname: req.body.lastname,
                    datagender: req.body.gender
                });
                await user.save();
                sendResponsecookie(user, res, "register succesfully", 201)
            } else {
                return next(new Error("Email already registered", 400))
            }
        } catch (error) {
            return next(error)
        }
    },
    login: async (req, res, next) => {
        try {
            const user = await User.findOne({ dataemail: req.body.email })
            if (user) {
                const match = await bcrypt.compare(req.body.password, user.datapassword);
                if (match) {
                    sendResponsecookie(user, res, 'User login successful', 201)
                } else {
                    sendResponsecookie(user, res, 'invalid password', 400)
                }
            } else {
                sendResponsecookie(user, res, 'invalid email', 400)
            }
        } catch (error) {
            return next(error)
        }
    },
    profile: async (req, res, next) => {
        try {
            res.status(200).json({ success: true, user: req.user, })
        } catch (error) {
            return next(error)
        }
    },
    logout: async (req, res, next) => {
        try {
            res.status(200).cookie("token", "", { expires: new Date(Date.now()) }).json({ success: true, user: req.user, message: "loggedout" })
        } catch (error) {
            return next(error)
        }
    },
}
