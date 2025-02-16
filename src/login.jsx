import { useState, useEffect } from "react";
import { useGoogleLogin, googleLogout } from "@react-oauth/google";
import axios from "axios";

const Login = () => {
  const [user, setUser] = useState<any>(null);
  const [profile, setProfile] = useState<any>(null);

  const login = useGoogleLogin({
    onSuccess: (response) => setUser(response),
    onError: (error) => console.error("Login Failed:", error),
  });

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
      <h2>Login with Google</h2>
      {!profile ? (
        <button onClick={() => login()} className="google-login-btn">
          Sign in with Google
        </button>
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