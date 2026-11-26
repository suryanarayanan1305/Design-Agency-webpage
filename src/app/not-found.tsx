import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-6 text-center">
      <span className="font-mono text-xs uppercase px-3 py-1 rounded bg-[#FF5733]/20 text-[#FF5733] border border-[#FF5733]/30 mb-4">
        Error 404 / Studio Archive
      </span>
      <h1 className="font-display text-5xl sm:text-7xl font-bold tracking-tight text-[#121212] mb-4">
        Page Not Found
      </h1>
      <p className="text-[#73736C] max-w-md mx-auto mb-8 text-sm sm:text-base">
        The architectural artifact or case study you requested does not exist or has been relocated within the FORMORA archives.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#121212] text-[#F2EFE8] text-xs font-semibold uppercase tracking-wider hover:bg-[#FF5733] transition-colors"
      >
        <ArrowLeft className="w-4 h-4" /> Return to Homepage
      </Link>
    </div>
  );
}
