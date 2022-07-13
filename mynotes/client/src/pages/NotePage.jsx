import React, {useState, useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import {ReactComponent as ArrowLeft} from '../assets/arrow-left.svg'

export default function NotePage() {

    let { id } = useParams();
    const [note, setNote] = useState("");
    const navigate = useNavigate();

     useEffect(() =>{
        getNote();
     // eslint-disable-next-line react-hooks/exhaustive-deps
     }, [id])

     const getNote = async () => {
        if (id === 'new') return
        const response = await fetch(`/api/notes/${id}`)
        const data = await response.json();
        setNote(data)
     }

  const handleUpdateNote = async () => {
   if (id === 'new') {
      handleCreateNote()
      navigate('/')
      return
   }
   
   if (note.body.length === 0) {
      handleDeleteNote()
      return
   }

   await fetch(`/api/notes/${id}/`, {
      method: 'PUT',
      headers: {
         'Content-Type': 'application/json',
      },
      body: JSON.stringify(note)
   })
   navigate('/')
  }

  const handleCreateNote = async () => {
   if (note.body === null) {
      alert('Need a body')
      return
   }
   await fetch(`/api/notes/`, {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json',
      },
      body: JSON.stringify(note)
   })
   navigate('/')
  }

  const handleDeleteNote = async () => {
   const response = await fetch(`/api/notes/${id}/`, {
      method: 'DELETE',
      headers: {
         'Content-Type': 'application/json',
      },
   })
   const data = await response.json()
   alert(data)
   navigate('/')
  }

  return (
   <div className="note">
      <div className="note-header">
         <h3>
            <ArrowLeft onClick={handleUpdateNote}/>
         </h3>
         {id !== 'new' ? 
          <button onClick={handleDeleteNote}>Delete</button> :
          <button onClick={handleCreateNote}>Done</button>}
         
      </div>
      <textarea 
         value={note?.body}
         onChange={(e)=>{setNote({...note, 'body':e.target.value})}}
      >
          
      </textarea>
   </div>
  )
}
