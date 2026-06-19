// -----------------------------------------------------------------------
// This component isn't set up to run as it isn't suitable to interact
// with the set up we already have
// It's here as code onyl example without live demo to show how to handle
// null - think of things like when a user is not logged in the user is null
// -----------------------------------------------------------------------

import "./index.css";
import { useEffect, useState } from "react";

type User = {
  name: string;
  age: number;
};

// Best not to leave useState hook parentheses empty cause undefined error
// <> to define type and then handle cases where it could be null
// example: user may not be logged in
function HandleNull() {
  const [user, setUser] = useState<User | null>(null);
  // Our boolean loading styate for Option Two
  const [loading, setLoading] = useState(true);

  // Set that state to false once user is logged in
  useEffect(() => {
    setUser({ name: "Ruth", age: 53 });
    setLoading(false);
  }, []);

  /*
Option One: make user optional by adding question maerk after property 
Gets time consuming and error prone if you miss doing it on bigger projects. 
Will run without the state for loading and useEffect above 
    return (
      <>
        {JSON.stringify(user?.name)}
      </>
      )
*/

  /* 
Option Two
Have a loading state that is a boolean wither true or false 
setLoading to false once user logged in 
check for the user with user && before user.name to avoid possibility of null
if the loading state is false and the user is not null then we can go ahead 
and display the user.name 
*/
  return(
  <>
  {!loading && user && user.name}
  </>
  )
}

export default HandleNull;
