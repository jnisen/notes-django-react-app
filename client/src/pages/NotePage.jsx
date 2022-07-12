import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';

export default function NotePage() {

    let { id } = useParams();
    const [note, setNote] = useState("");

     useEffect(() =>{
        getNote();
     // eslint-disable-next-line react-hooks/exhaustive-deps
     }, [id])

     const getNote = async () => {
        const response = await fetch(`/api/note/${id}`)
        const data = await response.json();
        setNote(data)
     }

  return (
    <h3>Body: {note?.body}</h3>
    // <h3>Created:{note.create}</h3>
    // <h3>Updated:{note.updated}</h3>
  )
}
