"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const playlistContentDetails_1 = __importDefault(require("./playlistContentDetails"));
const playlistLocalization_1 = __importDefault(require("./playlistLocalization"));
const playlistPlayer_1 = __importDefault(require("./playlistPlayer"));
const playlistSnippet_1 = __importDefault(require("./playlistSnippet"));
const playlistStatus_1 = __importDefault(require("./playlistStatus"));
const playlist = {
    contentDetails: playlistContentDetails_1.default,
    etag: String,
    id: String,
    kind: String,
    localizations: { type: mongoose_1.Schema.Types.Map, of: playlistLocalization_1.default },
    player: playlistPlayer_1.default,
    snippet: playlistSnippet_1.default,
    status: playlistStatus_1.default,
};
exports.default = playlist;
//# sourceMappingURL=playlist.js.map