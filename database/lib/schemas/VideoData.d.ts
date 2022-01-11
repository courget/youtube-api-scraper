import { youtube_v3 } from "googleapis";
import { Schema } from "mongoose";
export interface IVideoData {
    date: Date;
    videoId: string;
    provider: string;
    data: youtube_v3.Schema$Video;
}
export declare const videoData: Schema<IVideoData, import("mongoose").Model<IVideoData, any, any, any>, any, any>;
export default videoData;
