const express = require('express');
const router = express.Router();
const {newtask,getmytask,updatetask,deletetask}=require('../controller/task')
const isAuthenticated = require('../middlewares/auth')


router.post('/new',isAuthenticated, newtask)
router.get('/mytasks',isAuthenticated, getmytask)
router.route('/:id').put(isAuthenticated,updatetask).delete(isAuthenticated,deletetask)

module.exports = router;

