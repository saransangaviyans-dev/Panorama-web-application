function Footer() {
  return (
    <footer className="border-t border-slate-800 mt-10">
      <div className="max-w-6xl mx-auto px-6 py-8 text-center">
        <h3 className="text-xl font-bold text-white">Panorama Studio</h3>

        <p className="text-slate-400 text-sm mt-2">
          Computer vision powered panorama stitching.
        </p>

        <p className="text-slate-500 text-sm mt-4">
          Built with React • Express • FastAPI • OpenCV
        </p>

        <p className="text-slate-600 text-xs mt-4">
          © 2026 Panorama Studio. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
