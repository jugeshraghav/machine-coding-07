import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="home-page">
        <div className="page-header">
          <h1>Welcome to Trip Advisor</h1>
          <p>Click on the button to see options</p>
          <button onClick={() => navigate("/continent")}>View</button>
        </div>
      </div>
    </>
  );
};
