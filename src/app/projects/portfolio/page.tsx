import Link from "next/link";

export default function PortfolioCaseStudy() {
  return (
    <main className="min-h-screen bg-[#0f0f0f] text-white">
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold text-[#00ff9d]">Portfolio Website</h1>
        <p className="opacity-80 mt-3 max-w-2xl">
          This site you are viewing: Next.js (App Router) + Tailwind, deployed on Vercel with
          GitHub-based CI. Responsive hero, projects grid, and case-study pages.
        </p>

        <div className="mt-6 flex gap-3">
          <a
            href="https://github.com/ducatiman007/manoj-portfolio"
            target="_blank"
            className="px-4 py-2 rounded-xl border border-white/20"
          >
            GitHub
          </a>

          <Link
            href="/"
            className="px-4 py-2 rounded-xl bg-[#00ff9d] text-black font-medium"
          >
            Live Site
          </Link>
        </div>
      </section>
    </main>
  );
}
