import { useState } from "react";
import axios from "axios";
import "./SignIn.css";
const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async () => {
    try {
      const response = await axios.post("https://country-currency-gvnv.onrender.com/auth/register", {
        email,
        password,
        username,
      });
      console.log("User signed up:", response.data);
    } catch (error) {
      console.error("Sign-Up error", error);
    }
  };

  return (
    <div id="divContainer">
      <div id="formContainer" style={{    width:"450px"}}>
        <h2 id="text">Sign Up</h2>
        <input
          type="text"
          value={username}
          placeholder="Name"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div id="signInBtn">
          <button onClick={handleSignUp}>Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
