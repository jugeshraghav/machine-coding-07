import { useNavigate, useParams } from "react-router-dom";
import { useDataContext } from "../contexts/DataContext";
import { FaBackward } from "react-icons/fa";
export const DestinationDetail = () => {
  const {
    state: { data },
  } = useDataContext();
  const navigate = useNavigate();
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
      <div className="destination-detail-page">
        <div className="page-header">
          <h1>{name}</h1>
        </div>
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
      </div>
      <FaBackward className="back-btn" onClick={() => navigate(-1)} />
    </>
  );
};
