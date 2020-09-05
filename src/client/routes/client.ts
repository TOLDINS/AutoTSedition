const express=require('express');
import {Router} from 'express';
import {
    postSignUp,
    postSignIn,
    postEditClient
}from  '../controllers/client';

 const router:Router=express.Router();
router.post("/sign-in/:type",postSignIn);
router.post("/sign-up/:type", postSignUp);
router.post('/edit/:parameter', postEditClient);
export = router;


