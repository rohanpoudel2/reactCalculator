import './display.css';

const Display = ({ result }) => {
  return (
    <div>
      <input type="text" value={result} readOnly />
    </div>
  )
}

export default Display