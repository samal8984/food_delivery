  const Restaurant = require('../models/restaurant')
  const ErrorHandler= require('../utils/errorHandler')
  const catchAsyncErrors= require('../middlewares/catchAsyncErrors')


  exports.newRestaurant= catchAsyncErrors( async (req,res,next)=>{
    const restaurant= await Restaurant.create(req.body);
    res.status(200).json({
        status: true,
        restaurant
    })
  }
  )

exports.getRestaurants=  catchAsyncErrors( async (req,res,next)=>{
  const {keyword}= req.query
  let restaurants= await Restaurant.find();
  
  
  const search=(data)=>{
    return data.filter(
      (item)=>
      item.name.toLowerCase().includes(keyword)
    )
  }
   if(keyword){
     restaurants= search(restaurants)
   }


    res.status(200).json({
      
        success: true,
        count:  restaurants.length,
        restaurants
       
    })
}
)
