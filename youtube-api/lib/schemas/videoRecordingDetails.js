"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const geoPoint_1 = __importDefault(require("./geoPoint"));
const videoRecordingDetails = {
    location: geoPoint_1.default,
    locationDescription: String,
    recordingDate: String,
};
exports.default = videoRecordingDetails;
//# sourceMappingURL=videoRecordingDetails.js.map