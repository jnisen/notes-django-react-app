import React, {useState, useEffect} from 'react'
import ListItem from '../components/ListItem'
import AddButton from '../components/AddButton'


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
        <div className="notes">
            <div className="notes-header">
                <h2 className="notes-title">&#9782; Notes</h2>
                <p className="notes-count">Count: {notes.length}</p>
            </div>
            <div className="notes-list">
                {notes.map((note, index) => (
                    <ListItem key={index} note={note} />
                ))}
            </div> 
            <AddButton />
        </div>
  )
}
