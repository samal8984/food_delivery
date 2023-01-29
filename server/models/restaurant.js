const mongoose= require('mongoose');
const restaurantSchema= new mongoose.Schema({

    name: {
        type: String,
        required: [true, 'Please enter restaurant name'],
        trim: true,
        maxLength: [100, 'name cannot exceed 100 characters']

    },
    price: {
        type: Number,
        required: [true, 'Please enter  price for two'],
        maxLength: [5, ' name cannot exceed 5 characters'],
        default: 0.0
    },
    ratings: {
        type: Number,
        default: 0.0
    },
    images: [
        {
            public_id: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true
            },
        }
    ],
    typeoffoods: [
        {
            name:{
                type: String,
                required: true
            }
        }
    ],
    menu:[
        { 
            itemname:  { 
            
                type: String,
                required: true
            },
            items:[{ 
               name:{
                type: String,
                required: true
               },
               price:{
                type: Number,
                required: true

               },
               category:{
                type: String,
                required: true
               }
        }]
        }
    ],
 
    offer:{
        type: Number,
        required: false
    }, 
    deliverytime:{
        type: Number,
        required: true
    }

})
module.exports= mongoose.model('Restaurant', restaurantSchema)