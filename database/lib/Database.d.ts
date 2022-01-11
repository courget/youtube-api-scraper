import { Connection, Model } from "mongoose";
import { IChannelData, IPlaylistData, IVideoData } from "./schemas";
declare class Database {
    private _uri;
    get uri(): string;
    private _db;
    get db(): Connection;
    private _models;
    get models(): {
        [name: string]: Model<any>;
    };
    get ChannelData(): Model<IChannelData>;
    get PlaylistData(): Model<IPlaylistData>;
    get VideoData(): Model<IVideoData>;
    constructor(uri: string);
    close(): Promise<void>;
    pushChannelData(channelData: IChannelData): Promise<import("mongoose").Document<any, any, IChannelData> & IChannelData & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    pushPlaylistData(uploadPlaylistData: IPlaylistData): Promise<import("mongoose").Document<any, any, IPlaylistData> & IPlaylistData & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    pushVideoData(videoData: IVideoData): Promise<import("mongoose").Document<any, any, IVideoData> & IVideoData & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
export default Database;
