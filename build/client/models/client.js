"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
var mongoose = require("mongoose");
var base_user_1 = require("../../global/models/base-user");
var mongoose_1 = require("mongoose");
var client = base_user_1.User.discriminator("client", new mongoose_1.Schema({
    photo: {
        type: String,
        default: null
    },
    cars: Array,
    favorites: {
        type: Array,
        default: []
    },
}));
exports.Client = mongoose.model('client');
