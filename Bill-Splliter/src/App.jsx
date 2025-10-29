import { useState } from 'react'
import './App.css'
import BillSplitCalculate from './components/BillSplitCalculate'
import BillSplitResult from './components/BillSplitResult'

function App() {

   const [data, setData] = useState({
    billAmount: "",
    tipPercentage: "",
    numOfPeople: ""
   });

  return (
    <>
    <div className='bill-splitter-container'>
      <BillSplitCalculate setData={setData} forDataReset={setData}/>
      <BillSplitResult result={data} forReset={setData}/>
    </div>
    </>
  )
}

export default App
