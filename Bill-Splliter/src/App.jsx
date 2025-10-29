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
  
  const [resetFlag, setResetFlag] = useState(false);

  const handleReset = () => {
    setData({
      billAmount: "",
      tipPercentage: "",
      numOfPeople: ""
    });
    setResetFlag(prev => !prev); // Toggle reset flag to trigger reset
  };

  return (
    <>
    <div className='bill-splitter-container'>
      <BillSplitCalculate setData={setData} resetFlag={resetFlag}/>
      <BillSplitResult result={data} onReset={handleReset}/>
    </div>
    </>
  )
}

export default App
