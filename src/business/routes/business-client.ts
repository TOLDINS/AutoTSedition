const express=require('express');
import {Router} from 'express';
const router:Router=express.Router();

import {
    postSignIn,
    postSignUp,
    postEdit

} from '../controllers/business-client';

router.post('/sign-in/:type',postSignIn);
router.post('/sign-up/:type',postSignUp);
router.post('/edit/:parameter',postEdit);

export = router;