const AlertBox = ({alertType, msg}) => {
  return (
    <div className={`alert alert-${alertType}`}>
        <p>{msg}</p>
    </div>
  )
}

export default AlertBox