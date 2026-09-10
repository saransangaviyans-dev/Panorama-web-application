function UploadButton({ loading, handleUpload }) {
  return (
    <button
      onClick={handleUpload}
      className="
mt-8
w-full
bg-purple-600
hover:bg-purple-700
transition-all
duration-300
text-white
font-semibold
py-3
rounded-xl
"
    >
      {loading ? "Generating..." : "Generate Panorama"}
    </button>
  );
}

export default UploadButton;
