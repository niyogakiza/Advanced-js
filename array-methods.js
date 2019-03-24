const notes = ['note1', 'note2', 'note3']

const addNote = (notes, add) => {
  notes.push(add)
}

addNote(notes, 'hello')
console.log(notes)

const removeNote = (notes, remove) => {
  notes.splice(remove, 1)
}

removeNote(notes, 'note1')
console.log(notes)


