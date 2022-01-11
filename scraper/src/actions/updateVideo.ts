import { YouTubeApi } from "@youtube-api-scraper/youtube-api";
import { ApiKeyClient } from "@youtube-api-scraper/google-api";
import { Database } from "@youtube-api-scraper/database";

import { ActionOptions } from "../types";

const updateVideo = async (videoId: string, options: ActionOptions) => {
  try {
    const data = new Database(options.dataMongodbUri);
    const googleApiKeyClient = new ApiKeyClient(options.googleApiKey);
    const yt = new YouTubeApi(googleApiKeyClient);

    // Get video data
    const videoData = await yt.getVideo(videoId, [
      "id",
      "snippet",
      "contentDetails",
      "statistics",
      "status",
      "topicDetails",
      "localizations",
      "player",
      "liveStreamingDetails",
      "recordingDetails",
    ]);
    if (!videoData) {
      throw new Error(`Video ${videoId} not found`);
    }

    // Save video data
    await data.pushVideoData({
      date: new Date(),
      videoId: videoId,
      provider: options.providerName,
      data: videoData,
    });

    await data.close();
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
};

export default updateVideo;
