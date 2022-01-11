import { youtube_v3 } from "googleapis";

import { IAuthClient } from "@youtube-api-scraper/google-api";

class YouTubeApi {
  private _authClient: IAuthClient;
  public get authClient(): IAuthClient {
    return this._authClient;
  }

  private _youtube: youtube_v3.Youtube;
  public get youtube(): youtube_v3.Youtube {
    return this._youtube;
  }

  constructor(authClient: IAuthClient) {
    this._authClient = authClient;
    this._youtube = new youtube_v3.Youtube({
      auth: this.authClient.getAuthObject(),
    });
  }

  public async getChannel(
    channelId: string,
    part: string[]
  ): Promise<youtube_v3.Schema$Channel | null> {
    try {
      const { data: channelList } = await this.youtube.channels.list({
        id: [channelId],
        part,
      });

      return channelList.items?.[0] || null;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  public async getPlaylist(
    playlistId: string,
    part: string[]
  ): Promise<youtube_v3.Schema$Playlist | null> {
    try {
      const { data: playlist } = await this.youtube.playlists.list({
        id: [playlistId],
        part,
      });

      return playlist.items?.[0] || null;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  public async getPlaylistItems(
    playlistId: string,
    part: string[],
    options?: { max?: number; since?: Date }
  ): Promise<youtube_v3.Schema$PlaylistItem[] | null> {
    const { max, since } = { max: undefined, since: undefined, ...options };

    try {
      const videos: youtube_v3.Schema$PlaylistItem[] = [];
      let pageToken: string | null | undefined = undefined;

      do {
        const { data: playlistItems } = await this.youtube.playlistItems.list({
          playlistId,
          part,
          maxResults: max ? max - videos.length : 50,
          pageToken: pageToken,
        });

        if (playlistItems.items) {
          for (let item of playlistItems.items) {
            if (
              since &&
              item.contentDetails?.videoPublishedAt &&
              new Date(item.contentDetails.videoPublishedAt) < since
            ) {
              return videos;
            }

            if (max && videos.length >= max) {
              return videos;
            }

            videos.push(item);
          }
        }

        // TS infering error here (circular errors on playistItems type ??! wtf)
        pageToken = playlistItems.nextPageToken as string;
      } while (pageToken);

      return videos;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  public async getVideo(
    videoId: string,
    part: string[]
  ): Promise<youtube_v3.Schema$Video | null> {
    try {
      const { data: video } = await this.youtube.videos.list({
        id: [videoId],
        part,
      });

      return video.items?.[0] || null;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
}

export default YouTubeApi;
