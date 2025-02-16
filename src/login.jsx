import { useState, useEffect } from "react";
import { useGoogleLogin, GoogleLogin, googleLogout } from "@react-oauth/google";
import axios from "axios";

const Login = () => {
  console.log("Login component mounted");

  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);

  const login = useGoogleLogin({
    flow: "implicit",  // Optional: Use implicit flow for client-side login
    ux_mode: "redirect", 
    redirect_uri: "http://localhost:5173/login",
    onSuccess: (response) => {
      console.log("✅ Google login success:", response);
      setUser(response);
    },
    onError: (error) => console.error("❌ Google Login Failed:", error),
  });

  useEffect(() => {
    login();
  }, []);

  useEffect(() => {
    if (user && user.access_token) {
      axios
        .get("https://www.googleapis.com/oauth2/v1/userinfo", {
          headers: {
            Authorization: `Bearer ${user.access_token}`,
            Accept: "application/json",
          },
        })
        .then((res) => {
          setProfile(res.data);
        })
        .catch((err) => console.error("Error fetching user profile:", err));
    }
  }, [user]);

  const logOut = () => {
    googleLogout();
    setProfile(null);
  };

  return (
    <div className="login-container">
      {!profile ? (
        <h2>Redirecting to Google Login...</h2> // ✅ No manual login button
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