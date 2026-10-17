import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#030303] text-white flex flex-col items-center justify-center p-6 text-center">
      <div className="w-16 h-16 rounded-2xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center mb-6">
        <span className="font-display font-extrabold text-2xl text-purple-400">404</span>
      </div>
      <h1 className="font-display font-black text-3xl sm:text-4xl text-white mb-3">
        Page Not Found
      </h1>
      <p className="max-w-md text-zinc-400 text-sm sm:text-base mb-8">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-sm hover:opacity-90 transition shadow-lg shadow-purple-500/25"
      >
        Return to Vega Home
      </Link>
    </div>
  );
}
