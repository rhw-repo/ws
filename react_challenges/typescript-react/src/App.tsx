import "./App.css";
import { User, Countries } from "./User";
import { UserProvider } from "./UserContextProvider";

function App() {
  return (
    <UserProvider>
      <User
        name={"Pedro"}
        age={22}
        isMarried={false}
        country={Countries.Brazil}
      />
      <User
        name={"Colin"}
        age={24}
        isMarried={false}
        country={Countries.Italy}
      />
    </UserProvider>
  );
}

export default App;
