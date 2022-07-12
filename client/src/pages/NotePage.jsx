import React, {useState, useEffect} from 'react'
import { useParams, Link } from 'react-router-dom';
import {ReactComponent as ArrowLeft} from '../assets/arrow-left.svg'

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
   <div className="note">
      <div className="note-header">
         <h3>
            <Link to='/'>
               <ArrowLeft/>
            </Link>
         </h3>
      </div>
      <textarea defaultValue={note?.body}></textarea>
   </div>
  )
}
