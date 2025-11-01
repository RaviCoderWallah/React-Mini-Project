import HeaderSearchBar from "./HeaderSearchBar"
import NotesCard from "./NotesCard"

const NotesCardList = () => {
  return (
    <div className="main-content">
      <HeaderSearchBar />
      <div className="notes-card-list">
        <NotesCard />
        <NotesCard />
        <NotesCard />
        <NotesCard />
        <NotesCard />
        <NotesCard />
        <NotesCard />
        <NotesCard />
      </div>
    </div>
  )
}

export default NotesCardList