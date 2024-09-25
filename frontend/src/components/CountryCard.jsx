// import React, { useState } from "react";
// import "./CountryCard.css";

// const CountryCard = ({ country }) => {
//   const currencyCodes = Object.keys(country.currency);
//     const [favorite, setFavorite] = useState([]);
//     const handleFavorite = (e) => {
//         e.preventDefault();

//     }
//   return (
//     <div className="country-card">
//       <img src={country.flag} alt={`Flag of ${country.name}`} />
//       <h3>{country.name}</h3>
//       <p>Capital: {country.capital[0]}</p>

//       <div>
//         <h4>Currencies:</h4>
//         {currencyCodes.map((code, index) => (
//           <p key={index}>
//             {country.currency[code].name} ({country.currency[code].symbol})
//           </p>
//         ))}
//       </div>

//       <p>Languages: {Object.values(country.languages).join(", ")}</p>
//       <button onClick={handleFavorite} value={favorite}>Add To Favorite</button>
//     </div>
//   );
// };

// export default CountryCard;

import React, { useState } from "react";
import "./CountryCard.css";

const CountryCard = ({ country, onAddFavorite }) => {
  const currencyCodes = Object.keys(country.currency);

  const handleFavorite = (e) => {
    e.preventDefault();
    onAddFavorite(country);
  };

  return (
    <div className="country-card">
      <img src={country.flag} alt={`Flag of ${country.name}`} />
      <h3>{country.name}</h3>
      <p>Capital: {country.capital[0]}</p>

      <div>
        <h4>Currencies:</h4>
        {currencyCodes.map((code, index) => (
          <p key={index}>
            {country.currency[code].name} ({country.currency[code].symbol})
          </p>
        ))}
      </div>

      <p>Languages: {Object.values(country.languages).join(", ")}</p>
      <button onClick={handleFavorite}>Add To Favorite</button>
    </div>
  );
};

export default CountryCard;
