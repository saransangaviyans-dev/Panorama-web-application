
import UploadArea from "./UploadArea";

import SelectedFiles from "./SelectedFiles";

import UploadButton from "./UploadButton";

function UploadCard({ files, setFiles, loading, error, handleUpload , removeFile }) {
  return (
    <div className="text-center bg-[#050816] border border-slate-800 rounded-3xl shadow-xl p-10 max-w-4xl mx-auto">
      <h2 className="mt-5 text-3xl font-bold text-white">Upload Images</h2>
      
      <UploadArea setFiles={setFiles} />
      <SelectedFiles files={files} removeFile={removeFile} />
      {error && <p>{error}</p>}
      <p className="mt-3 text-slate-400">
        Select at least two overlapping images to generate a panorama.
      </p>
      <UploadButton
        
        loading={loading}
        handleUpload={handleUpload}
      />
    </div>
  );
}

export default UploadCard;
