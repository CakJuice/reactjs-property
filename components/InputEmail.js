const InputEmail = (props) => {
  return (
    <div className="form-group">
      <label>{props.label}</label>
      <input type="email" className="form-control" value={props.value} onChange={props.onChange} />
    </div>
  )
}

export default InputEmail