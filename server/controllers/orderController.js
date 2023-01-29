const Order = require('../models/order')
const Restaurant= require('../models/restaurant')
const ErrorHandler= require('../utils/errorHandler')
const catchAsyncErrors= require('../middlewares/catchAsyncErrors')

exports.newOrder= catchAsyncErrors(async(req,res,next)=>{
    const {
        deliveryDetails,
        orderItems,
        paymentInfo,
        itemsPrice,
        deliveryCharges,
        taxPrice,
        totalPrice,
    }= req.body

    const order= await Order.create({
        deliveryDetails,
        orderItems,
        paymentInfo,
        itemsPrice,
        deliveryCharges,
        taxPrice,
        totalPrice,
        paidAt: Date.now(),
        user: req.user._id


    })

    res.status(201).json({
        success: true,
        order
    })
})

exports.myOrders= catchAsyncErrors(async(req,res,next)=>{
    const orders= await Order.find({user: req.user.id})

    res.status(200).json({
        success: true,
        orders
    })
})