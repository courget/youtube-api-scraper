import resourceId from "./resourceId";
import thumbnailDetails from "./thumbnailDetails";

const playlistItemSnippet = {
  channelId: String,
  channelTitle: String,
  description: String,
  playlistId: String,
  position: Number,
  publishedAt: Date,
  resourceId: resourceId,
  thumbnails: thumbnailDetails,
  title: String,
  videoOwnerChannelId: String,
  videoOwnerChannelTitle: String,
};

export default playlistItemSnippet;
