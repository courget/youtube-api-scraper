"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const thumbnailDetails_1 = __importDefault(require("./thumbnailDetails"));
const videoLocalization_1 = __importDefault(require("./videoLocalization"));
const videoSnippet = {
    categoryId: String,
    channelId: String,
    channelTitle: String,
    defaultAudioLanguage: String,
    defaultLanguage: String,
    description: String,
    liveBroadcastContent: String,
    localized: videoLocalization_1.default,
    publishedAt: String,
    tags: [String],
    thumbnails: thumbnailDetails_1.default,
    title: String,
};
exports.default = videoSnippet;
//# sourceMappingURL=videoSnippet.js.map