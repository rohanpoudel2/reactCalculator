import './button.css';

const Button = ({ value, functionname }) => {
  return (
    <div>
      <button name={value} onClick={functionname}>{value}</button>
    </div>
  )
}

export default Button