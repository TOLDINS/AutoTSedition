"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
var mongoose = require("mongoose");
var mongoose_1 = require("mongoose");
var CarSchema = new mongoose_1.Schema({
    id_client: String,
    brand: String,
    models: String,
    register_number: {
        type: String,
        unique: true,
    },
    year: String
});
exports.Car = mongoose.model('car', CarSchema);
