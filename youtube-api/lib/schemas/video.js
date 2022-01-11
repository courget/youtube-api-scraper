"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const videoAgeGating_1 = __importDefault(require("./videoAgeGating"));
const videoContentDetails_1 = __importDefault(require("./videoContentDetails"));
const videoFileDetails_1 = __importDefault(require("./videoFileDetails"));
const videoLiveStreamingDetails_1 = __importDefault(require("./videoLiveStreamingDetails"));
const videoLocalization_1 = __importDefault(require("./videoLocalization"));
const videoMonetizationDetails_1 = __importDefault(require("./videoMonetizationDetails"));
const videoPlayer_1 = __importDefault(require("./videoPlayer"));
const videoProcessingDetails_1 = __importDefault(require("./videoProcessingDetails"));
const videoRecordingDetails_1 = __importDefault(require("./videoRecordingDetails"));
const videoSnippet_1 = __importDefault(require("./videoSnippet"));
const videoStatistics_1 = __importDefault(require("./videoStatistics"));
const videoStatus_1 = __importDefault(require("./videoStatus"));
const videoSuggestions_1 = __importDefault(require("./videoSuggestions"));
const videoTopicDetails_1 = __importDefault(require("./videoTopicDetails"));
const video = {
    ageGating: videoAgeGating_1.default,
    contentDetails: videoContentDetails_1.default,
    etag: String,
    fileDetails: videoFileDetails_1.default,
    id: String,
    kind: String,
    liveStreamingDetails: videoLiveStreamingDetails_1.default,
    localizations: { type: mongoose_1.Schema.Types.Map, of: videoLocalization_1.default },
    monetizationDetails: videoMonetizationDetails_1.default,
    player: videoPlayer_1.default,
    processingDetails: videoProcessingDetails_1.default,
    projectDetails: {},
    recordingDetails: videoRecordingDetails_1.default,
    snippet: videoSnippet_1.default,
    statistics: videoStatistics_1.default,
    status: videoStatus_1.default,
    suggestions: videoSuggestions_1.default,
    topicDetails: videoTopicDetails_1.default,
};
exports.default = video;
//# sourceMappingURL=video.js.map