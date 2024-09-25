import { useState } from "react";
import axios from "axios";
import "./SignIn.css";
const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async () => {
    try {
      const response = await axios.post("http://localhost:5000/auth/login", {
        email,
        password,
      });
      
      console.log("User signed in:", response.data);
    } catch (error) {
      console.error("Sign-In error", error);
    }
  };

  return (
    <div id="divContainer">
      <div id="formContainer"> 
        <h2 id="text">Sign In</h2>
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
          <button onClick={handleSignIn}>Sign In</button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
