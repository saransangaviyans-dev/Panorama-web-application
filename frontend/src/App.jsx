import { useState } from "react";
import axios from "axios";

function App() {
  const [files, setFiles] = useState([]);
  //console.log(files);

  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

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
    } catch (err) {
      setError("Failed to connect to the stitching server. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Panorama stitching Application</h1>
      <input
        type="file"
        multiple
        onChange={(e) => {
          setFiles([...e.target.files]);
        }}
      />
      <p>selected Files : {files.length}</p>
      <button onClick={handleUpload} disabled={loading}>
        {loading ? "Generating..." : "Stitch Images"}
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {imageUrl && <img src={imageUrl} alt="Panorama" width="800" />}
    </div>
  );
}

export default App;
