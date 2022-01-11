import playlistItemContentDetails from "./playlistItemContentDetails";
import playlistItemSnippet from "./playlistItemSnippet";
import playlistItemStatus from "./playlistItemStatus";

const playlistItem = {
  contentDetails: playlistItemContentDetails,
  etag: String,
  id: String,
  kind: String,
  snippet: playlistItemSnippet,
  status: playlistItemStatus,
};

export default playlistItem;
