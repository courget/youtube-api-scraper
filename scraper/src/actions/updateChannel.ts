import { YouTubeApi } from "@youtube-api-scraper/youtube-api";
import { ApiKeyClient } from "@youtube-api-scraper/google-api";
import { Database } from "@youtube-api-scraper/database";

import { ActionOptions } from "../types";

const updateChannel = async (channelId: string, options: ActionOptions) => {
  try {
    const data = new Database(options.dataMongodbUri);
    const googleApiKeyClient = new ApiKeyClient(options.googleApiKey);
    const yt = new YouTubeApi(googleApiKeyClient);

    // Get channel data
    const channelData = await yt.getChannel(channelId, [
      "id",
      "snippet",
      "contentDetails",
      "statistics",
      "topicDetails",
      "status",
      "brandingSettings",
      "contentOwnerDetails",
      "localizations",
    ]);
    if (!channelData) {
      throw new Error(`Channel ${channelId} not found`);
    }

    // Save channel data
    await data.pushChannelData({
      date: new Date(),
      channelId: channelId,
      provider: options.providerName,
      data: channelData,
    });

    await data.close();
  } catch (e) {
    console.error(e);
  }
};

export default updateChannel;
