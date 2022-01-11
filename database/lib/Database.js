"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const schemas_1 = require("./schemas");
class Database {
    constructor(uri) {
        this._models = {};
        this._uri = uri;
        this._db = (0, mongoose_1.createConnection)(this.uri);
        this.models.ChannelData = this.db.model("ChannelData", schemas_1.channelData);
        this.models.PlaylistData = this.db.model("PlaylistData", schemas_1.playlistData);
        this.models.VideoData = this.db.model("VideoData", schemas_1.videoData);
    }
    get uri() {
        return this._uri;
    }
    get db() {
        return this._db;
    }
    get models() {
        return this._models;
    }
    get ChannelData() {
        return this.models.ChannelData;
    }
    get PlaylistData() {
        return this.models.PlaylistData;
    }
    get VideoData() {
        return this.models.VideoData;
    }
    close() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.db.close();
        });
    }
    pushChannelData(channelData) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.ChannelData.create(channelData);
        });
    }
    pushPlaylistData(uploadPlaylistData) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.PlaylistData.create(uploadPlaylistData);
        });
    }
    pushVideoData(videoData) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.VideoData.create(videoData);
        });
    }
}
exports.default = Database;
//# sourceMappingURL=Database.js.map