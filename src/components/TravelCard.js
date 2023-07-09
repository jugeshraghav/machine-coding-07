export const TravelCard = ({ image, name }) => {
  return (
    <>
      <div className="travel-card-container">
        <img src={image} alt={name}></img>
      </div>
    </>
  );
};
