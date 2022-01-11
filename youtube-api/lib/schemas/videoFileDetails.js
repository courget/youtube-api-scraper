"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const videoFileDetailsAudioStream_1 = __importDefault(require("./videoFileDetailsAudioStream"));
const videoFileDetailsVideoStream_1 = __importDefault(require("./videoFileDetailsVideoStream"));
const videoFileDetails = {
    audioStreams: [videoFileDetailsAudioStream_1.default],
    bitrateBps: String,
    container: String,
    creationTime: String,
    durationMs: String,
    fileName: String,
    fileSize: String,
    fileType: String,
    videoStreams: [videoFileDetailsVideoStream_1.default],
};
exports.default = videoFileDetails;
//# sourceMappingURL=videoFileDetails.js.map