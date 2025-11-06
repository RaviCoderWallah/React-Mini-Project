import { useState } from "react";
import HeaderSearchBar from "./HeaderSearchBar";
import NotesCard from "./NotesCard";

const NotesCardList = ({ notesData, allNotes, setAllNotes, onEditNote }) => {
  const [searchInputValue, setSearchInputValue] = useState("");

  const handleInputValueChange = (value) => {
    setSearchInputValue(value);
  };

  const filteredNotes =
    searchInputValue.length > 0
      ? notesData.filter((note) =>
          note.title.toLowerCase().includes(searchInputValue.toLowerCase())
        )
      : notesData;

  return (
    <div className="main-content">
      <HeaderSearchBar handleInputChange={handleInputValueChange} />
      <div className="notes-card-list">
        {filteredNotes.length > 0 ? (
          filteredNotes.map((note) => (
            <NotesCard
              key={note.id}
              note={note}
              id={note.id}
              allNotes={allNotes}
              setAllNotes={setAllNotes}
              onEditNote={onEditNote}
            />
          ))
        ) : (
          <div className="no-notes">
            No notes found matching your search.
          </div>
        )}
      </div>
    </div>
  );
};

export default NotesCardList;
