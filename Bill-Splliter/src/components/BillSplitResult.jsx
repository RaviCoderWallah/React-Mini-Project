const BillSplitResult = ({ result, forReset }) => {

  let calulateFinalTipAmount;
  let calculateFinalTotalAmount;
  let calculateEachPersonBillAmount;


  if (result.billAmount && result.tipPercentage && result.numOfPeople) {
    calulateFinalTipAmount = (parseInt(result?.billAmount) / 100) * parseInt(result?.tipPercentage);
    calculateFinalTotalAmount = parseInt(result?.billAmount) + calulateFinalTipAmount;
    calculateEachPersonBillAmount = calculateFinalTotalAmount / parseInt(result?.numOfPeople);
  } else {
    calulateFinalTipAmount = 0;
    calculateFinalTotalAmount = 0;
    calculateEachPersonBillAmount = 0;
  }

  const handleResetButton = () => {
    forReset({
      billAmount: "",
      tipPercentage: "",
      numOfPeople: ""
    })
  }


  return (
    <div className="bill-split-result-container">
      <div>
        <div className="tip-amount-container">
          <p className="big-text">Tip Amount</p>
          <p>₹{calulateFinalTipAmount.toFixed(2)}</p>
        </div>
        <div className="total-amount-container">
          <p className="big-text">Total</p>
          <p>₹{calculateFinalTotalAmount.toFixed(2)}</p>
        </div>
        <div className="bill-each-person-container">
          <p className="big-text">Each Person Bill</p>
          <p>₹{calculateEachPersonBillAmount.toFixed(2)}</p>
        </div>
      </div>
      <button className="reset-btn" onClick={handleResetButton}>Reset</button>
    </div>
  )
}

export default BillSplitResult