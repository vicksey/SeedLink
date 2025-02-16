import Navbar from "./navcomp/navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Dashboard from "./Dashboard";
import Upload from "./Upload";
import Community from "./Community";
import Login from "./login";


function App() {
  return (
    <>
      <Navbar /> {/* ✅ Navbar is always visible */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/community" element={<Community />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
