import { useState } from 'react'
import LeftSideBar from '../components/LeftSideBar'
import NotesCardList from '../components/NotesCardList'
import RightSideBar from '../components/RightSideBar'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [allNotes, setAllNotes] = useState([]);
  const [filteredNotes, setFilteredNotes] = useState([]);
  const [editNote, setEditNote] = useState(null);

  useEffect(() => {
    const savedNotes = localStorage.getItem('notes');
    if (savedNotes) {
      setAllNotes(JSON.parse(savedNotes));
    }
  }, []);


  useEffect(() => {
    if (allNotes.length > 0) {
      localStorage.setItem('notes', JSON.stringify(allNotes));
    }
  }, [allNotes]);

  const handleEditNote = (note) => {
    setEditNote(note);
  };


  return (
    <div className='wrapper'>

      <LeftSideBar
        setAllNotes={setAllNotes}
        allNotes={allNotes}
        setFilteredNotes={setFilteredNotes}
        updateNote={editNote}
      />

      <NotesCardList
        notesData={filteredNotes.length ? filteredNotes : allNotes}
        setAllNotes={setAllNotes}
        allNotes={allNotes}
        onEditNote={handleEditNote}
      />

      <RightSideBar
        allNotes={allNotes}
        setFilteredNotes={setFilteredNotes}
      />
    </div>
  )
}

export default App
