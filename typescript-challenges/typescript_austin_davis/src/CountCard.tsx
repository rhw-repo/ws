import "./index.css";

type CardProps = {
  setCount: React.Dispatch<React.SetStateAction<number>> // can only be a REact setter function now
}

function CountCard({setCount}: CardProps): React.JSX.Element{
  return (
    <div>
      <button onClick={() => setCount((count:number) => count +1)}> Click Me! </button>
    </div>
  )
}

export default CountCard