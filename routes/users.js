const express = require('express');
const router = express.Router();
const {register}=require('../controller/homecontroller')
const {login}=require('../controller/homecontroller')
const {logout}=require('../controller/homecontroller')
const {profile}=require('../controller/homecontroller')
const isAuthenticated = require('../middlewares/auth')
router.post('/register', register)
router.get('/login', login)
router.get('/profile',isAuthenticated, profile)
router.post('/logout', logout)

module.exports = router;
