import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { TravelCard } from "../components/TravelCard";
import { useDataContext } from "../contexts/DataContext";
export const Destination = () => {
  const {
    state: { data },
  } = useDataContext();

  const navigate = useNavigate();
  const { continentId, countryId } = useParams();
  const currentContinent = data?.continents?.find(
    ({ id }) => id === Number(continentId)
  );

  const currentCountry = currentContinent?.countries?.find(
    ({ id }) => id === Number(countryId)
  );
  const destinations = currentCountry?.destinations;
  return (
    <>
      <>
        <p>Top Destinations in {currentCountry?.name} for your next holiday.</p>
        <div className="continent-container">
          {destinations?.map((destination) => (
            <div
              key={destination?.id}
              onClick={() =>
                navigate(
                  `/destinationDet/${currentContinent?.id}/${currentCountry?.id}/${destination?.id}`
                )
              }
            >
              <TravelCard image={destination?.image} name={destination?.name} />
            </div>
          ))}
        </div>
      </>
    </>
  );
};
