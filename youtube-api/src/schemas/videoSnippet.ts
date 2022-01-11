import thumbnailDetails from "./thumbnailDetails";
import videoLocalization from "./videoLocalization";

const videoSnippet = {
  categoryId: String,
  channelId: String,
  channelTitle: String,
  defaultAudioLanguage: String,
  defaultLanguage: String,
  description: String,
  liveBroadcastContent: String,
  localized: videoLocalization,
  publishedAt: String,
  tags: [String],
  thumbnails: thumbnailDetails,
  title: String,
};

export default videoSnippet;
