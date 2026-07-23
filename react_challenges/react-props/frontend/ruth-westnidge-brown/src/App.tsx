import './App.css'
import Welcome from './Welcome';
import Button from './Button';
function App() {


  return (
    <div>
      <h1>Codevolution React Course</h1>
      <Welcome name="Bruce" alias="Batman"/>
      <Welcome name="Clark" alias="Superman"/>
      <Welcome name="Diana" alias="Wonder Woman"/>
      <Button />
    </div>
     
  )
}

export default App
