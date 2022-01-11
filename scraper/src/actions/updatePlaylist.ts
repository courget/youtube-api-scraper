import { YouTubeApi } from "@youtube-api-scraper/youtube-api";
import { ApiKeyClient } from "@youtube-api-scraper/google-api";
import { Database } from "@youtube-api-scraper/database";

import { ActionOptions } from "../types";

const updatePlaylist = async (playlistId: string, options: ActionOptions) => {
  try {
    const data = new Database(options.dataMongodbUri);
    const googleApiKeyClient = new ApiKeyClient(options.googleApiKey);
    const yt = new YouTubeApi(googleApiKeyClient);

    // Get playlist data
    const playlistData = await yt.getPlaylist(playlistId, [
      "id",
      "contentDetails",
      "localizations",
      "player",
      "snippet",
      "status",
    ]);
    if (!playlistData) {
      throw new Error(`Playlist ${playlistId} not found`);
    }

    // Get playlist items data
    const playlistItemsData = await yt.getPlaylistItems(playlistId, [
      "id",
      "snippet",
      "contentDetails",
      "status",
    ]);
    if (!playlistItemsData) {
      throw new Error(`Playlist ${playlistId} not found`);
    }

    // Save playlist data
    await data.pushPlaylistData({
      date: new Date(),
      playlistId: playlistId,
      provider: options.providerName,
      data: {
        playlist: playlistData,
        playlistItems: playlistItemsData,
      },
    });

    await data.close();
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
};

export default updatePlaylist;
