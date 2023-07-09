import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { TravelCard } from "../components/TravelCard";
import { useDataContext } from "../contexts/DataContext";
import { FaBackward } from "react-icons/fa";

export const Country = () => {
  const {
    state: { data },
  } = useDataContext();

  const navigate = useNavigate();
  const { continentId } = useParams();
  const currentContinent = data?.continents?.find(
    ({ id }) => id === Number(continentId)
  );

  const countries = currentContinent?.countries;
  return (
    <>
      <p>Top Countries in {currentContinent?.name} for your next holiday.</p>
      <div className="continent-container">
        {countries?.map((country) => (
          <div
            key={country?.id}
            onClick={() =>
              navigate(`/destination/${currentContinent?.id}/${country?.id}`)
            }
          >
            <TravelCard image={country?.image} name={country?.name} />
          </div>
        ))}
      </div>
      <FaBackward className="back-btn" />
    </>
  );
};
