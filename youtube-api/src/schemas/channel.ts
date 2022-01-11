import { Schema } from "mongoose";

import channelAuditDetails from "./channelAuditDetails";
import channelBrandingSettings from "./channelBrandingSettings";
import channelContentDetails from "./channelContentDetails";
import channelContentOwnerDetails from "./channelContentOwnerDetails";
import channelConversionPings from "./channelConversionPings";
import channelLocalization from "./channelLocalization";
import channelSnippet from "./channelSnippet";
import channelStatistics from "./channelStatistics";
import channelStatus from "./channelStatus";
import channelTopicDetails from "./channelTopicDetails";

const channel = {
  auditDetails: channelAuditDetails,
  brandingSettings: channelBrandingSettings,
  contentDetails: channelContentDetails,
  contentOwnerDetails: channelContentOwnerDetails,
  conversionPings: channelConversionPings,
  etag: String,
  id: String,
  kind: String,
  localizations: { type: Schema.Types.Map, of: channelLocalization },
  snippet: channelSnippet,
  statistics: channelStatistics,
  status: channelStatus,
  topicDetails: channelTopicDetails,
};

export default channel;
