// import Home from "./Home";

// function App() {
//   return (
//     <div>
//       <Home />
//     </div>
//   );
// }

// export default App;



import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./navcomp/navbar";  // ✅ Import Navbar
import Home from "./Home";
import Dashboard from "./Dashboard";
import Community from "./Community";
import Login from "./login";

function App() {
  return (
    <Router>
      <div>
        <Navbar /> {/* ✅ Navbar is always visible */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/community" element={<Community />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
