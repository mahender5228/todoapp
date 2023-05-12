// const express = require('express')
// const sendResponse = require('../methords/methords')
// const errorhandler = require('../middlewares/error')

// const Task = require('../models/task');

// module.exports = {
//     newtask: async (req, res, next) => {
//         const { title, discription } = req.body
//         await Task.create({
//             title,
//             discription,
//             user: req.user
//         })
//         res.status(201).json({
//             success: true,
//             message: "successfully added"
//         })
//     },

//     getmytask: async (req, res, next) => {
//         const userid = req.user._id
//         const tasks = await Task.find({ user: userid })

//         res.status(201).json({
//             success: true,
//             tasks,
//         })

//     },
//     updatetask: async (req, res, next) => {
       
//         const task = await Task.findById(req.params.id)
//         if(!task)return next(new errorhandler("invalid id",404))
//         task.isCompleted = !task.isCompleted
//         await task.save()
//         res.status(201).json({
//             success: true,
//            message:"task updated",
//         })

//     },
//     deletetask: async (req, res, next) => {
//         const task = await Task.findById(req.params.id)
//         if(!task)return next(new errorhandler("invalid id",404))

//         task.isCompleted = !task.isCompleted
//         await task.deleteOne()
//         res.status(201).json({
//             success: true,
//            message:"task deleted",
//         })

//     }
// }
const express = require('express')
const sendResponse = require('../methords/methords')
const errorhandler = require('../middlewares/error')

const Task = require('../models/task');

module.exports = {
    newtask: async (req, res, next) => {
        try {
            const { title, discription } = req.body
            await Task.create({
                title,
                discription,
                user: req.user
            })
            res.status(201).json({
                success: true,
                message: "successfully added"
            })
        } catch (err) {
            next(err)
        }
    },

    getmytask: async (req, res, next) => {
        try {
            const userid = req.user._id
            const tasks = await Task.find({ user: userid })

            res.status(201).json({
                success: true,
                tasks,
            })
        } catch (err) {
            next(err)
        }
    },
    updatetask: async (req, res, next) => {
        try {
            const task = await Task.findById(req.params.id)
            if (!task) {
                return next(new errorhandler("invalid id", 404))
            }
            task.isCompleted = !task.isCompleted
            await task.save()
            res.status(201).json({
                success: true,
                message: "task updated",
            })
        } catch (err) {
            next(err)
        }
    },
    deletetask: async (req, res, next) => {
        try {
            const task = await Task.findById(req.params.id)
            if (!task) {
                return next(new errorhandler("invalid id", 404))
            }
            task.isCompleted = !task.isCompleted
            await task.deleteOne()
            res.status(201).json({
                success: true,
                message: "task deleted",
            })
        } catch (err) {
            next(err)
        }
    }
}
