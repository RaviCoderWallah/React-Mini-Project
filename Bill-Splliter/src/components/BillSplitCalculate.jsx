import { useState } from "react"

const BillSplitCalculate = () => {

  const [billAmount, setBillAmount] = useState(null);
  const [tipAmount, setTipAmount] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);

  const handleBillAmountInput = (e) => {
    if(e.target.value == ""){
      setBillAmount(null);
    }else{
      setBillAmount(e.target.value);
    }
  }


  const handleTipPercentage = (event, index) => {
    if (billAmount && billAmount.length !== 0) {
      if (activeIndex === index) {
        setActiveIndex(null);
      } else {
        const amount = parseInt(event.target.innerText);
        setTipAmount(amount);

        setActiveIndex(index);

        console.log(tipAmount);
      }
    }
  }


  return (
    <div className="bill-split-calculate-container">
      <div className="bill-input">
        <p className="label">Bill {billAmount}</p>
        <div className="input-container">
          <span>₹</span>
          <input type="number" onChange={handleBillAmountInput} />
        </div>
      </div>
      <div className="bill-tip">
        <p className="label">Select Tip</p>
        <div className={(billAmount && billAmount.length !== 0) ? "select-tip-container active" : "select-tip-container"}>
          {
            [5, 10, 15, 25, 50, 75].map((tipPercentage, index) => {
              return <div className={`tip-percentage ${(billAmount && activeIndex === index )? "true" : ""}`} onClick={(event) => handleTipPercentage(event, index)} key={index}>
                <b>{tipPercentage}</b>%
              </div>
            })
          }
        </div>
      </div>
      <div className="bill-split-number">
        <p className="label">Number Of People</p>
        <div>
          <input type="number" placeholder="No of people" disabled />
        </div>
      </div>
      <button className="generate-bill-btn">Generate Bill</button>
    </div>
  )
}

export default BillSplitCalculate