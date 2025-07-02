class Note {
    constructor(id, text) {
        this.id = id
        this.text = text
        this.done = false
    }

    mark() {
        this.done = true
    }

    toText() {
        return `${this.id}. [${this.done ? '✔' : ' '}] ${this.text}`
    }
}

class NoteManager {
    constructor() {
        this.notes = []
        this.idCount = 1
    }

    addNote(text) {
        const note = new Note(this.idCount++, text)
        this.notes.push(note)
        return note
    }

    markNote(id) {
        const note = this.notes.find(n => n.id === id)
        if (note) note.mark()
    }

    showNotes() {
        console.log("Notes:")
        this.notes.forEach(note => console.log(note.toText()))
    }
}

const notes = new NoteManager()
notes.addNote("Review JS concepts")
notes.addNote("Create portfolio")
notes.markNote(1)
notes.showNotes()
