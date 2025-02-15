// import { useEffect } from "react";
// import "./Home.css"; 

// const Home = () => {
//   // Change the browser tab title
//     useEffect(() => {
//     document.title = "SeedLink - Home";
// }, []);

//     return (
//     <div id="tile"style={{ textAlign: "top"}}>
//         <h1>SeedLink</h1>
//         <p>Help save endangered plants by planting seeds in your local area.</p>
//     </div>
// );
// };

// export default Home;


import { useEffect } from "react";
import "./Home.css";  // ✅ Make sure this is imported

const Home = () => {
  useEffect(() => {
    document.title = "SeedLink - Home";
  }, []);

  return (
    <div className="home-container">
      <h1 className="home-title">SeedLink</h1>
      <p className="home-description">
        Help save endangered plants by planting seeds in your local area.
      </p>
    </div>
  );
};

export default Home;
