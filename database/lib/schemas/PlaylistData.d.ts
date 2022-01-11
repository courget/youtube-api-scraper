import { youtube_v3 } from "googleapis";
import { Schema } from "mongoose";
export interface IPlaylistData {
    date: Date;
    playlistId: string;
    provider: string;
    data: {
        playlist: youtube_v3.Schema$Playlist;
        playlistItems: youtube_v3.Schema$PlaylistItem[];
    };
}
export declare const playlistData: Schema<IPlaylistData, import("mongoose").Model<IPlaylistData, any, any, any>, any, any>;
export default playlistData;
