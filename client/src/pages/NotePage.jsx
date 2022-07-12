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
        const response = await fetch(`/api/note/${id}`)
        const data = await response.json();
        setNote(data)
     }

  const handleUpdateNote = async () => {
   await fetch(`/api/note/update/${id}/`, {
      method: 'PUT',
      headers: {
         'Content-Type': 'application/json',
      },
      body: JSON.stringify(note)
   })
   navigate('/')
  }

  const handleDeleteNote = async () => {
   const response = await fetch(`/api/note/delete/${id}/`, {
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
      <button onClick={handleDeleteNote}>Delete</button>    
      </div>
      <textarea 
         defaultValue={note?.body}
         onChange={(e)=>{setNote({...note, 'body':e.target.value})}}
      >
          
      </textarea>
   </div>
  )
}
