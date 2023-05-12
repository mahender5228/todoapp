const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema(
    {
        datafirstname: String,
        dataemail: { type: String, unique: true },
        datapassword: String,
        datacountry: String,
        datacity: String,
        datapin: Number,
        datastate: String,
        datalastname: String,
        datagender:String
    }, { timestamps: true }
   ); // Specify the collection name here

const User = mongoose.model('User', UserSchema);

module.exports = User;
