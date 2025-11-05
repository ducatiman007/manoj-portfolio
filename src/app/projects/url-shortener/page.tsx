export default function UrlShortenerProject() {
  return (
    <main className="min-h-screen bg-[#0f0f0f] text-white">
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold text-[#00ff9d]">URL Shortener</h1>
        <p className="opacity-80 mt-3 max-w-2xl">
          Shorten long URLs and track clicks. Built with Next.js API routes and MongoDB (Mongoose).
          Case study page is live; functionality will be implemented next.
        </p>
        <div className="mt-6 flex gap-3">
          <a href="https://github.com/<your-username>/url-shortener-next" target="_blank"
             className="px-4 py-2 rounded-xl border border-white/20">GitHub</a>
          <a href="/projects/url-shortener" className="px-4 py-2 rounded-xl bg-[#00ff9d] text-black font-medium">
            Live Demo (coming soon)
          </a>
        </div>
        <ul className="mt-6 space-y-2 text-sm opacity-80">
          <li>✅ Plan: Create short IDs</li>
          <li>✅ Plan: Redirect endpoint</li>
          <li>✅ Plan: Click analytics</li>
          <li>✅ Plan: Admin dashboard</li>
        </ul>
      </section>
    </main>
  );
}
