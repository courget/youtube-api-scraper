"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const channelSettings_1 = __importDefault(require("./channelSettings"));
const imageSettings_1 = __importDefault(require("./imageSettings"));
const propertyValue_1 = __importDefault(require("./propertyValue"));
const watchSettings_1 = __importDefault(require("./watchSettings"));
const channelBrandingSettings = {
    channel: channelSettings_1.default,
    hints: [propertyValue_1.default],
    image: imageSettings_1.default,
    watch: watchSettings_1.default,
};
exports.default = channelBrandingSettings;
//# sourceMappingURL=channelBrandingSettings.js.map