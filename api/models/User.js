const mongoose = require('mongoose');
const valid = require('validator');
const Schema = mongoose.Schema;

//User model process
const registerSchema = new Schema({
    email : {
        type : String,
        trim : String,
        required : true,
        unique : true,
        validate : {
            validator : (v) =>{
                return valid.isEmail(v)
            },
            message : "${v} is not an email"
        }

    },
    password : {
        type: String,
        unique: true,
        required: true
    }
});

const User = mongoose.model('User', registerSchema);
module.exports = User;