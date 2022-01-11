import playlistLocalization from "./playlistLocalization";
import thumbnailDetails from "./thumbnailDetails";

const playlistSnippet = {
  channelId: String,
  channelTitle: String,
  defaultLanguage: String,
  description: String,
  localized: playlistLocalization,
  publishedAt: String,
  tags: [String],
  thumbnails: thumbnailDetails,
  thumbnailVideoId: String,
  title: String,
};

export default playlistSnippet;
