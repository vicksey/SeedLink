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










// import { useEffect } from "react";
// import "./Home.css";  


// import img1 from "./assets/check_name_1.jpg";
// import img2 from "../assets/images/image2.jpg";
// import img3 from "../assets/images/image3.jpg";
// import img4 from "../assets/images/image4.jpg";



// const Home = () => {
//   useEffect(() => {
//     document.title = "SeedLink - Home";
//   }, []);

//   return (
//     <div className="home-container">
//       <h1 className="home-title">SeedLink</h1>
//       <p className="home-description">
//         Help save endangered plants by planting seeds in your local area.
//       </p>


//       <h1 class="text-3xl font-bold underline">
//     Hello world!
//   </h1>

//       <div className="left-top-corner">Hello</div>
//     </div>






//   );
// };

// export default Home;









import React, { useState, useEffect } from "react";
import "./Home.css";  

// Import images
import img1 from "./assets/check_name_1.jpg";
import img2 from "./assets/flower_red.jpg";
import img3 from "./assets/grays_lily.jpg";
import img4 from "./assets/hellers_blazing_star.jpg";

const images = [img1, img2, img3, img4];

const Home = () => {
  const [visibleImages, setVisibleImages] = useState([]);

  // Change the document title when the component loads
  useEffect(() => {
    document.title = "SeedLink - Home";
  }, []);



  // Fades in  images one by one
  useEffect(() => {
    images.forEach((_, index) => {
      setTimeout(() => {
        setVisibleImages((prev) => [...prev, index]);
      }, index * 1000); 
    });
  }, []);

  return (
    <div className="home-container">
      {/* Title and Description */}
      <h1 className="home-title">SeedLink</h1>
      <p className="home-description">
        Help save endangered plants by planting seeds in your local area.
      </p>

      {/* Fade-in Image Grid */}
      <div className="image-grid">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Plant ${index + 1}`}
            className={`image ${visibleImages.includes(index) ? "visible" : ""}`}
          />
        ))}
      </div>

      {/* Extra Content */}
      <div className="left-top-corner">Hello</div>
    </div>
  );
};

export default Home;
