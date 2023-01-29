const express= require('express');
const router= express.Router();

const {isAuthenticatedUser}= require('../middlewares/auth');
const {newOrder,myOrders}= require('../controllers/orderController');
router.route('/order/new').post( isAuthenticatedUser, newOrder);
router.route('/order/me').get( isAuthenticatedUser, myOrders);


module.exports= router;