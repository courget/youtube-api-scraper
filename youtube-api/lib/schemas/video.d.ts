import { Schema } from "mongoose";
declare const video: {
    ageGating: {
        alcoholContent: BooleanConstructor;
        restricted: BooleanConstructor;
        videoGameRating: StringConstructor;
    };
    contentDetails: {
        caption: StringConstructor;
        contentRating: {
            acbRating: StringConstructor;
            agcomRating: StringConstructor;
            anatelRating: StringConstructor;
            bbfcRating: StringConstructor;
            bfvcRating: StringConstructor;
            bmukkRating: StringConstructor;
            catvfrRating: StringConstructor;
            catvRating: StringConstructor;
            cbfcRating: StringConstructor;
            cccRating: StringConstructor;
            cceRating: StringConstructor;
            chfilmRating: StringConstructor;
            chvrsRating: StringConstructor;
            cicfRating: StringConstructor;
            cnaRating: StringConstructor;
            cncRating: StringConstructor;
            csaRating: StringConstructor;
            cscfRating: StringConstructor;
            czfilmRating: StringConstructor;
            djctqRating: StringConstructor;
            djctqRatingReasons: StringConstructor[];
            ecbmctRating: StringConstructor;
            eefilmRating: StringConstructor;
            egfilmRating: StringConstructor;
            eirinRating: StringConstructor;
            fcbmRating: StringConstructor;
            fcoRating: StringConstructor;
            fmocRating: StringConstructor;
            fpbRating: StringConstructor;
            fpbRatingReasons: StringConstructor[];
            fskRating: StringConstructor;
            grfilmRating: StringConstructor;
            icaaRating: StringConstructor;
            ifcoRating: StringConstructor;
            ilfilmRating: StringConstructor;
            incaaRating: StringConstructor;
            kfcbRating: StringConstructor;
            kijkwijzerRating: StringConstructor;
            kmrbRating: StringConstructor;
            lsfRating: StringConstructor;
            mccaaRating: StringConstructor;
            mccypRating: StringConstructor;
            mcstRating: StringConstructor;
            mdaRating: StringConstructor;
            medietilsynetRating: StringConstructor;
            mekuRating: StringConstructor;
            menaMpaaRating: StringConstructor;
            mibacRating: StringConstructor;
            mocRating: StringConstructor;
            moctwRating: StringConstructor;
            mpaaRating: StringConstructor;
            mpaatRating: StringConstructor;
            mtrcbRating: StringConstructor;
            nbcplRating: StringConstructor;
            nbcRating: StringConstructor;
            nfrcRating: StringConstructor;
            nfvcbRating: StringConstructor;
            nkclvRating: StringConstructor;
            nmcRating: StringConstructor;
            oflcRating: StringConstructor;
            pefilmRating: StringConstructor;
            rcnofRating: StringConstructor;
            resorteviolenciaRating: StringConstructor;
            rtcRating: StringConstructor;
            rteRating: StringConstructor;
            russiaRating: StringConstructor;
            skfilmRating: StringConstructor;
            smaisRating: StringConstructor;
            smsaRating: StringConstructor;
            tvpgRating: StringConstructor;
            ytRating: StringConstructor;
        };
        countryRestriction: {
            allowed: BooleanConstructor;
            exception: StringConstructor[];
        };
        definition: StringConstructor;
        dimension: StringConstructor;
        duration: StringConstructor;
        hasCustomThumbnail: BooleanConstructor;
        licensedContent: BooleanConstructor;
        projection: StringConstructor;
        regionRestriction: {
            allowed: StringConstructor[];
            blocked: StringConstructor[];
        };
    };
    etag: StringConstructor;
    fileDetails: {
        audioStreams: {
            bitrateBps: StringConstructor;
            channelCount: StringConstructor;
            codec: StringConstructor;
            vendor: StringConstructor;
        }[];
        bitrateBps: StringConstructor;
        container: StringConstructor;
        creationTime: StringConstructor;
        durationMs: StringConstructor;
        fileName: StringConstructor;
        fileSize: StringConstructor;
        fileType: StringConstructor;
        videoStreams: {
            aspectRatio: NumberConstructor;
            bitrateBps: StringConstructor;
            codec: StringConstructor;
            frameRateFps: NumberConstructor;
            heightPixels: NumberConstructor;
            rotation: StringConstructor;
            vendor: StringConstructor;
            widthPixels: NumberConstructor;
        }[];
    };
    id: StringConstructor;
    kind: StringConstructor;
    liveStreamingDetails: {
        activeLiveChatId: StringConstructor;
        actualEndTime: StringConstructor;
        actualStartTime: StringConstructor;
        concurrentViewers: StringConstructor;
        scheduledEndTime: StringConstructor;
        scheduledStartTime: StringConstructor;
    };
    localizations: {
        type: typeof Schema.Types.Map;
        of: {
            description: StringConstructor;
            title: StringConstructor;
        };
    };
    monetizationDetails: {
        access: {
            allowed: BooleanConstructor;
            exception: StringConstructor[];
        };
    };
    player: {
        embedHeight: StringConstructor;
        embedHtml: StringConstructor;
        embedWidth: StringConstructor;
    };
    processingDetails: {
        editorSuggestionsAvailability: StringConstructor;
        fileDetailsAvailability: StringConstructor;
        processingFailureReason: StringConstructor;
        processingIssuesAvailability: StringConstructor;
        processingProgress: {
            partsProcessed: StringConstructor;
            partsTotal: StringConstructor;
            timeLeftMs: StringConstructor;
        };
        processingStatus: StringConstructor;
        tagSuggestionsAvailability: StringConstructor;
        thumbnailAvailability: StringConstructor;
    };
    projectDetails: {};
    recordingDetails: {
        location: {
            altitude: NumberConstructor;
            latitude: NumberConstructor;
            longitude: NumberConstructor;
        };
        locationDescription: StringConstructor;
        recordingDate: StringConstructor;
    };
    snippet: {
        categoryId: StringConstructor;
        channelId: StringConstructor;
        channelTitle: StringConstructor;
        defaultAudioLanguage: StringConstructor;
        defaultLanguage: StringConstructor;
        description: StringConstructor;
        liveBroadcastContent: StringConstructor;
        localized: {
            description: StringConstructor;
            title: StringConstructor;
        };
        publishedAt: StringConstructor;
        tags: StringConstructor[];
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
        dislikeCount: StringConstructor;
        favoriteCount: StringConstructor;
        likeCount: StringConstructor;
        viewCount: StringConstructor;
    };
    status: {
        embeddable: BooleanConstructor;
        failureReason: StringConstructor;
        license: StringConstructor;
        madeForKids: BooleanConstructor;
        privacyStatus: StringConstructor;
        publicStatsViewable: BooleanConstructor;
        publishAt: StringConstructor;
        rejectionReason: StringConstructor;
        selfDeclaredMadeForKids: BooleanConstructor;
        uploadStatus: StringConstructor;
    };
    suggestions: {
        editorSuggestions: StringConstructor[];
        processingErrors: StringConstructor[];
        processingHints: StringConstructor[];
        processingWarnings: StringConstructor[];
        tagSuggestions: {
            categoryRestricts: StringConstructor[];
            tag: StringConstructor;
        }[];
    };
    topicDetails: {
        relevantTopicIds: StringConstructor[];
        topicCategories: StringConstructor[];
        topicIds: StringConstructor[];
    };
};
export default video;
