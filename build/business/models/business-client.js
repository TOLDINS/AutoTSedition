"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusinessClient = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var mongoose_2 = require("mongoose");
var base_user_1 = require("../../global/models/base-user");
base_user_1.User.discriminator('business-client', new mongoose_2.Schema({
    services_id: {
        type: Array,
        default: null
    }
}));
exports.BusinessClient = mongoose_1.default.model('business-client');
