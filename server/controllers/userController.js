const User= require('../models/user');
const ErrorHandler= require('../utils/errorHandler');
const catchAsyncErrors= require('../middlewares/catchAsyncErrors');
const sendToken = require('../utils/jwtToken');

exports.registerUser= catchAsyncErrors(async(req,res,next)=>{
    const {name, number, email}= req.body;

    const user= await User.create({
        name,
        number,
        email
    })

    sendToken(user,200,res)

})

exports.login= catchAsyncErrors(async(req,res,next)=>{
    const {number} = req.body;
    if( !number){
        return next(new ErrorHandler('please enter you mobile number',400))
    }
    const user= await User.findOne({number});
    if(!user){
        return next(new ErrorHandler('No user with this mobile number please register',400))

        
    }
   sendToken(user,200,res)

})


exports.logout = catchAsyncErrors(async (req, res, next) => {
    res.cookie('token', null, {
        expires: new Date(Date.now()),
        httpOnly: true
    })

    res.status(200).json({
        success: true,
        message: 'Logged out'
    })
})

