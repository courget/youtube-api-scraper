declare const videoSnippet: {
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
export default videoSnippet;
