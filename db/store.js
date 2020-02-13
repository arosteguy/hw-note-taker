const fs = require("fs");
const util = require("util");
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);
class Store {
    constructor() {
        this.lastId = 0;
    }
    read() {
      return readFileAsync("db/journal.json", "utf8"); 
    }

    write(note) {
        return writeFileAsync("db/journal.json", JSON.stringify(note));
    }


    getNotes() {
        return this.read().then(notes => {
            let parsedNote;
            // if notes is not an array or can't be turned in to one, send back a new empty array
            try {
                parsedNote = [].concat(JSON.parse(notes));
            } catch (error) {
                parsedNote = [];
            }
            return parsedNote;
        });
    }

    addNote(note) {
        const {title,text} = note;
        if (!title || !text) {
            throw new Error("Title and text can't be blank!")
        }
        const newNote = {title, text, id: ++this.lastId};
        return this.getNotes()
            .then(notes => [...notes, newNote])
            .then(updatedNotes => this.write(updatedNotes))
            .then( () => newNote);
    }

    removeNote(id) {
        return this.getNotes()
            .then(notes => notes.filter(note => note.id !== parseInt(id)))
            .then(filteredNotes => this.write(filteredNotes));
    }
}
module.exports = new Store();