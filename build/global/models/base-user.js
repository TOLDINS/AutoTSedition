"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var mongoose = require("mongoose");
var mongoose_1 = require("mongoose");
var baseOptions = {
    descriminatorKey: "userType",
    collection: "users",
};
var baseUserSchema = new mongoose_1.Schema({
    surname: String,
    name: String,
    phone: String,
    email: {
        type: String,
        required: true,
        unique: true,
    },
    email_is_verified: {
        type: Boolean,
        default: false,
    },
    // referral_code: {
    //   type: String,
    //   default: () => {
    //     let hash = 0;
    //     for (let i = 0; i < this.email.length; i++) {
    //       hash = this.email.charCodeAt([i]) + ((hash << 5) - hash);
    //     }
    //     const res = (hash & 0x00ffffff).toString(16).toUpperCase();
    //     return "00000".substring(0, 6 - res.length) + res;
    //   },
    // },
    reffered_by: {
        type: String,
        default: null,
    },
    password: String,
    date: {
        type: Date,
        default: Date.now,
    },
    lang_settings: {
        type: String,
        default: "ru",
    },
    token: {
        type: String,
        default: null
    },
    token_type: {
        type: String,
        default: null
    }
}, baseOptions);
// module.exports = 
exports.User = mongoose.model('BaseUser', baseUserSchema);
