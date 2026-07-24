import { UserInfo } from "./UserInfo";
import type { UserInfoProps } from "./UserInfo";

export const UserCard = ({ name, age, city, email }: UserInfoProps) => {
  return (
    <div>
      <h2>User Details</h2>
      <UserInfo name={name} age={age} email={email} city={city} />
    </div>
  );
};
