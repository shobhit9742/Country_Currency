import { useState } from "react";

const CountryList = ({ countries }) => {
  const [sortOrder, setSortOrder] = useState("asc");

  const sortedCountries = [...countries].sort((a, b) => {
    return sortOrder === "asc"
      ? a.name.common.localeCompare(b.name.common)
      : b.name.common.localeCompare(a.name.common);
  });

  return (
    <div>
      <button
        onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
      >
        Sort {sortOrder === "asc" ? "Descending" : "Ascending"}
      </button>
      {sortedCountries.map((country) => (
        <div key={country.name.common}>
          <h3>{country.name.common}</h3>
          <img
            src={`https://flagsapi.com/${country.cca2}/shiny/64.png`}
            alt={country.name.common}
          />
        </div>
      ))}
    </div>
  );
};

export default CountryList;
