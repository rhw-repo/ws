import "./index.css";

type CardProps = {
 user: User
}

type User = {
    name: string
    age: number
}

export default function Cards({ user }: CardProps) {
  return (
    <div>
      <div>{JSON.stringify(user)}</div>
    </div>
  );
}
