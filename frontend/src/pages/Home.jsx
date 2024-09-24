import Search from "../components/Search";
import CountryList from "../components/CountryList";
import { useState } from "react";

const Home = () => {
  const [countries, setCountries] = useState([]);

  const handleSearchComplete = (data) => setCountries(data);

  return (
    <div>
      <h1>Welcome to Country Finder</h1>
      <Search onSearchComplete={handleSearchComplete} />
      <CountryList countries={countries} />
    </div>
  );
};

export default Home;
