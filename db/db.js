const { default: mongoose, VirtualType } = require('mongoose')
const express = require('express')
require('dotenv').config()
const app = express()

module.exports.connectdb = () => mongoose.connect(process.env.Moongose_URL).then(() => {
    console.log('connected')
   
}).catch((error) => { console.log(error) })