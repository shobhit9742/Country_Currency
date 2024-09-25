// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Search from "./components/Search";
// import Navbar from "./components/Navbar";
// import SignIn from "./components/SignIn";
// import SignUp from "./components/SignUp";
// import Favorites from "./components/Favorites";
// // import './App.css'

// const App = () => {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Search />} />
//         <Route path="/favorites" element={<Favorites />} />
//         <Route path="/signin" element={<SignIn />} />
//         <Route path="/signup" element={<SignUp />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;


import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Search from "./components/Search";
import Navbar from "./components/Navbar";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Favorites from "./components/Favorites";

const App = () => {
  const [results, setResults] = useState([]);

  // This function will handle the completion of the search
  const handleSearchComplete = (data) => {
    setResults(data); // Store the search results in state
    console.log("Search results:", data); // You can log the results to check them
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Search onSearchComplete={handleSearchComplete} />} />
        <Route path="/favorites" element={<Favorites results={results} />} /> {/* Pass results to Favorites if needed */}
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
};

export default App;
