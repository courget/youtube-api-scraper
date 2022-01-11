"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const channelAuditDetails_1 = __importDefault(require("./channelAuditDetails"));
const channelBrandingSettings_1 = __importDefault(require("./channelBrandingSettings"));
const channelContentDetails_1 = __importDefault(require("./channelContentDetails"));
const channelContentOwnerDetails_1 = __importDefault(require("./channelContentOwnerDetails"));
const channelConversionPings_1 = __importDefault(require("./channelConversionPings"));
const channelLocalization_1 = __importDefault(require("./channelLocalization"));
const channelSnippet_1 = __importDefault(require("./channelSnippet"));
const channelStatistics_1 = __importDefault(require("./channelStatistics"));
const channelStatus_1 = __importDefault(require("./channelStatus"));
const channelTopicDetails_1 = __importDefault(require("./channelTopicDetails"));
const channel = {
    auditDetails: channelAuditDetails_1.default,
    brandingSettings: channelBrandingSettings_1.default,
    contentDetails: channelContentDetails_1.default,
    contentOwnerDetails: channelContentOwnerDetails_1.default,
    conversionPings: channelConversionPings_1.default,
    etag: String,
    id: String,
    kind: String,
    localizations: { type: mongoose_1.Schema.Types.Map, of: channelLocalization_1.default },
    snippet: channelSnippet_1.default,
    statistics: channelStatistics_1.default,
    status: channelStatus_1.default,
    topicDetails: channelTopicDetails_1.default,
};
exports.default = channel;
//# sourceMappingURL=channel.js.map