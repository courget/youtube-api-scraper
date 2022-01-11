import videoProcessingDetailsProcessingProgress from "./videoProcessingDetailsProcessingProgress";

const videoProcessingDetails = {
  editorSuggestionsAvailability: String,
  fileDetailsAvailability: String,
  processingFailureReason: String,
  processingIssuesAvailability: String,
  processingProgress: videoProcessingDetailsProcessingProgress,
  processingStatus: String,
  tagSuggestionsAvailability: String,
  thumbnailAvailability: String,
};

export default videoProcessingDetails;
