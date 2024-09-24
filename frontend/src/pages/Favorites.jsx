import CountryList from "../components/CountryList";

const Favorites = () => {
  // Fetch favorite countries from the backend
  const favorites = []; // Replace with actual fetching logic

  return (
    <div>
      <h1>Your Favorite Countries</h1>
      <CountryList countries={favorites} />
    </div>
  );
};

export default Favorites;
