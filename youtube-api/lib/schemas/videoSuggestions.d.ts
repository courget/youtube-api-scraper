declare const videoSuggestions: {
    editorSuggestions: StringConstructor[];
    processingErrors: StringConstructor[];
    processingHints: StringConstructor[];
    processingWarnings: StringConstructor[];
    tagSuggestions: {
        categoryRestricts: StringConstructor[];
        tag: StringConstructor;
    }[];
};
export default videoSuggestions;
