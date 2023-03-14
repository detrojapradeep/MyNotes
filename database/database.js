let notes = [
    {
        id:1,
        title:"My first note",
        timestamp:Date.now(),
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam etiam erat velit scelerisque. Lacus vestibulum sed arcu non odio. Interdum velit laoreet id donec ultrices tincidunt arcu non sodales. Rhoncus mattis rhoncus urna neque viverra justo. Varius quam quisque id diam vel. Lectus urna duis convallis convallis tellus id. Egestas sed sed risus pretium quam. Pharetra pharetra massa massa ultricies mi quis hendrerit dolor. Pretium fusce id velit ut tortor pretium viverra. Sed lectus vestibulum mattis ullamcorper velit sed. Amet tellus cras adipiscing enim eu. Enim sed faucibus turpis in. Nisl purus in mollis nunc sed id semper risus in. Vulputate ut pharetra sit amet. Tortor vitae purus faucibus ornare suspendisse sed nisi lacus. Gravida cum sociis natoque penatibus et magnis dis parturient montes. Tempor commodo ullamcorper a lacus vestibulum sed."
    },
    {
        id:2,
        title: "My second note",
        timestamp: Date.now(),
        content: "Sit amet nisl suscipit adipiscing bibendum. Odio facilisis mauris sit amet massa vitae tortor condimentum. Proin fermentum leo vel orci porta non pulvinar neque. Molestie a iaculis at erat pellentesque adipiscing. Venenatis tellus in metus vulputate. Id eu nisl nunc mi ipsum faucibus vitae. Vitae congue eu consequat ac felis donec et odio. Condimentum id venenatis a condimentum vitae sapien pellentesque. Tortor aliquam nulla facilisi cras fermentum odio. Lacus laoreet non curabitur gravida. Quis varius quam quisque id diam vel quam elementum pulvinar. Commodo sed egestas egestas fringilla phasellus faucibus."
    }
]

let currentID = 3

function getNotes(searchTerm) {
    if(!searchTerm){
        return notes
    }

    return notes.filter((note) => note.title.includes(searchTerm) || note.content.includes(searchTerm))
}
exports.getNotes = getNotes

function getNote(id) {
    return notes.find((note) => note.id === id)
}
exports.getNote = getNote

function addNote(note) {
    notes.push({
        ...note,
        id: currentID,
        timestamp: Date.now()
    })
    currentID++
}
exports.addNote = addNote

function deleteNote(id) {
    notes = notes.filter((note) => note.id!== id)
}
exports.deleteNote = deleteNote
