import React, {useState, useEffect} from 'react'
import ListItem from '../components/ListItem'


export default function NoteListPage() {
    const [notes, setNotes] = useState([])

    useEffect(() =>{
        getNotes();
    },[])

    const getNotes = async () => {
        const response = await fetch('/api/notes/')
        const data = await response.json()
        setNotes(data)
    }
  return (
    <div className="note-list">
        {notes.map((note, index) => (
                <ListItem note={note} key={note.id}/>
        ))}
    </div>
  )
}
