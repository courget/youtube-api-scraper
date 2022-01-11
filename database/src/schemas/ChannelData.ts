import { youtube_v3 } from "googleapis";
import { Schema } from "mongoose";

import { channel as channelSchema } from "@youtube-api-scraper/youtube-api";

export interface IChannelData {
  date: Date;
  channelId: string;
  provider: string;
  data: youtube_v3.Schema$Channel;
}

const channelData = new Schema<IChannelData>(
  {
    date: { type: Date, required: true },
    channelId: { type: String, required: true, index: true },
    provider: { type: String, required: true },
    data: { type: channelSchema, required: true },
  },
  {
    timeseries: {
      timeField: "date",
      metaField: "channelId",
      granularity: "seconds",
    },
    id: false,
    strict: true,
    timestamps: true,
    collection: "channels_data",
  }
);

export default channelData;
