import { UploadCloud } from "lucide-react";

function UploadArea({ setFiles }) {
  const handleChange = (e) => {
    setFiles([...e.target.files]);
    console.log([...e.target.files]);
  };

  return (
    <label
      className=" group
mt-8
flex
flex-col
items-center
justify-center
w-full
h-72
border-2
border-dashed
border-purple-500
rounded-3xl

bg-[#0A0F1F]

cursor-pointer

transition-all
duration-300

hover:border-purple-400
hover:bg-purple-500/5
hover:scale-[1.01]
"
    >
      <UploadCloud
        size={64}
        className="
    text-purple-500
    transition-transform
    duration-300
    group-hover:scale-110
    "
      />
      <h3 className="mt-5 text-xl font-semibold text-white">
        Drop Images Here
      </h3>

      <p className="text-slate-400 mt-2">or click to browse your files</p>
      <p className="mt-3 text-sm text-slate-500">JPG • JPEG • PNG</p>
      <input type="file" multiple className="hidden" onChange={handleChange} />
    </label>
  );
}

export default UploadArea;
