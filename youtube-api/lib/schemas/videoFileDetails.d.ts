declare const videoFileDetails: {
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
export default videoFileDetails;
