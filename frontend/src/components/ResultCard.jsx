import { Download, Image as ImageIcon } from "lucide-react";

function ResultCard({ imageUrl, imagesUsed, executionTime }) {
  if (!imageUrl) {
    return null;
  }

  return (
    <section className="max-w-4xl mx-auto mt-10 mb-16">
      <div className="bg-[#050816] border border-slate-800 rounded-3xl p-8 shadow-xl">
        {/* Header */}
        <div className="text-center mb-6">
          <ImageIcon size={36} className="mx-auto text-purple-500 mb-3" />

          <h2 className="text-3xl font-bold text-white">Generated Panorama</h2>

          <p className="text-slate-400 mt-2">
            Your panorama has been generated successfully.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-slate-800">
          <img
            src={imageUrl}
            alt="Generated panorama"
            className="w-full max-h-[650px] object-contain block"
          />
        </div>

        <div className="grid grid-cols-2 gap-4 mt-6">
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 text-center">
            <p className="text-slate-400 text-sm">Images Used</p>

            <p className="text-white text-xl font-bold mt-1">{imagesUsed}</p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 text-center">
            <p className="text-slate-400 text-sm">Execution Time</p>

            <p className="text-white text-xl font-bold mt-1">
              {executionTime} s
            </p>
          </div>
        </div>

        <div className="mt-6">
          <a
            href={imageUrl}
            download
            className="
              flex
              items-center
              justify-center
              gap-2
              w-full
              bg-purple-600
              hover:bg-purple-700
              text-white
              font-semibold
              py-4
              rounded-xl
              transition-all
              duration-300
            "
          >
            <Download size={20} />
            Download Panorama
          </a>
        </div>
      </div>
    </section>
  );
}

export default ResultCard;
