import './App.css'
import BillSplitCalculate from './components/BillSplitCalculate'
import BillSplitResult from './components/BillSplitResult'

function App() {

  return (
    <>
    <div className='bill-splitter-container'>
      <BillSplitCalculate/>
      <BillSplitResult/>
    </div>
    </>
  )
}

export default App
