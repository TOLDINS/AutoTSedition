"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postEditClient = exports.postSignUp = exports.postSignIn = void 0;
var client_1 = require("../models/client");
var client_2 = require("../api/client");
var globalApi_1 = require("../../global/api/globalApi");
exports.postSignIn = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var sign_data, user, _a, findByFone, error_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                console.log('in');
                sign_data = __assign({}, req.body);
                console.log(sign_data);
                console.log(req.params.type);
                user = null;
                _b.label = 1;
            case 1:
                _b.trys.push([1, 9, , 10]);
                _a = req.params.type;
                switch (_a) {
                    case "google": return [3 /*break*/, 2];
                    case "facebook": return [3 /*break*/, 2];
                    case "custom": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 8];
            case 2: return [4 /*yield*/, client_1.Client.findOne({
                    token: sign_data.token,
                    token_type: req.params.type
                })];
            case 3:
                user = _b.sent();
                return [3 /*break*/, 8];
            case 4: return [4 /*yield*/, client_1.Client.findOne({
                    phone: sign_data.phone
                })];
            case 5:
                findByFone = _b.sent();
                if (!findByFone) return [3 /*break*/, 7];
                return [4 /*yield*/, client_1.Client.findOne({
                        phone: sign_data.phone
                    })];
            case 6:
                user = _b.sent();
                if (!user)
                    return [2 /*return*/, res.status(200).json({
                            status: false,
                            user: null
                        })];
                _b.label = 7;
            case 7: return [3 /*break*/, 8];
            case 8:
                if (user) {
                    return [2 /*return*/, res.status(200).json({ status: true, user: user })];
                }
                else {
                    return [2 /*return*/, res.status(200).json({ status: false, user: null })];
                }
                return [3 /*break*/, 10];
            case 9:
                error_1 = _b.sent();
                console.log(error_1);
                return [3 /*break*/, 10];
            case 10: return [2 /*return*/];
        }
    });
}); };
exports.postSignUp = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var sign_up_data, check_email, type_sign_up, user, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 5, , 6]);
                sign_up_data = __assign({}, req.body);
                return [4 /*yield*/, client_2.CheckClientmailForRegister(sign_up_data.email)];
            case 1:
                check_email = _a.sent();
                type_sign_up = req.params.type;
                if (!(check_email !== false)) return [3 /*break*/, 3];
                return [4 /*yield*/, new client_1.Client({
                        surname: sign_up_data.surname,
                        name: sign_up_data.name,
                        photo: sign_up_data.photo,
                        phone: sign_up_data.phone,
                        email: sign_up_data.email,
                        email_is_verified: (type_sign_up === 'google' || type_sign_up == 'facebook') ? true : false,
                        lang_settings: (sign_up_data.lang_settings !== undefined) ? sign_up_data.lang_settings : 'ru',
                        password: globalApi_1.hashPassword(sign_up_data.password),
                        token: sign_up_data.token,
                        token_type: type_sign_up
                    }).save()];
            case 2:
                user = _a.sent();
                return [2 /*return*/, res.status(200).json({
                        status: true,
                        user: user
                    })];
            case 3: return [2 /*return*/, res.json({
                    status: false,
                    user: null
                })];
            case 4: return [3 /*break*/, 6];
            case 5:
                error_2 = _a.sent();
                console.log(error_2);
                return [3 /*break*/, 6];
            case 6: return [2 /*return*/];
        }
    });
}); };
exports.postEditClient = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var parameter, edit_data, _a, editing_phone, editing_surname, editing_name, editing_email, editing_password, error_3;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                console.log('in');
                parameter = req.params.parameter;
                edit_data = __assign({}, req.body);
                _b.label = 1;
            case 1:
                _b.trys.push([1, 13, , 14]);
                _a = parameter;
                switch (_a) {
                    case "phone": return [3 /*break*/, 2];
                    case "surname": return [3 /*break*/, 4];
                    case "name": return [3 /*break*/, 6];
                    case "email": return [3 /*break*/, 8];
                    case "password": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2: return [4 /*yield*/, client_1.Client.findByIdAndUpdate({ _id: edit_data.id_client }, {
                    $set: {
                        phone: edit_data.value
                    },
                }, { new: true })];
            case 3:
                editing_phone = _b.sent();
                return [2 /*return*/, res.json({
                        status: true,
                        user: editing_phone
                    })];
            case 4: return [4 /*yield*/, client_1.Client.findByIdAndUpdate({ _id: edit_data.id_client }, {
                    $set: {
                        surname: edit_data.value
                    },
                }, { new: true })];
            case 5:
                editing_surname = _b.sent();
                return [2 /*return*/, res.json({
                        status: true,
                        user: editing_surname
                    })];
            case 6: return [4 /*yield*/, client_1.Client.findByIdAndUpdate({ _id: edit_data.id_client }, {
                    $set: {
                        name: edit_data.value
                    },
                }, { new: true })];
            case 7:
                editing_name = _b.sent();
                return [2 /*return*/, res.json({
                        status: true,
                        user: editing_name
                    })];
            case 8: return [4 /*yield*/, client_1.Client.findByIdAndUpdate({ _id: edit_data.id_client }, {
                    $set: {
                        email: edit_data.value
                    }
                }, { new: true })];
            case 9:
                editing_email = _b.sent();
                return [2 /*return*/, res.json({
                        status: true,
                        user: editing_email
                    })];
            case 10: return [4 /*yield*/, client_1.Client.findByIdAndUpdate({ _id: edit_data.id_client }, {
                    $set: {
                        password: globalApi_1.hashPassword(edit_data.value)
                    }
                }, { new: true })];
            case 11:
                editing_password = _b.sent();
                return [2 /*return*/, res.json({
                        status: true,
                        user: editing_password
                    })];
            case 12: return [3 /*break*/, 14];
            case 13:
                error_3 = _b.sent();
                console.log(error_3);
                return [3 /*break*/, 14];
            case 14: return [2 /*return*/];
        }
    });
}); };
