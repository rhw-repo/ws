import { Link } from "react-router-dom";

interface CardProps {
  title: string;
  description: string;
  linkTo: string;
}

const Card: React.FC<CardProps> = ({ title, description, linkTo }) => (
  <Link to={linkTo} className="card">
    <h2>{title}</h2>
    <p>{description}</p>
  </Link>
);

const cardData: CardProps[] = [
  {
    title: "useEffect Demo",
    description: "See how useEffect works in React.",
    linkTo: "/use-effect",
  },
  {
    title: "useCallback Demo",
    description: "See how useCallback works in React.",
    linkTo: "/use-callback",
  },
];

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <h1>React Hooks</h1>
      <div className="card-grid">
        {cardData.map(({ title, description, linkTo }) => (
          <Card
            key={linkTo}
            title={title}
            description={description}
            linkTo={linkTo}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
