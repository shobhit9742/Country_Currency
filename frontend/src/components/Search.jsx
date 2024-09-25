import React, { useState } from "react";
import axios from "axios";
import CountryCard from "./CountryCard";
import "./Search.css";

const Search = ({ onSearchComplete }) => {
  const [currencyCode, setCurrencyCode] = useState("");
  const [countries, setCountries] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const handleSearch = async () => {
    const lowercaseCurrencyCode = currencyCode.toLowerCase();
    const response = await axios.get(
      `http://localhost:5000/countries/${lowercaseCurrencyCode}`
    );
    onSearchComplete(response.data);
    setCountries(response.data);
  };

  const handleAddFavorite = async (country) => {
    try {
      const response = await axios.post("http://localhost:5000/favorite", {
        countryId: country.id,
      });

      if (response.status === 200) {
        setFavorites((prevFavorites) => [...prevFavorites, country]);
      } else {
        console.error("Failed to add favorite:", response.data.message);
      }
    } catch (error) {
      console.error("Error adding favorite:", error);
    }
  };

  return (
    <div>
      <div id="searchBox">
        <input
          type="text"
          value={currencyCode}
          onChange={(e) => setCurrencyCode(e.target.value)}
          placeholder="Search by Currency Code"
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      <div className="country-cards-container">
        {countries.map((country, index) => (
          <CountryCard
            key={index}
            country={country}
            onAddFavorite={handleAddFavorite}
          />
        ))}
      </div>

      <div className="favorites">
        <h3>Favorites</h3>
        {favorites.length === 0 ? (
          <p>No favorites added yet.</p>
        ) : (
          favorites.map((fav, index) => (
            <div key={index}>
              <h4>{fav.name}</h4>
              <p>Capital: {fav.capital[0]}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Search;
