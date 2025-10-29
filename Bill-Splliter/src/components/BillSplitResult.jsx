const BillSplitResult = ({result}) => {

  const calulateFinalTipAmount = (parseInt(result?.billAmount) / 100) * parseInt(result?.tipPercentage);
  const calculateFinalTotalAmount = parseInt(result?.billAmount) + calulateFinalTipAmount;
  const calculateEachPersonBillAmount = calculateFinalTotalAmount / parseInt(result?.numOfPeople);


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
      <button className="reset-btn">Reset</button>
    </div>
  )
}

export default BillSplitResult