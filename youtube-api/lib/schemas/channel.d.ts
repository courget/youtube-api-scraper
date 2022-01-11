import { Schema } from "mongoose";
declare const channel: {
    auditDetails: {
        communityGuidellinesGoodStanding: BooleanConstructor;
        contentIdClaimsGoodStanding: BooleanConstructor;
        copyrightStrikesGoodStanding: BooleanConstructor;
    };
    brandingSettings: {
        channel: {
            country: StringConstructor;
            defaultLanguage: StringConstructor;
            defaultTab: StringConstructor;
            description: StringConstructor;
            featuredChannelsTitle: StringConstructor;
            featuredChannelsUrl: StringConstructor;
            keywords: StringConstructor;
            moderateComments: BooleanConstructor;
            profileColor: StringConstructor;
            showBrowseView: BooleanConstructor;
            showRelatedChannels: BooleanConstructor;
            title: StringConstructor;
            trackingAnalyticsAccountId: StringConstructor;
            unsubscribedTrailer: StringConstructor;
        };
        hints: {
            property: StringConstructor;
            value: StringConstructor;
        }[];
        image: {
            backgroundImageUrl: {
                default: StringConstructor;
                defaultLanguage: StringConstructor;
                localized: {
                    language: StringConstructor;
                    value: StringConstructor;
                }[];
            };
            bannerExternalUrl: StringConstructor;
            bannerImageUrl: StringConstructor;
            bannerMobileExtraHdImageUrl: StringConstructor;
            bannerMobileHdImageUrl: StringConstructor;
            bannerMobileImageUrl: StringConstructor;
            bannerMobileLowImageUrl: StringConstructor;
            bannerMobileMediumHdImageUrl: StringConstructor;
            bannerTabletExtraHdImageUrl: StringConstructor;
            bannerTabletHdImageUrl: StringConstructor;
            bannerTabletImageUrl: StringConstructor;
            bannerTabletLowImageUrl: StringConstructor;
            bannerTvHighImageUrl: StringConstructor;
            bannerTvImageUrl: StringConstructor;
            bannerTvLowImageUrl: StringConstructor;
            bannerTvMediumImageUrl: StringConstructor;
            largeBrandedBannerImageImapScript: {
                default: StringConstructor;
                defaultLanguage: StringConstructor;
                localized: {
                    language: StringConstructor;
                    value: StringConstructor;
                }[];
            };
            largeBrandedBannerImageUrl: {
                default: StringConstructor;
                defaultLanguage: StringConstructor;
                localized: {
                    language: StringConstructor;
                    value: StringConstructor;
                }[];
            };
            smallBrandedBannerImageImapScript: {
                default: StringConstructor;
                defaultLanguage: StringConstructor;
                localized: {
                    language: StringConstructor;
                    value: StringConstructor;
                }[];
            };
            smallBrandedBannerImageUrl: {
                default: StringConstructor;
                defaultLanguage: StringConstructor;
                localized: {
                    language: StringConstructor;
                    value: StringConstructor;
                }[];
            };
            trackingImageUrl: StringConstructor;
            watchIconImageUrl: StringConstructor;
        };
        watch: {
            backgroundColor: StringConstructor;
            featuredPaylistId: StringConstructor;
            textColor: StringConstructor;
        };
    };
    contentDetails: {
        relatedPlaylists: {
            favorites: StringConstructor;
            likes: StringConstructor;
            uploads: StringConstructor;
            watchHistory: StringConstructor;
            watchLater: StringConstructor;
        };
    };
    contentOwnerDetails: {
        contentOwner: StringConstructor;
        timeLinked: StringConstructor;
    };
    conversionPings: {
        pings: {
            context: StringConstructor;
            conversionUrl: StringConstructor;
        }[];
    };
    etag: StringConstructor;
    id: StringConstructor;
    kind: StringConstructor;
    localizations: {
        type: typeof Schema.Types.Map;
        of: {
            description: StringConstructor;
            title: StringConstructor;
        };
    };
    snippet: {
        country: StringConstructor;
        customUrl: StringConstructor;
        defaultLanguage: StringConstructor;
        description: StringConstructor;
        localized: {
            description: StringConstructor;
            title: StringConstructor;
        };
        publishedAt: StringConstructor;
        thumbnails: {
            default: {
                height: NumberConstructor;
                url: StringConstructor;
                width: NumberConstructor;
            };
            high: {
                height: NumberConstructor;
                url: StringConstructor;
                width: NumberConstructor;
            };
            maxres: {
                height: NumberConstructor;
                url: StringConstructor;
                width: NumberConstructor;
            };
            medium: {
                height: NumberConstructor;
                url: StringConstructor;
                width: NumberConstructor;
            };
            standard: {
                height: NumberConstructor;
                url: StringConstructor;
                width: NumberConstructor;
            };
        };
        title: StringConstructor;
    };
    statistics: {
        commentCount: StringConstructor;
        hiddenSubscriberCount: StringConstructor;
        subscriberCount: StringConstructor;
        videoCount: StringConstructor;
        viewCount: StringConstructor;
    };
    status: {
        isLinked: BooleanConstructor;
        longUploadStatus: StringConstructor;
        madeForKids: BooleanConstructor;
        privacyStatus: StringConstructor;
        selfDeclaredMadeForKids: BooleanConstructor;
    };
    topicDetails: {
        topicCategories: StringConstructor[];
        topicIds: StringConstructor[];
    };
};
export default channel;
