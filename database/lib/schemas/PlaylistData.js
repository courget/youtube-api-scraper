"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.playlistData = void 0;
const mongoose_1 = require("mongoose");
const youtube_api_1 = require("@youtube-api-scraper/youtube-api");
exports.playlistData = new mongoose_1.Schema({
    date: { type: Date, required: true },
    playlistId: { type: String, required: true, index: true },
    provider: { type: String, required: true },
    data: {
        type: {
            playlist: { type: youtube_api_1.playlist, required: true },
            playlistItems: { type: [youtube_api_1.playlistItem], required: true },
        },
        required: true,
    },
}, {
    timeseries: {
        timeField: "date",
        metaField: "playlistId",
        granularity: "seconds",
    },
    id: false,
    strict: true,
    timestamps: true,
    collection: "playlists_data",
});
exports.default = exports.playlistData;
//# sourceMappingURL=PlaylistData.js.map