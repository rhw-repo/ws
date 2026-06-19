//import { useContext, useState } from "react";
//import { UserContext } from "./UserContextProvider";

export interface Props {
  name: string;
  age: number;
  isMarried: boolean;
  country: Countries;
}

export enum Countries {
  Brazil = "Brazil",
  France = "France",
  Spain = "Spain",
  Italy = "Italy",
}
export const User = (props: Props) => {
  // Infer type from false which implies boolean but better to be explicit with <arrows>
  // Union allows one thing or another - could be string or null

  /* const [userBio, setUserBio] = useState<string | null>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserBio(event.target.value);
  };*/

  // const { users, updateUser, addUser, deleteUser } = useContext(UserContext);

  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>This User {props.isMarried ? "is married" : "is single"}</p>
      <p>Country of Origin: {props.country}</p>

      {/*<p>
        {" "}
        {props.name} Bio: {!userBio ? "No Bio Available" : userBio}
      </p>
      <input onChange={handleChange} />*/}
    </div>
  );
};
