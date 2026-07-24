import { UserInfo } from "./UserInfo";
import type { UserInfoProps } from "./UserInfo";

export const UserCard = (props: UserInfoProps) => {
  return (
    <div>
      <h2>User Details</h2>
      <UserInfo {...props} />
    </div>
  );
};
