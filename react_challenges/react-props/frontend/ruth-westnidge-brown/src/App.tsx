import './App.css'
import Welcome from './Welcome';
import Button from './Button';
import Product from './Product';

function App() {

  return (
    <div>
      <h1>Codevolution React Course</h1>
      <Product title="Gaming laptop" price={1299.99} inStock={true} categories={["Electronics", "Computers", "Gaming"]}/>
      <Welcome name="Bruce" alias="Batman"/>
      <Welcome name="Clark" alias="Superman"/>
      <Welcome name="Diana" alias="Wonder Woman"/>
      <Button text="Click Me" />
    </div>
     
  )
}

export default App
