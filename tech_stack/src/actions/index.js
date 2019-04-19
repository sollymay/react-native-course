//this is what we call an action creator...
//this instructs the reducer which library to select
//actions are objects that have a type property defined
export const selectLibrary = (libraryId) => {
    return {
        type: 'select_library',
        payload: libraryId
    };
};

// how to call an action creator?
// 1. determine where to call it (our case, listItem, since there everything changes)
// 2. wire up action creator inside application (shows in ListItem)
// 3. Import connect helper from redux... (shows in ListItem)