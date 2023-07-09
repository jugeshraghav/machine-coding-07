import { useNavigate } from "react-router-dom";
import { TravelCard } from "../components/TravelCard";
import { useDataContext } from "../contexts/DataContext";
import { FaBackward } from "react-icons/fa";
export const Continent = () => {
  const {
    state: { data },
  } = useDataContext();

  const navigate = useNavigate();
  return (
    <>
      <div className="continent-page">
        <>
          <div className="page-header">
            <h1>Welcome to Trip Advisor</h1>
            <p>Top Continents for your next holiday.</p>
          </div>
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
      </div>
      <FaBackward className="back-btn" onClick={() => navigate(-1)} />
    </>
  );
};
