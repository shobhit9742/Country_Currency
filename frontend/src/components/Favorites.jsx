import { useEffect, useState } from "react";
import axios from "axios";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const response = await axios.get("https://country-currency-gvnv.onrender.com/favorite");
        setFavorites(response.data);
      } catch (error) {
        console.error("Error fetching favorites", error);
      }
    };
    fetchFavorites();
  }, []);

  return (
    <div>
      <h2>Your Favorite Countries</h2>
      <ul>
        {favorites.map((country) => (
          <li key={country.name.common}>{country.name.common}</li>
        ))}
      </ul>
    </div>
  );
};

export default Favorites;
