import { useParams } from "react-router-dom";
import { useDataContext } from "../contexts/DataContext";
export const DestinationDetail = () => {
  const {
    state: { data },
  } = useDataContext();

  const { continentId, countryId, desId } = useParams();
  const currentContinent = data?.continents?.find(
    ({ id }) => id === Number(continentId)
  );

  const currentCountry = currentContinent?.countries?.find(
    ({ id }) => id === Number(countryId)
  );
  const destinations = currentCountry?.destinations;

  const currentDestination = destinations?.find(
    ({ id }) => id === Number(desId)
  );
  const {
    name,
    description,
    image,
    ratings,
    reviews,
    location,
    openingHours,
    ticketPrice,
    website,
  } = currentDestination;

  return (
    <>
      <h1>{name}</h1>
      <div className="des-detail-container">
        <img src={image} alt={name} />
        <div className="des-detail-content-container">
          <p>
            <span className="des-detail-content-heading">Description:</span>{" "}
            {description}
          </p>
          <p>
            <span className="des-detail-content-heading">Rating:</span>{" "}
            {ratings}
          </p>
          <p>
            <span className="des-detail-content-heading">Reviews:</span>{" "}
            {reviews}
          </p>
          <p>
            <span className="des-detail-content-heading">Location:</span>{" "}
            {location}
          </p>
          <p>
            <span className="des-detail-content-heading">Opening Hours:</span>{" "}
            {openingHours}
          </p>
          <p>
            <span className="des-detail-content-heading">Ticket Price:</span>{" "}
            {ticketPrice}
          </p>
          <p>
            <a href={website} target="_blank" rel="noreferrer">
              Website
            </a>
          </p>
        </div>
      </div>
    </>
  );
};
