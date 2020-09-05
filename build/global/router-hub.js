"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var client_1 = __importDefault(require("../client/routes/client"));
var car_1 = __importDefault(require("../client/routes/car"));
module.exports = function (app) {
    app.use('/client', client_1.default, car_1.default);
    // app.use('/business-client',[]);
    // app.use('/feedback',[]);
    // app.use('/order',[]);    
};
