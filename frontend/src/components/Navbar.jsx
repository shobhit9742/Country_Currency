// import { Link } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <nav>
//       <ul>
//         <li>
//           <Link to="/">Home</Link>
//         </li>
//         <li>
//           <Link to="/favorites">Favorites</Link>
//         </li>
//         <li>
//           <Link to="/signin">Sign In</Link>
//         </li>
//         <li>
//           <Link to="/signup">Sign Up</Link>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;

import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="logo">
                    <Link to="/">CountryApp</Link>
                </div>
                <ul className="nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/favorites">Favorites</Link></li>
                    <li><Link to="/signin">Sign In</Link></li>
                    <li><Link to="/signup">Sign Up</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
