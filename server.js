const express = require('express')
const app = express()
const port = 3000
const database = require('./database/database')
app.use(express.urlencoded({extended:true}))

app.set("view engine", "ejs");

//Home page
app.get('/', (req, res) =>{
    res.render("index.ejs")
});

//All notes
app.get('/notes', (req, res) => {
    const searchTerm = req.query.searchTerm;
    const notes = database.getNotes(searchTerm)
    res.render("notes.ejs", {notes});
})

//Viewing the individual notes
app.get('/notes/:id', (req, res) => {
    const id = +req.params.id;
    const note = database.getNote(id)

    if(!note) {
        res.render('note404.ejs')
    }
    // res.send(note.content)
    res.render('singleNote.ejs', { note })
})

//Adding a new note
app.get('/addNote', (req, res) =>{
    res.render('addNote.ejs')
})

app.post('/notes', (req, res) => {
    const data = req.body
    database.addNote(data)
    res.redirect('/notes')
})

app.post('/notes/:id/delete', (req, res) => {
    const id = +req.params.id
    database.deleteNote(id)
    res.redirect('/notes')
})
//Making the things inside the Public directory Public so can be accessible by everyone
app.use(express.static("public"))

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})