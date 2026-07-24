export interface UserInfoProps {
  name: string;
  age: number;
  city: string;
  email: string;
}

export const UserInfo = ({ name, age, city, email }: UserInfoProps) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>Age: {age}</p>
      <p>City {city}</p>
      <p>Email: {email}</p>
    </div>
  );
};
