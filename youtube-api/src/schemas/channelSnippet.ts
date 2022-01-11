import channelLocalization from "./channelLocalization";
import thumbnailDetails from "./thumbnailDetails";

const channelSnippet = {
  country: String,
  customUrl: String,
  defaultLanguage: String,
  description: String,
  localized: channelLocalization,
  publishedAt: String,
  thumbnails: thumbnailDetails,
  title: String,
};

export default channelSnippet;
