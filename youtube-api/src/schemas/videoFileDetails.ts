import videoFileDetailsAudioStream from "./videoFileDetailsAudioStream";
import videoFileDetailsVideoStream from "./videoFileDetailsVideoStream";

const videoFileDetails = {
  audioStreams: [videoFileDetailsAudioStream],
  bitrateBps: String,
  container: String,
  creationTime: String,
  durationMs: String,
  fileName: String,
  fileSize: String,
  fileType: String,
  videoStreams: [videoFileDetailsVideoStream],
};

export default videoFileDetails;
