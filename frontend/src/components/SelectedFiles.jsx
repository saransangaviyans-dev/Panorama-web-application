import { Image, X } from "lucide-react";

function formatFileSize(bytes) {
  if (bytes < 1024) {
    return `${bytes} Bytes`;
  }

  if (bytes < 1024 * 1024) {
    return `${(bytes / 1024).toFixed(2)} KB`;
  }

  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

function SelectedFiles({ files, removeFile }) {
  if (files.length === 0) {
    return <p className="mt-6 text-slate-400">No files selected</p>;
  }

  return (
    <div className="mt-6 space-y-3">
      {files.map((file, index) => (
        <div
          key={index}
          className="
          flex
          items-center
          justify-between
          bg-slate-900
          border
          border-slate-800
          rounded-xl
          p-4
          "
        >
          <div className="flex items-center gap-4">
            <Image className="text-purple-500" size={28} />

            <div>
              <h3 className="text-white font-medium">{file.name}</h3>

              <p className="text-sm text-slate-400">
                {file.type.replace("image/", "").toUpperCase()}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-slate-400 text-sm">
              {formatFileSize(file.size)}
            </span>

            <button
              onClick={() => removeFile(index)}
              className="
              text-slate-400
              hover:text-red-500
              transition
              "
            >
              <X size={18} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SelectedFiles;
