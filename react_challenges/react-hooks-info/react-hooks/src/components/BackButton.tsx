import { useNavigate } from "react-router-dom";

const BackButton: React.FC = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };

  return (
    <button onClick={handleClick} className="back-button">
      Back to Home
    </button>
  );
};

export default BackButton;
