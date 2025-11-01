import { useState, useEffect } from "react"

const BillSplitCalculate = ({setData, resetFlag}) => {
  const [billAmount, setBillAmount] = useState(null);
  const [tipAmount, setTipAmount] = useState(null);
  const [numOfPeople, setNumOfPeople] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);
  const [isDisabled, setIsDisabled] = useState(true);

  // Effect to handle reset
  useEffect(() => {
    const resetForm = () => {
      setBillAmount(null);
      setTipAmount(null);
      setNumOfPeople(null);
      setActiveIndex(null);
      setIsDisabled(true);
      
      // Reset input values
      const inputs = document.querySelectorAll('input[type="number"]');
      inputs.forEach(input => input.value = '');
    };

    resetForm();
  }, [resetFlag]); // This will trigger whenever resetFlag changes

  const handleBillAmountInput = (e) => {
    if (e.target.value == "") {
      setBillAmount(null);
      setTipAmount(null);
      setNumOfPeople(null);
    } else {
      setBillAmount(e.target.value);
      setIsDisabled(false);
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
      }
    }
  }


  const handleNumOfPeople = (e) => {
    setNumOfPeople(parseInt(e.target.value))
  }

  const handleGenerateBill = () => {
    setData({
      billAmount: billAmount,
      tipPercentage: tipAmount,
      numOfPeople: numOfPeople
    })

  }


  return (
    <div className="bill-split-calculate-container">
      <div className="bill-input">
        <p className="label">Bill</p>
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
              return <div className={`tip-percentage ${(billAmount && activeIndex === index) ? "true" : ""}`} onClick={(event) => handleTipPercentage(event, index)} key={index}>
                <b>{tipPercentage}</b>%
              </div>
            })
          }
        </div>
      </div>
      <div className={`bill-split-number ${(billAmount && billAmount.length !== 0) ? "active" : ""}`}>
        <p className="label">Number Of People</p>
        <div>
          <input type="number" placeholder="No of people" disabled={isDisabled} onChange={handleNumOfPeople} />
        </div>
      </div>
      <button className={`generate-bill-btn ${numOfPeople ? "active" : ""}`} onClick={handleGenerateBill}>Generate Bill</button>
    </div>
  )
}

export default BillSplitCalculate