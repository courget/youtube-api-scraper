import { Schema } from "mongoose";

import videoAgeGating from "./videoAgeGating";
import videoContentDetails from "./videoContentDetails";
import videoFileDetails from "./videoFileDetails";
import videoLiveStreamingDetails from "./videoLiveStreamingDetails";
import videoLocalization from "./videoLocalization";
import videoMonetizationDetails from "./videoMonetizationDetails";
import videoPlayer from "./videoPlayer";
import videoProcessingDetails from "./videoProcessingDetails";
import videoRecordingDetails from "./videoRecordingDetails";
import videoSnippet from "./videoSnippet";
import videoStatistics from "./videoStatistics";
import videoStatus from "./videoStatus";
import videoSuggestions from "./videoSuggestions";
import videoTopicDetails from "./videoTopicDetails";

const video = {
  ageGating: videoAgeGating,
  contentDetails: videoContentDetails,
  etag: String,
  fileDetails: videoFileDetails,
  id: String,
  kind: String,
  liveStreamingDetails: videoLiveStreamingDetails,
  localizations: { type: Schema.Types.Map, of: videoLocalization },
  monetizationDetails: videoMonetizationDetails,
  player: videoPlayer,
  processingDetails: videoProcessingDetails,
  projectDetails: {},
  recordingDetails: videoRecordingDetails,
  snippet: videoSnippet,
  statistics: videoStatistics,
  status: videoStatus,
  suggestions: videoSuggestions,
  topicDetails: videoTopicDetails,
};

export default video;
