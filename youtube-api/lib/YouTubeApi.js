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
const googleapis_1 = require("googleapis");
class YouTubeApi {
    constructor(authClient) {
        this._authClient = authClient;
        this._youtube = new googleapis_1.youtube_v3.Youtube({
            auth: this.authClient.getAuthObject(),
        });
    }
    get authClient() {
        return this._authClient;
    }
    get youtube() {
        return this._youtube;
    }
    getChannel(channelId, part) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { data: channelList } = yield this.youtube.channels.list({
                    id: [channelId],
                    part,
                });
                return ((_a = channelList.items) === null || _a === void 0 ? void 0 : _a[0]) || null;
            }
            catch (error) {
                console.error(error);
                return null;
            }
        });
    }
    getPlaylist(playlistId, part) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { data: playlist } = yield this.youtube.playlists.list({
                    id: [playlistId],
                    part,
                });
                return ((_a = playlist.items) === null || _a === void 0 ? void 0 : _a[0]) || null;
            }
            catch (error) {
                console.error(error);
                return null;
            }
        });
    }
    getPlaylistItems(playlistId, part, options) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const { max, since } = Object.assign({ max: undefined, since: undefined }, options);
            try {
                const videos = [];
                let pageToken = undefined;
                do {
                    const { data: playlistItems } = yield this.youtube.playlistItems.list({
                        playlistId,
                        part,
                        maxResults: max ? max - videos.length : 50,
                        pageToken: pageToken,
                    });
                    if (playlistItems.items) {
                        for (let item of playlistItems.items) {
                            if (since &&
                                ((_a = item.contentDetails) === null || _a === void 0 ? void 0 : _a.videoPublishedAt) &&
                                new Date(item.contentDetails.videoPublishedAt) < since) {
                                return videos;
                            }
                            if (max && videos.length >= max) {
                                return videos;
                            }
                            videos.push(item);
                        }
                    }
                    // TS infering error here (circular errors on playistItems type ??! wtf)
                    pageToken = playlistItems.nextPageToken;
                } while (pageToken);
                return videos;
            }
            catch (error) {
                console.error(error);
                return null;
            }
        });
    }
    getVideo(videoId, part) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { data: video } = yield this.youtube.videos.list({
                    id: [videoId],
                    part,
                });
                return ((_a = video.items) === null || _a === void 0 ? void 0 : _a[0]) || null;
            }
            catch (error) {
                console.error(error);
                return null;
            }
        });
    }
}
exports.default = YouTubeApi;
//# sourceMappingURL=YouTubeApi.js.map