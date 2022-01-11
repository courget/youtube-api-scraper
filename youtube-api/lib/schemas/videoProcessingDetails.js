"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const videoProcessingDetailsProcessingProgress_1 = __importDefault(require("./videoProcessingDetailsProcessingProgress"));
const videoProcessingDetails = {
    editorSuggestionsAvailability: String,
    fileDetailsAvailability: String,
    processingFailureReason: String,
    processingIssuesAvailability: String,
    processingProgress: videoProcessingDetailsProcessingProgress_1.default,
    processingStatus: String,
    tagSuggestionsAvailability: String,
    thumbnailAvailability: String,
};
exports.default = videoProcessingDetails;
//# sourceMappingURL=videoProcessingDetails.js.map