"use strict";
var express = require('express');
var client_1 = require("../controllers/client");
var router = express.Router();
router.post("/sign-in/:type", client_1.postSignIn);
router.post("/sign-up/:type", client_1.postSignUp);
router.post('/edit/:parameter', client_1.postEditClient);
module.exports = router;
