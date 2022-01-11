import { youtube_v3 } from "googleapis";
import { Schema } from "mongoose";

import {
  playlist as playlistSchema,
  playlistItem as playlistItemSchema,
} from "@youtube-api-scraper/youtube-api";

export interface IPlaylistData {
  date: Date;
  playlistId: string;
  provider: string;
  data: {
    playlist: youtube_v3.Schema$Playlist;
    playlistItems: youtube_v3.Schema$PlaylistItem[];
  };
}

export const playlistData = new Schema<IPlaylistData>(
  {
    date: { type: Date, required: true },
    playlistId: { type: String, required: true, index: true },
    provider: { type: String, required: true },
    data: {
      type: {
        playlist: { type: playlistSchema, required: true },
        playlistItems: { type: [playlistItemSchema], required: true },
      },
      required: true,
    },
  },
  {
    timeseries: {
      timeField: "date",
      metaField: "playlistId",
      granularity: "seconds",
    },
    id: false,
    strict: true,
    timestamps: true,
    collection: "playlists_data",
  }
);

export default playlistData;
