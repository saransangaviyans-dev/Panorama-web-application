import { useEffect, useState } from "react";
import axios from "axios";
import Hero from "./components/Hero";
import UploadCard from "./components/UploadCard";
import ResultCard from "./components/ResultCard";
import Footer from "./components/Footer";

function App() {
  const [files, setFiles] = useState([]);
  // const [history, setHistory] = useState([]);
  // //console.log(files);
  // console.log(history);

  // useEffect(() => {
  //   const fetchHistory = async () => {
  //     try {
  //       const response = await axios.get("http://127.0.0.1:5000/api/history");

  //       setHistory(response.data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   fetchHistory();
  // }, []);

  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [imagesUsed, setImagesUsed] = useState(0);
  const [executionTime, setExecutionTime] = useState(0);

  const removeFile = (indexToRemove) => {
    setFiles(files.filter((_, index) => index !== indexToRemove));
  };

  const handleUpload = async () => {
    setImageUrl("");
    setError("");

    if (files.length < 2) {
      setError("Select at least 2 images");
      return;
    }

    setLoading(true);

    try {
      const formData = new FormData();

      for (const file of files) {
        formData.append("images", file);
      }

      const response = await axios.post(
        "http://localhost:5000/api/stitch",
        formData,
      );

      if (response.data.status === "error") {
        setError(response.data.message);
        return;
      }

      setImageUrl(response.data.image_url);
      setImagesUsed(response.data.images_used);
      setExecutionTime(response.data.execution_time);
    } catch (err) {
      setError("Failed to connect to the stitching server. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-5xl mx-auto px-6">
        <Hero />
        <UploadCard
          files={files}
          setFiles={setFiles}
          loading={loading}
          error={error}
          handleUpload={handleUpload}
          removeFile={removeFile}
        />
        <ResultCard
          imageUrl={imageUrl}
          imagesUsed={imagesUsed}
          executionTime={executionTime}
        />

        <Footer />
      </div>
    </div>
  );
}

export default App;
