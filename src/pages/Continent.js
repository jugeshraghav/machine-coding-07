import { useNavigate } from "react-router-dom";
import { TravelCard } from "../components/TravelCard";
import { useDataContext } from "../contexts/DataContext";
export const Continent = () => {
  const {
    state: { data },
  } = useDataContext();

  const navigate = useNavigate();
  return (
    <>
      <h1>Welcome to Trip Advisor</h1>
      <p>Top Continents for your next holiday.</p>
      <div className="continent-container">
        {data?.continents?.map((continent) => (
          <div
            key={continent?.id}
            onClick={() => navigate(`/country/${continent?.id}`)}
          >
            <TravelCard image={continent?.image} name={continent?.name} />
          </div>
        ))}
      </div>
    </>
  );
};
