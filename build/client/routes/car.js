"use strict";
var express = require('express');
var car_1 = require("../controllers/car");
var router = express.Router();
router.get('/:id/car/get-all', car_1.getAllCar);
router.post('/car/add', car_1.postAddCar);
router.post('/car/remove', car_1.postRemove);
router.post('/car/edit/:parameter', car_1.postEditCar);
module.exports = router;
