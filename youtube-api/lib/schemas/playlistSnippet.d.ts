declare const playlistSnippet: {
    channelId: StringConstructor;
    channelTitle: StringConstructor;
    defaultLanguage: StringConstructor;
    description: StringConstructor;
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
    thumbnailVideoId: StringConstructor;
    title: StringConstructor;
};
export default playlistSnippet;
