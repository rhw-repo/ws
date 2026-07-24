/* Demonstration of default props pattern */

interface GreetingsProps {
  name?: string;
  message?: string;
}

const Greeting = ({ name = "Guest", message = "Hello" }: GreetingsProps) => {
  return (
    <h2>
      {" "}
      {message}, {name}
    </h2>
  );
};

export default Greeting;
