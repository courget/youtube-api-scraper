"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const playlistItemContentDetails_1 = __importDefault(require("./playlistItemContentDetails"));
const playlistItemSnippet_1 = __importDefault(require("./playlistItemSnippet"));
const playlistItemStatus_1 = __importDefault(require("./playlistItemStatus"));
const playlistItem = {
    contentDetails: playlistItemContentDetails_1.default,
    etag: String,
    id: String,
    kind: String,
    snippet: playlistItemSnippet_1.default,
    status: playlistItemStatus_1.default,
};
exports.default = playlistItem;
//# sourceMappingURL=playlistItem.js.map