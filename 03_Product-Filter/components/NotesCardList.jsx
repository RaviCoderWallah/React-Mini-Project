import HeaderSearchBar from "./HeaderSearchBar"
import NotesCard from "./NotesCard"

const NotesCardList = ({ notesData, allNotes , setAllNotes }) => {
  return (
    <div className="main-content">
      <HeaderSearchBar />
      <div className="notes-card-list">
        {notesData?.map(note => (
          <NotesCard 
            key={note.id}
            note={note}
            id={note.id}
            allNotes={allNotes}
            setAllNotes={setAllNotes}
          />
        ))}
        {notesData?.length === 0 && (
          <div className="no-notes">
            No notes yet. Create one using the form on the left.
          </div>
        )}
      </div>
    </div>
  )
}

export default NotesCardList