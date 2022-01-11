"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const channelLocalization_1 = __importDefault(require("./channelLocalization"));
const thumbnailDetails_1 = __importDefault(require("./thumbnailDetails"));
const channelSnippet = {
    country: String,
    customUrl: String,
    defaultLanguage: String,
    description: String,
    localized: channelLocalization_1.default,
    publishedAt: String,
    thumbnails: thumbnailDetails_1.default,
    title: String,
};
exports.default = channelSnippet;
//# sourceMappingURL=channelSnippet.js.map