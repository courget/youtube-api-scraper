"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const videoSuggestionsTagSuggestion_1 = __importDefault(require("./videoSuggestionsTagSuggestion"));
const videoSuggestions = {
    editorSuggestions: [String],
    processingErrors: [String],
    processingHints: [String],
    processingWarnings: [String],
    tagSuggestions: [videoSuggestionsTagSuggestion_1.default],
};
exports.default = videoSuggestions;
//# sourceMappingURL=videoSuggestions.js.map