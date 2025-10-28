const BillSplitResult = () => {
  return (
    <div className="bill-split-result-container">
      <div>
        <div className="tip-amount-container">
          <p className="big-text">Tip Amount</p>
          <p></p>
        </div>
        <div className="total-amount-container">
          <p className="big-text">Total</p>
          <p></p>
        </div>
        <div className="bill-each-person-container">
          <p className="big-text">Each Person Bill</p>
          <p></p>
        </div>
      </div>
      <button className="reset-btn">Reset</button>
    </div>
  )
}

export default BillSplitResult