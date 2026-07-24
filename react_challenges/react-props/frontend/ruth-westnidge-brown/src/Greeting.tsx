/* Demonstration of default props pattern */

// Default value only used when prop missing or pass undefined
// If pass null or 0, default value will NOT be used!

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
