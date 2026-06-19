import { useState, useRef, useContext } from "react";
import "./App.css";
import Cards from "./Cards.tsx";
import CardsTwo from "./CardsTwo.tsx";
import CountCard from "./CountCard.tsx";
import AlertMessageCard from "./AlertMessageCard.tsx";
import Card from "./Card.tsx";
import { useFetch } from "./useFetch.tsx";





type ContextType = {
  user: string | null
  isLoggedIn: boolean
  logIn: () => void
  logOut: () => void
}
const MyContext = createContext<ContextType | null>(null)

   type User = {
      name: string | null
      age: number
    }

    type BlogPost = {
      title: string,
      description: string,
      posted: Date
    }

function App() {
  const handleAlert = (message: string) => {
    alert(message);
  };

  const [count, setCount] = useState(0);

  const users = [
    { name: "Billy Bob", age: 95 },
    { name: "Ben", age: 55 },
    { name: "Jerry", age: 45 },
  ];

  //----------------------------------------------------------
  // Typing Events in React with TS
  //-----------------------------------------------------------
  // To find the type for the e (indicates the event) 
  // Go to where the function is called and hover over the e 
  // You should see the type and can copy paste it for use in the function
  // (parameter) e: React.MouseEvent<HTMLButtonElement, MouseEvent>

  //-----------------------------------------------------------------------
  // disable checking for one function to allow for unused e 
  //------------------------------------------------------------------------
  // @ts-expect-error: S6133
// eslint-disable-next-line @typescript-eslint/no-unused-vars
  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
        alert("You clicked on a button that called a hanldeclick event handler function");
  }
  // @ts-expect-error: S6133
// eslint-disable-next-line @typescript-eslint/no-unused-vars
  function handleChange(e: React.ChangeEvent<HTMLInputElement>){
    alert("You clicked in an input field that called a handleChange event handler function");
  }

  //----------------------------------------------------------
  // useState with Typescript:
  //----------------------------------------------------------
  // sometimes its necessary to allow the child
  // component to alter te state of its child component
  // hover over the state setter and copy the type from there to pass
  // into the type when you define it in the component CountCard

  
   //----------------------------------------------------------
   // As const - ARRAYS AND OBJECTS BECOME READ ONLY
    //----------------------------------------------------------
    /* Look how desite the array being a const, you can reassign the
    array values without error -
    const numbers = [1, 2, 3]
    numbers[1] = 5 //won't throw error when reassign element in position
    1 in array from 2 to 5
    If you want a read only array, React has as const 
     */
    // Now cannot be reasigned, is read only array so [1] has error 
    const numbers = [1, 2, 3] as const
    numbers[1] = 5 
    // Same deal with objects: 
    const myObject = {
      age: 46,
      score: 12
    } as const
    // error line under age
    myObject.age = 9


    //----------------------------------------------------------
    // useRef
    //----------------------------------------------------------
    /* Just find the element type the ref refers to by hovering over it 
    wherever it is used in the return. May nt always be necessary to provide 
    a type with a ref
     */
const myRef = useRef<HTMLButtonElement>(null)
const myRef2 = useRef<HTMLSpanElement>(null)


    //----------------------------------------------------------
    // Generics
    //----------------------------------------------------------
    /* Passing the type here because we have a function where we don't know
    the data type that will be returned when it's used so we do it as it's used
    We can specify it here because our componet useFetch knows to expect a type
    to be passed to it due to including the <T> 'placeholder'
    Best practice to use them even if it would run wihtout them fot type saftey
    */
// won't run, mock APi in useFetch just to show code and how it works 
 const fetcheduser = useFetch<User>("blahblahblah")
 const blogPost = useFetch<BlogPost>("blahblahblah")

   //----------------------------------------------------------
   // Typing Contexts
    //----------------------------------------------------------
    /*
    1. Create ContextType 
    2. 
     */

    const [user, setUser] = useState<string | null>(null)
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    function logIn() {
      setIsLoggedIn(true)
    }

    function logOut() {
      setIsLoggedIn(false)
    }

    const value: ContextType = {user, isLoggedIn, logIn, logOut}

  return (
    <>
      <h1>Learn TypeScript With React</h1>

      <button onClick={handleClick}>
        Click Me!
      </button>

      <input onChange={handleChange}/>

      <button ref={myRef}>
        Click Me!
      </button>
      
      <span ref={myRef2}>
        Click Me!
      </span>
      { /* map statements don't need to be explicilty typed TS infers it relates to one instance */ }
      {users.map(user => (
      <Card user={user} />
      ))}

      <CardsTwo><span>I'm children!</span></CardsTwo>

      <CountCard setCount={setCount} />

      <Cards text={"oh hai "} />

      <AlertMessageCard alertMessage={handleAlert} />

      <MyContext.Provider value={value}>
      <ChildComponent />
      </MyContext.Provider>
    </>
  );
}

// doesn'r run just for demonstrating code and how it works for Typing Contexts
function ChildComponent() {
  const contextData = useContext(MyContext)
  return (
    <>
    {contextData && JSON.stringify(contextData)}
    </>
  )
}

export default App;
