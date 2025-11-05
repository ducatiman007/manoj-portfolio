export default function FitnessProject() {
  return (
    <main className="min-h-screen bg-[#0f0f0f] text-white">
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold text-[#00ff9d]">Fitness Progress Tracker</h1>
        <p className="opacity-80 mt-3 max-w-2xl">
          Track workouts, bodyweight, and progress photos. Built with Next.js, Tailwind, and Firebase
          (Auth + Firestore). Deployed on Vercel. This page is a case study placeholder — features
          are being implemented as part of my learning roadmap.
        </p>
        <div className="mt-6 flex gap-3">
          <a href="https://github.com/<your-username>/fitness-progress-tracker" target="_blank"
             className="px-4 py-2 rounded-xl border border-white/20">GitHub</a>
          <a href="/projects/fitness" className="px-4 py-2 rounded-xl bg-[#00ff9d] text-black font-medium">
            Live Demo (coming soon)
          </a>
        </div>
        <ul className="mt-6 space-y-2 text-sm opacity-80">
          <li>✅ Plan: Email/password login</li>
          <li>✅ Plan: Add progress entries (date, weight, note)</li>
          <li>✅ Plan: Progress chart & photo gallery</li>
          <li>✅ Plan: Private user data</li>
        </ul>
      </section>
    </main>
  );
}
