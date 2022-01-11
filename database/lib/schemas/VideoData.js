"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.videoData = void 0;
const mongoose_1 = require("mongoose");
const youtube_api_1 = require("@youtube-api-scraper/youtube-api");
exports.videoData = new mongoose_1.Schema({
    date: { type: Date, required: true },
    videoId: { type: String, required: true, index: true },
    provider: { type: String, required: true },
    data: { type: youtube_api_1.video, required: true },
}, {
    timeseries: {
        timeField: "date",
        metaField: "videoId",
        granularity: "seconds",
    },
    id: false,
    strict: true,
    timestamps: true,
    collection: "videos_data",
});
exports.default = exports.videoData;
//# sourceMappingURL=VideoData.js.map