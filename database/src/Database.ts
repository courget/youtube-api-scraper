import { Connection, createConnection, Model } from "mongoose";

import {
  IChannelData,
  channelData as channelDataSchema,
  IPlaylistData,
  playlistData as playlistDataSchema,
  IVideoData,
  videoData as videoDataSchema,
} from "./schemas";

class Database {
  private _uri: string;
  public get uri(): string {
    return this._uri;
  }

  private _db: Connection;
  public get db(): Connection {
    return this._db;
  }

  private _models: { [name: string]: Model<any> } = {};
  public get models(): { [name: string]: Model<any> } {
    return this._models;
  }

  public get ChannelData(): Model<IChannelData> {
    return this.models.ChannelData;
  }

  public get PlaylistData(): Model<IPlaylistData> {
    return this.models.PlaylistData;
  }

  public get VideoData(): Model<IVideoData> {
    return this.models.VideoData;
  }

  constructor(uri: string) {
    this._uri = uri;
    this._db = createConnection(this.uri);

    this.models.ChannelData = this.db.model<IChannelData>(
      "ChannelData",
      channelDataSchema
    );
    this.models.PlaylistData = this.db.model<IPlaylistData>(
      "PlaylistData",
      playlistDataSchema
    );
    this.models.VideoData = this.db.model<IVideoData>(
      "VideoData",
      videoDataSchema
    );
  }

  public async close() {
    await this.db.close();
  }

  public async pushChannelData(channelData: IChannelData) {
    return this.ChannelData.create(channelData);
  }

  public async pushPlaylistData(uploadPlaylistData: IPlaylistData) {
    return this.PlaylistData.create(uploadPlaylistData);
  }

  public async pushVideoData(videoData: IVideoData) {
    return this.VideoData.create(videoData);
  }
}

export default Database;
