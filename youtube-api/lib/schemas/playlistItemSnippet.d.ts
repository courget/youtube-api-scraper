declare const playlistItemSnippet: {
    channelId: StringConstructor;
    channelTitle: StringConstructor;
    description: StringConstructor;
    playlistId: StringConstructor;
    position: NumberConstructor;
    publishedAt: DateConstructor;
    resourceId: {
        channelId: StringConstructor;
        kind: StringConstructor;
        playlistId: StringConstructor;
        videoId: StringConstructor;
    };
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
    videoOwnerChannelId: StringConstructor;
    videoOwnerChannelTitle: StringConstructor;
};
export default playlistItemSnippet;
