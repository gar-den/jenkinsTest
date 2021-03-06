"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connect = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const url = "mongodb://localhost:27017/tstest";
const connect = () => {
    mongoose_1.default
        .connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        ignoreUndefined: true,
    })
        .catch((err) => {
        console.log(err);
    });
};
exports.connect = connect;
mongoose_1.default.connection.on("error", (err) => {
    console.log("mongoDB connection error", err);
});
