const BillSplitCalculate = () => {
  return (
    <div className="bill-split-calculate-container">
      <div className="bill-input">
        <p className="label">Bill</p>
        <div className="input-container">
          <span>₹</span>
          <input type="number" />
        </div>
      </div>
      <div className="bill-tip">
        <p className="label">Select Tip</p>
        <div className="select-tip-container">
          {
            [5, 10, 15, 25, 50, 75].map((tipPercentage, index) => {
              return <div className="tip-percentage" key={index}>{tipPercentage}%</div>
            })
          }
        </div>
      </div>
      <div className="bill-split-number">
        <p className="label">Number Of People</p>
        <div>
          <input type="number" placeholder="No of people" disabled/>
        </div>
      </div>
      <button className="generate-bill-btn">Generate Bill</button>
    </div>
  )
}

export default BillSplitCalculate