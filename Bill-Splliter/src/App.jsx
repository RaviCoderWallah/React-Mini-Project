import { useState } from 'react'
import './App.css'
import BillSplitCalculate from './components/BillSplitCalculate'
import BillSplitResult from './components/BillSplitResult'

function App() {

   const [data, setData] = useState({
    billAmount: null,
    tipPercentage: null,
    numOfPeople: null
   });

  return (
    <>
    <div className='bill-splitter-container'>
      <BillSplitCalculate setData={setData}/>
      <BillSplitResult result={data} forReset={setData}/>
    </div>
    </>
  )
}

export default App
