import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0f0f0f] text-white">
      {/* Top Nav */}
      <header className="max-w-5xl mx-auto px-6 py-5 flex items-center justify-between">
        <div className="text-lg font-semibold tracking-wide">Manoj • Portfolio</div>
        <nav className="flex gap-5 text-sm">
          <a href="#projects" className="opacity-80 hover:opacity-100">Projects</a>
          <a href="#about" className="opacity-80 hover:opacity-100">About</a>
          <a href="#contact" className="opacity-80 hover:opacity-100">Contact</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-72 w-[42rem] rounded-full blur-3xl"
             style={{background:"radial-gradient(closest-side, rgba(0,255,157,0.25), rgba(0,0,0,0))"}} />
        <div className="max-w-5xl mx-auto px-6 py-16 grid md:grid-cols-[220px_1fr] gap-10 items-center">
          <div className="flex justify-center">
            <Image
              src="/int.jpg"
              alt="Manoj profile"
              width={200}
              height={200}
              priority
              className="rounded-full ring-2 ring-[#00ff9d] shadow-xl"
            />
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-[#00ff9d]">Manoj Kumar S</span>
            </h1>
            <p className="mt-3 text-lg opacity-90">
              Full-Stack Developer (React • Next.js) & Fitness Creator 💪
            </p>
            <p className="mt-1 text-sm opacity-70">
              Building clean, modern web apps. Deploying fast on Vercel.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#projects" className="px-4 py-2 rounded-xl bg-[#00ff9d] text-black font-medium hover:opacity-90">
                View Projects
              </a>
              <a href="#contact" className="px-4 py-2 rounded-xl border border-white/20 hover:bg-white/5">
                Contact
              </a>
              <Link
                href="https://instagram.com/sebarrex"
                target="_blank"
                className="px-4 py-2 rounded-xl border border-[#00ff9d]/50 hover:bg-[#00ff9d]/10"
              >
                Instagram
              </Link>
              <Link
                href="https://github.com/ducatiman007"
                target="_blank"
                className="px-4 py-2 rounded-xl border border-white/20 hover:bg-white/5"
              >
                GitHub
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Placeholder sections (we’ll fill later) */}
      <section id="projects" className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-semibold mb-6 text-[#00ff9d]">Projects</h2>
        <p className="opacity-70">Coming soon: Fitness Progress Tracker, Social Feed, Portfolio cards.</p>
      </section>

      <section id="about" className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-semibold mb-3 text-[#00ff9d]">About</h2>
        <p className="opacity-80 leading-relaxed">
          I’m a full-stack learner focusing on React, Next.js, Firebase/MongoDB, and clean UI with Tailwind.
        </p>
      </section>

      <section id="contact" className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-semibold mb-3 text-[#00ff9d]">Contact</h2>
        <p className="opacity-80">Email: manojkumarleo891@gmail.com</p>
      </section>

      <footer className="border-t border-white/10">
        <div className="max-w-5xl mx-auto px-6 py-6 text-sm opacity-70">
          © {new Date().getFullYear()} Manoj. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
