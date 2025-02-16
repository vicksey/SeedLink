// import React, { useState } from "react";

// const API_BASE_URL = "http://localhost:4100";

// const Upload = () => {
//   const [file, setFile] = useState(null);
//   const [result, setResult] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const handleFileChange = (event) => {
//     setFile(event.target.files[0]);
//   };

//   const handleUpload = async () => {
//     if (!file) return;

//     const formData = new FormData();
//     formData.append("image", file);

//     setLoading(true);
//     setResult(null);

//     try {
//       const response = await fetch(`${API_BASE_URL}/api/analyze-plant`, {
//         method: "POST",
//         body: formData,
//       });

//       const data = await response.json();
//       setResult(data);
//     } catch (error) {
//       console.error("Error uploading image:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="upload-container">
//       <h2>Upload a Plant Image</h2>
//       <input type="file" onChange={handleFileChange} />
//       <button onClick={handleUpload} disabled={loading}>
//         {loading ? "Analyzing..." : "Upload & Analyze"}
//       </button>
//       {result && (
//         <div>
//           <h3>Result: {result.result}</h3>
//           <p>Confidence: {result.confidence}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Upload;

import React, { useState } from "react";
import "./Upload.css"; // Ensure the CSS is linked

const Upload = () => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState({
    result: "Sample Plant Type",
    confidence: "85%",
  });

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  return (
    <div className="upload-container">
      <h2 className="upload-title">Upload a Plant Image</h2>
      <p className="upload-description">
        Select an image to analyze and identify the plant type.
      </p>

      {/* File Input */}
      <input 
        type="file" 
        onChange={handleFileChange} 
        className="upload-input"
        accept="image/*"
      />

      {/* Upload Button (Disabled when loading) */}
      <button className="upload-button" disabled={loading}>
        {loading ? "Analyzing..." : "Upload & Analyze"}
      </button>

      {/* Placeholder Image Preview */}
      {file && (
        <img 
          src={URL.createObjectURL(file)} 
          alt="Preview" 
          className="preview-image" 
        />
      )}

      {/* Result Display */}
      {result && result.result && (
        <div className="result-container">
          <h3>Result: {result.result}</h3>
          <p>Confidence: {result.confidence}</p>
        </div>
      )}
    </div>
  );
};

export default Upload;
