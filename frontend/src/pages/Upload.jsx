import Navbar from "../components/Navbar";
import { useState } from "react";

import axios from "axios";
import { useNavigate } from "react-router-dom";


function Upload() {
  const API_URL = import.meta.env.VITE_API_URL;
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate =useNavigate();


  const uploadReport = async () => {

  if (!file) {
    alert("Please select a PDF");
    return;
  }

  const formData = new FormData();

  formData.append("file", file);

  try {
    setLoading(true);
    const response = await axios.post(
      `${API_URL}/predict-report`,
      formData
    );

    localStorage.setItem(
      "prediction",
      JSON.stringify(response.data)
    );
    setLoading(false);
    navigate("/results");

  } catch (error) {
    setLoading(false);
  console.error("FULL ERROR:", error);

  if (error.response) {
    console.log(error.response.data);
    console.log(error.response.status);
  }

  alert("Upload failed");
}
};


 


  return (
    <>
        
      <Navbar />

      <div className="max-w-4xl mx-auto py-20">

        <h1 className="text-5xl font-bold text-center ">
          Upload Medical Report
        </h1>

        <p className="text-center mt-4 text-gray-500">
          Upload a PDF report for AI-powered CKD analysis
        </p>

        <div className="mt-12 border-2 border-dashed rounded-3xl p-12 text-center ">

          <input
            type="file"
            accept=".pdf"
            onChange={(e) =>
              setFile(e.target.files[0])
            }
          />

          {file && (
            <p className="mt-4">
              Selected: {file.name}
            </p>
          )}
        <button
            onClick={uploadReport}
            disabled={loading}
            className="mt-8 bg-blue-600 text-white px-8 py-4 rounded-2xl shadow-lg hover:bg-blue-700 transition"
            >
            {loading ? "Analyzing Report..." : "Analyze Report"}
        </button>

        </div>

      </div>
    </>
  );
}

export default Upload;