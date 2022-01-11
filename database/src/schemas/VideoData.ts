import { youtube_v3 } from "googleapis";
import { Schema } from "mongoose";

import { video as videoSchema } from "@youtube-api-scraper/youtube-api";

export interface IVideoData {
  date: Date;
  videoId: string;
  provider: string;
  data: youtube_v3.Schema$Video;
}

export const videoData = new Schema<IVideoData>(
  {
    date: { type: Date, required: true },
    videoId: { type: String, required: true, index: true },
    provider: { type: String, required: true },
    data: { type: videoSchema, required: true },
  },
  {
    timeseries: {
      timeField: "date",
      metaField: "videoId",
      granularity: "seconds",
    },
    id: false,
    strict: true,
    timestamps: true,
    collection: "videos_data",
  }
);

export default videoData;
