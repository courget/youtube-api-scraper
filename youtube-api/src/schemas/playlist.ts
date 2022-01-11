import { Schema } from "mongoose";

import playlistContentDetails from "./playlistContentDetails";
import playlistLocalization from "./playlistLocalization";
import playlistPlayer from "./playlistPlayer";
import playlistSnippet from "./playlistSnippet";
import playlistStatus from "./playlistStatus";

const playlist = {
  contentDetails: playlistContentDetails,
  etag: String,
  id: String,
  kind: String,
  localizations: { type: Schema.Types.Map, of: playlistLocalization },
  player: playlistPlayer,
  snippet: playlistSnippet,
  status: playlistStatus,
};

export default playlist;
