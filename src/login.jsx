import { useState, useEffect, useContext } from "react";
import { useGoogleLogin, googleLogout } from "@react-oauth/google";
import axios from "axios";
import { UserContext } from "./context/userContext.jsx"; // Adjust the path as needed

const Login = () => {
  const { setUser } = useContext(UserContext); // Access the context
  const [profile, setProfile] = useState(null);

  const login = useGoogleLogin({
    flow: "implicit",
    ux_mode: "redirect",
    redirect_uri: "http://localhost:5173/login",
    onSuccess: (response) => {
      console.log("✅ Google login success:", response);
      fetchProfile(response.access_token);
    },
    onError: (error) => console.error("❌ Google Login Failed:", error),
  });

  useEffect(() => {
    login();
  }, []);

  const fetchProfile = (accessToken) => {
    axios
      .get("https://www.googleapis.com/oauth2/v1/userinfo", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          Accept: "application/json",
        },
      })
      .then((res) => {
        setProfile(res.data);
        setUser(res.data); // Save user data in context
      })
      .catch((err) => console.error("Error fetching user profile:", err));
  };

  const logOut = () => {
    googleLogout();
    setProfile(null);
    setUser(null); // Clear user data from context
  };

  return (
    <div className="login-container">
      {!profile ? (
        <h2>Redirecting to Google Login...</h2>
      ) : (
        <div className="profile">
          <img src={profile.picture} alt="User Profile" />
          <h3>Welcome, {profile.name}</h3>
          <p>Email: {profile.email}</p>
          <button onClick={logOut} className="logout-btn">
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default Login;
