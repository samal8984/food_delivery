const mongoose = require('mongoose')

const orderSchema = mongoose.Schema({
    deliveryDetails: {
        address: {
            type: String,
            required: true
        },
        flatno: {
            type: String,
            required: true
        },
     
        landmark: {
            type: String,
            required: true
        },
        addresstype: {
            type: String,
            required: true
        }
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    orderItems: [
        {
            restaurantName: {
                type: String,
                required: true
            },
            itemName:[{
              name: {
                type: String,
                required: true
              },
              quantity: {
                type: Number,
                required: true
            },
            
            
            }],
         
       
            price: {
                type: Number,
                required: true
            },
            restaurant: {
                type: mongoose.Schema.Types.ObjectId,
                required: true,
                ref: 'Restaurant'
            }
        }
    ],
    paymentInfo: {
        id: {
            type: String
        },
        status: {
            type: String
        }
    },
    paidAt: {
        type: Date
    },

    itemsPrice: {
        type: Number,
        required: true,
        default: 0.0
    },
    taxPrice: {
        type: Number,
        required: true,
        default: 0.0
    },
    deliveryCharges: {
        type: Number,
        required: true,
        default: 0.0
    },
    totalPrice: {
        type: Number,
        required: true,
        default: 0.0
    },
    orderStatus: {
        type: String,
        required: true,
        default: 'Processing'
    },
    deliveredAt: {
        type: Date
    },
    createdAt: {
        type: Date,
        default: Date.now
    }

})

module.exports = mongoose.model('Order', orderSchema)