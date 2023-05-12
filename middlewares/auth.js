const User=require('../models/usermodel')
const jwt = require('jsonwebtoken')
const sendResponse = require('../methords/methords')

const isAuthenticated = async (req, res, next) => {
    const { token } = req.cookies;
    if (!token) {
      return res.status(404).json({ message: 'login first' });
    }
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded._id);
      next();
    } catch (err) {
      return res.status(401).json({ message: 'invalid token' });
    }
  };
  module.exports = isAuthenticated;
  