import LeftSideBar from '../components/LeftSideBar'
import NotesCardList from '../components/NotesCardList'
import RightSideBar from '../components/RightSideBar'
import './App.css'

function App() {

  return (
    <>
      <div className='wrapper'>
        <LeftSideBar/>
        <NotesCardList/>
        <RightSideBar/>
      </div>
    </>
  )
}

export default App
