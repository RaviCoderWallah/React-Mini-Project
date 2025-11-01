const BillSplitResult = ({ result, onReset }) => {
  let calulateFinalTipAmount = 0;
  let calculateFinalTotalAmount = 0;
  let calculateEachPersonBillAmount = 0;

  if (result.billAmount && result.tipPercentage && result.numOfPeople) {
    calulateFinalTipAmount = (parseFloat(result.billAmount) / 100) * parseFloat(result.tipPercentage);
    calculateFinalTotalAmount = parseFloat(result.billAmount) + calulateFinalTipAmount;
    calculateEachPersonBillAmount = calculateFinalTotalAmount / parseInt(result.numOfPeople);
  }

  const handleResetButton = () => {
    if (onReset) {
      onReset();
    }
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