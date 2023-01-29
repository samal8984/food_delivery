const express= require('express');
const router= express.Router();

const {getRestaurants,newRestaurant}= require('../controllers/productController');

router.route('/products').get(getRestaurants);
router.route('/restaurant/new').post(newRestaurant);

module.exports= router;