
const FormRow = ({type, name, label, required=false, listValues, onchange, defaultVal}) => {
  switch (type) {
      case 'select':
        return (
          <div className="form-row">
              <select id={name} name={name} className="form-select" required={required} placeholder={label} defaultValue={defaultVal || ''} onChange={onchange}>
              <option value='' disabled key={label}> {label} </option>
                {
                  listValues.map((val) => {
                    return (
                      <option value={val.value || val} key={val.value || val}> {val.title || val} </option>
                    )
                  })
                }
              </select>
          </div>
        )
        break;
    default:
      return (
        <div className="form-row">
            <input type={type} id={name} name={name} className="form-input" required={required} placeholder={label} defaultValue={defaultVal} onChange={onchange}></input>
        </div>
      )
  }
 
}
export default FormRow