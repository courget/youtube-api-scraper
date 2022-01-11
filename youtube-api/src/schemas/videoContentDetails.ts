import contentRating from "./contentRating";
import accessPolicy from "./accessPolicy";
import videoContentDetailsRegionRestriction from "./videoContentDetailsRegionRestriction";

const videoContentDetails = {
  caption: String,
  contentRating: contentRating,
  countryRestriction: accessPolicy,
  definition: String,
  dimension: String,
  duration: String,
  hasCustomThumbnail: Boolean,
  licensedContent: Boolean,
  projection: String,
  regionRestriction: videoContentDetailsRegionRestriction,
};

export default videoContentDetails;
