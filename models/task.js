const mongoose = require('mongoose');
const TaskSchema = new mongoose.Schema(
    {
        title:  { type: String, required: true },
        discription: { type: String, required: true },
        isCompleted:  { type: Boolean, default: false },
        user: {type:mongoose.Schema.Types.ObjectId,refrence:"user"},
       
    }, { timestamps: true }
   ); // Specify the collection name here

const Task = mongoose.model('Task', TaskSchema);

module.exports = Task;
