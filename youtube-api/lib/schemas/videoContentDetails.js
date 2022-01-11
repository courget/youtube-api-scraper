"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const contentRating_1 = __importDefault(require("./contentRating"));
const accessPolicy_1 = __importDefault(require("./accessPolicy"));
const videoContentDetailsRegionRestriction_1 = __importDefault(require("./videoContentDetailsRegionRestriction"));
const videoContentDetails = {
    caption: String,
    contentRating: contentRating_1.default,
    countryRestriction: accessPolicy_1.default,
    definition: String,
    dimension: String,
    duration: String,
    hasCustomThumbnail: Boolean,
    licensedContent: Boolean,
    projection: String,
    regionRestriction: videoContentDetailsRegionRestriction_1.default,
};
exports.default = videoContentDetails;
//# sourceMappingURL=videoContentDetails.js.map