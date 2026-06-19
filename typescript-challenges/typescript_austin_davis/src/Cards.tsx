import "./index.css";

interface CardsProps {
  text: string;
  count?: number;
};

export default function Cards({ text, count }: CardsProps): React.JSX.Element {

  return (
    <div>
      <span>{text}{count}</span>
    </div>
  );
}

