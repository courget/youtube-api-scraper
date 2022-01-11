import { youtube_v3 } from "googleapis";
import { Schema } from "mongoose";
export interface IChannelData {
    date: Date;
    channelId: string;
    provider: string;
    data: youtube_v3.Schema$Channel;
}
declare const channelData: Schema<IChannelData, import("mongoose").Model<IChannelData, any, any, any>, any, any>;
export default channelData;
