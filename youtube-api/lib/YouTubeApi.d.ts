import { youtube_v3 } from "googleapis";
import { IAuthClient } from "@youtube-api-scraper/google-api";
declare class YouTubeApi {
    private _authClient;
    get authClient(): IAuthClient;
    private _youtube;
    get youtube(): youtube_v3.Youtube;
    constructor(authClient: IAuthClient);
    getChannel(channelId: string, part: string[]): Promise<youtube_v3.Schema$Channel | null>;
    getPlaylist(playlistId: string, part: string[]): Promise<youtube_v3.Schema$Playlist | null>;
    getPlaylistItems(playlistId: string, part: string[], options?: {
        max?: number;
        since?: Date;
    }): Promise<youtube_v3.Schema$PlaylistItem[] | null>;
    getVideo(videoId: string, part: string[]): Promise<youtube_v3.Schema$Video | null>;
}
export default YouTubeApi;
