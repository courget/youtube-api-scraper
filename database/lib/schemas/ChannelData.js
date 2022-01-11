"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const youtube_api_1 = require("@youtube-api-scraper/youtube-api");
const channelData = new mongoose_1.Schema({
    date: { type: Date, required: true },
    channelId: { type: String, required: true, index: true },
    provider: { type: String, required: true },
    data: { type: youtube_api_1.channel, required: true },
}, {
    timeseries: {
        timeField: "date",
        metaField: "channelId",
        granularity: "seconds",
    },
    id: false,
    strict: true,
    timestamps: true,
    collection: "channels_data",
});
exports.default = channelData;
//# sourceMappingURL=ChannelData.js.map