"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const playlistLocalization_1 = __importDefault(require("./playlistLocalization"));
const thumbnailDetails_1 = __importDefault(require("./thumbnailDetails"));
const playlistSnippet = {
    channelId: String,
    channelTitle: String,
    defaultLanguage: String,
    description: String,
    localized: playlistLocalization_1.default,
    publishedAt: String,
    tags: [String],
    thumbnails: thumbnailDetails_1.default,
    thumbnailVideoId: String,
    title: String,
};
exports.default = playlistSnippet;
//# sourceMappingURL=playlistSnippet.js.map