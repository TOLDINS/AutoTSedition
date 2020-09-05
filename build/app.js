"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var mongoose_1 = __importDefault(require("mongoose"));
var morgan_1 = __importDefault(require("morgan"));
var client_1 = __importDefault(require("./client/routes/client"));
var car_1 = __importDefault(require("./client/routes/car"));
var app = express_1.default();
app.use(morgan_1.default('dev'));
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(body_parser_1.default.json());
mongoose_1.default.connect('mongodb+srv://denis:1111@cluster0.vkwym.mongodb.net/AutoProject?retryWrites=true&w=majority', { "useNewUrlParser": true, "useUnifiedTopology": true });
// app.use('/client',require('../src/client/routes/auth'));
app.use('/client', [client_1.default, car_1.default]);
module.exports = app;
