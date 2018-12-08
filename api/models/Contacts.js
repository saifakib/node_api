var mongoose = require('mongoose');
const validator = require('validator');
const Schema = mongoose.Schema;

//Contact model process
const CotactSchema = new Schema({
    name : {
        type : String,
        trim : String,
        required : true,
        minLength: 3
    },
    phone : {
        type : String,
        trim : String,
        required : true,
        unique : true
    },
    email : {
        type : String,
        trim : String,
        validate : {
            validator : (v) =>{
                return validator.isEmail(v);
            },
            message : "${v} is not an email"
        }
    }
});

const Contacts = mongoose.model('Contacts', CotactSchema);
module.exports = Contacts;