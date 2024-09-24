import { useState } from 'react';
import axios from 'axios';

const Search = ({ onSearchComplete }) => {
    const [currencyCode, setCurrencyCode] = useState('');

    const handleSearch = async () => {
        const response = await axios.get(`http://localhost:5000/countries/${currencyCode}`);
        onSearchComplete(response.data);
    };

    return (
        <div>
            <input
                type="text"
                value={currencyCode}
                onChange={(e) => setCurrencyCode(e.target.value)}
                placeholder="Search by Currency Code"
            />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
};

export default Search;

// import { useState } from "react";
// import axios from "axios";

// const Search = ({ onSearchComplete }) => {
//   const [currencyCode, setCurrencyCode] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const handleSearch = async () => {
//     if (!currencyCode.trim()) {
//       setError("Please enter a valid currency code.");
//       return;
//     }
//     console.log(currencyCode);

//     setLoading(true);
//     setError(null);

//     try {
//       const response = await axios.get(
//         `http://localhost:5000/countries/${currencyCode}`
//       );
//       onSearchComplete(response.data);
//     } catch (error) {
//       setError("Failed to fetch data. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         value={currencyCode}
//         onChange={(e) => setCurrencyCode(e.target.value)}
//         placeholder="Search by Currency Code"
//       />
//       <button onClick={handleSearch} disabled={loading}>
//         {loading ? "Searching..." : "Search"}
//       </button>
//       {error && <p style={{ color: "red" }}>{error}</p>}
//     </div>
//   );
// };

// export default Search;
