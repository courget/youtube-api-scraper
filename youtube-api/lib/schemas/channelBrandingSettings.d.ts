declare const channelBrandingSettings: {
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
export default channelBrandingSettings;
