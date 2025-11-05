import { useState } from 'react'
import LeftSideBar from '../components/LeftSideBar'
import NotesCardList from '../components/NotesCardList'
import RightSideBar from '../components/RightSideBar'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [allNotes, setAllNotes] = useState([]);      // 🔹 original data
  const [filteredNotes, setFilteredNotes] = useState([]); // 🔹 what to display


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


  return (
    <div className='wrapper'>
      {/* Left side adds notes */}
      <LeftSideBar setAllNotes={setAllNotes} allNotes={allNotes} setFilteredNotes={setFilteredNotes} />

      {/* Center shows visible notes */}
      <NotesCardList notesData={filteredNotes.length ? filteredNotes : allNotes} />

      {/* Right side filters */}
      <RightSideBar allNotes={allNotes} setFilteredNotes={setFilteredNotes} />
    </div>
  )
}

export default App
