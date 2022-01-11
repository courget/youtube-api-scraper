declare const videoProcessingDetails: {
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
export default videoProcessingDetails;
