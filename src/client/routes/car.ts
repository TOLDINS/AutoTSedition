const express=require('express');
import {Router} from 'express';
import {
    postEditCar,
    postAddCar,
    postRemove,
    getAllCar



} from '../controllers/car';

 const router:Router=express.Router();
router.get('/:id/car/get-all',getAllCar)
router.post('/car/add',postAddCar);
router.post('/car/remove',postRemove);
router.post('/car/edit/:parameter',postEditCar);


export = router;


