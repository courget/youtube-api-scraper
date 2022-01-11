"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const resourceId_1 = __importDefault(require("./resourceId"));
const thumbnailDetails_1 = __importDefault(require("./thumbnailDetails"));
const playlistItemSnippet = {
    channelId: String,
    channelTitle: String,
    description: String,
    playlistId: String,
    position: Number,
    publishedAt: Date,
    resourceId: resourceId_1.default,
    thumbnails: thumbnailDetails_1.default,
    title: String,
    videoOwnerChannelId: String,
    videoOwnerChannelTitle: String,
};
exports.default = playlistItemSnippet;
//# sourceMappingURL=playlistItemSnippet.js.map