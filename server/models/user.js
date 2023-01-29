const mongoose= require('mongoose');
const validator= require('validator');
const jwt= require('jsonwebtoken');

const userSchema= new mongoose.Schema({

    name:{
        type: String,
        required: [true, 'Please enter your name'],
        maxLength: [30, 'name cannot exceed 30 character']
    },

    number: {
        type: Number,
        required:[ true,'please enter your number'],
        min: [1000000000, 'number cannot be less than ten'],
    
    },
    email:{
        type: String,
        required: [true, 'please enter email'],
        unique: true,
        validate: [validator.isEmail,'please enter a valid email']


    },
    role:{
        type: String,
        default: 'user'
    },
    joinedon:{
        type: Date,
        default: Date.now()

    }

})
userSchema.methods.getjwtToken= function(){
    return jwt.sign({id: this._id},process.env.JWT_SECRET,{
        expiresIn: process.env.JWT_EXPIRE_TIME

    });
}
module.exports= mongoose.model('User', userSchema);