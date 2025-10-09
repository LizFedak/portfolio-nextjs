import React from "react";

/**
 * LatestProject
 * A polished, drop-in React component that showcases a "Latest Project" with:
 * - succinct hero summary
 * - tech stack badges
 * - highlights & feature grid
 * - data pipeline diagram blurb (Airtable → Cloudflare Worker → Supabase)
 * - milestones / status
 * - action buttons (visit site, read notes)
 *
 * No external UI deps. TailwindCSS classes only.
 * Works in Next.js/React, and can be used from Astro via the React renderer.
 */

export default function LatestProject({
  title = "Under the Flatirons",
  subtitle = "Boulder-focused kids activities, news, and events",
  url = "https://www.undertheflatirons.com/family/boulder-kids-activities",
  notesUrl = "https://github.com/LizFedak/under-the-flatirons-og",
  repoUrl = "https://github.com/LizFedak/under-the-flatirons-og",
  coverImage = "/images/underFlatsImg.png",
  stats = {
    posts: 0,
    events: 0,
    activities: 0,
    users: 0,
  },
  tech = [
    "React",
    "Next.js",
    "Astro",
    "Supabase",
    "Airtable",
    "Cloudflare Workers",
    "Vercel",
  ],
  highlights = [
    {
      title: "Advanced templating for news pages",
      detail:
        "Single dynamic template renders all news pages via config arrays and data-driven routing.",
    },
    {
      title: "Full-text site search",
      detail:
        "Supabase index powers fast, page-scoped queries with clean result rendering.",
    },
    {
      title: "Kids activity directory",
      detail:
        "Rich multi-filter UI for age, cost, category, neighborhood, schedule, and more.",
    },
    {
      title: "Auth + Favorites",
      detail:
        "User authentication enables saving articles, events, and activities for later.",
    },
  ],
  features = [
    {
      group: "Data Pipeline",
      items: [
        "Manage source content in Airtable",
        "Cloudflare Worker migrates & syncs to Supabase",
        "Supabase used for indexing and per-page querying",
      ],
    },
    {
      group: "Frontend Architecture",
      items: [
        "Astro pages composing React/Next components",
        "Reusable content templates with prop-driven layouts",
        "Accessible, keyboard-friendly custom filter controls",
      ],
    },
    {
      group: "Search & Personalization",
      items: [
        "Supabase full-text search index",
        "Auth-gated features (favorites, saved lists)",
        "Future: personalized digests by interests",
      ],
    },
  ],
  milestones = [
    { when: "Now", what: "MVP live; directory & news scaffolding in place" },
    { when: "Near-term", what: "Favorites UX + saved lists; improved search facets" },
    { when: "Roadmap", what: "User dashboards, newsletters, event submission flow" },
  ],
  status = "Building in public",
}) {
  return (
    <section className="relative isolate overflow-hidden rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 sm:p-10">
      {/* Glow */}
      <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[50rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-emerald-400/20 via-sky-400/20 to-violet-400/20 blur-3xl" />

      {/* Header */}
      <header className="relative z-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
            {title}
          </h2>
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">{subtitle}</p>
          <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-zinc-200 px-3 py-1 text-xs text-zinc-700 dark:border-zinc-800 dark:text-zinc-300">
            
            {status}
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-wrap gap-2">
          <a
            href={url}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center justify-center rounded-xl border border-zinc-200 px-4 py-2 text-sm font-medium text-zinc-900 transition hover:shadow-sm dark:border-zinc-800 dark:text-zinc-100"
          >
            Visit site <ArrowTopRight className="ml-2 h-4 w-4" />
          </a>
          {notesUrl && (
            <a
              href={notesUrl}
              className="inline-flex items-center justify-center rounded-xl bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition hover:opacity-95 dark:bg-zinc-100 dark:text-zinc-900"
            >
              Build notes <BookOpen className="ml-2 h-4 w-4" />
            </a>
          )}
          {repoUrl && (
            <a
              href={repoUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center justify-center rounded-xl border border-zinc-200 px-4 py-2 text-sm font-medium text-zinc-900 transition hover:shadow-sm dark:border-zinc-800 dark:text-zinc-100"
            >
              Source <Code className="ml-2 h-4 w-4" />
            </a>
          )}
        </div>
      </header>

      {/* Cover / Stats */}
      <div className="relative z-10 mt-6 grid grid-cols-1 gap-6 md:grid-cols-5">
        <div className="md:col-span-3">
          <div className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950">
            {coverImage ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={coverImage}
                alt={`${title} preview`}
                className="h-64 w-full object-cover transition duration-300 group-hover:scale-[1.02] sm:h-72"
                loading="lazy"
              />
            ) : (
              <div className="flex h-64 w-full items-center justify-center sm:h-72">
                <div className="text-center">
                  <div className="mx-auto mb-3 h-10 w-10 rounded-xl bg-gradient-to-br from-emerald-400 to-sky-400 opacity-90" />
                  <p className="text-sm text-zinc-600 dark:text-zinc-300">
                    Project preview will appear here
                  </p>
                </div>
              </div>
            )}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
          </div>
        </div>

        <div className="md:col-span-2">
          {/* <div className="grid grid-cols-2 gap-3">
            <Stat label="Posts" value={formatCount(stats.posts)} />
            <Stat label="Events" value={formatCount(stats.events)} />
            <Stat label="Activities" value={formatCount(stats.activities)} />
            <Stat label="Users" value={formatCount(stats.users)} />
          </div> */}
          <div className="mt-4">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
              Tech Stack
            </h3>
            <ul className="mt-2 flex flex-wrap gap-2">
              {tech.map((t) => (
                <li
                  key={t}
                  className="rounded-full border border-zinc-200 px-2.5 py-1 text-xs text-zinc-700 dark:border-zinc-800 dark:text-zinc-300"
                >
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Highlights */}
      <div className="relative z-10 mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
        {highlights.map((h) => (
          <div
            key={h.title}
            className="rounded-2xl border border-zinc-200 p-4 transition hover:shadow-sm dark:border-zinc-800"
          >
            <div className="flex items-start gap-3">
              <Sparkle className="mt-1 h-5 w-5 text-emerald-500" />
              <div>
                <h4 className="font-medium text-zinc-900 dark:text-zinc-50">{h.title}</h4>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">{h.detail}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Feature groups */}
      <div className="relative z-10 mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
        {features.map((fg) => (
          <div key={fg.group} className="rounded-2xl border border-zinc-200 p-5 dark:border-zinc-800">
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">{fg.group}</h3>
            <ul className="mt-3 space-y-2">
              {fg.items.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                  <Check className="mt-0.5 h-4 w-4 flex-none text-emerald-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Pipeline mini-graphic */}
      <div className="relative z-10 mt-8 rounded-2xl border border-zinc-200 p-5 dark:border-zinc-800">
        <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">Content & Data Flow</h3>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
          Airtable → Cloudflare Worker → Supabase → (Astro/Next) → Pages & Search
        </p>
        <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-5">
          {[
            { name: "Airtable", desc: "Author content in tables" },
            { name: "Cloudflare Worker", desc: "ETL sync & transforms" },
            { name: "Supabase", desc: "Store, index, query" },
            { name: "Astro/Next", desc: "Compose templates" },
            { name: "Site", desc: "Pages, search, favorites" },
          ].map((n, i, arr) => (
            <div key={n.name} className="relative">
              <div className="rounded-xl border border-zinc-200 p-4 text-sm dark:border-zinc-800">
                <div className="font-medium text-zinc-900 dark:text-zinc-50">{n.name}</div>
                <div className="mt-0.5 text-zinc-600 dark:text-zinc-300">{n.desc}</div>
              </div>
              {i < arr.length - 1 && (
                <div className="absolute right-[-14px] top-1/2 hidden -translate-y-1/2 sm:block">
                  <ArrowRight className="h-6 w-6 text-zinc-400" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Milestones */}
      <div className="relative z-10 mt-8 rounded-2xl border border-zinc-200 p-5 dark:border-zinc-800">
        <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">Milestones</h3>
        <ol className="mt-3 space-y-3">
          {milestones.map((m, idx) => (
            <li key={idx} className="flex items-start gap-3 text-sm">
              <div className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
              <div>
                <div className="font-medium text-zinc-900 dark:text-zinc-50">{m.when}</div>
                <div className="text-zinc-600 dark:text-zinc-300">{m.what}</div>
              </div>
            </li>
          ))}
        </ol>
      </div>

      {/* Footer note */}
      <footer className="relative z-10 mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-zinc-500 dark:text-zinc-400">
          Built with performance and accessibility in mind. Content-first, data-driven.
        </p>
        <div className="flex flex-wrap gap-2 text-xs text-zinc-500 dark:text-zinc-400">
          <span>© {new Date().getFullYear()} Under the Flatirons</span>
        </div>
      </footer>
    </section>
  );
}

/*** Small presentational subcomponents ***/
function Stat({ label, value }) {
  return (
    <div className="rounded-xl border border-zinc-200 bg-white p-3 text-center dark:border-zinc-800 dark:bg-zinc-950">
      <div className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">{value}</div>
      <div className="text-xs text-zinc-500 dark:text-zinc-400">{label}</div>
    </div>
  );
}

function formatCount(n) {
  if (typeof n !== "number") return "—";
  if (n >= 1000) return `${(n / 1000).toFixed(1)}k`;
  return String(n);
}

/*** Tiny inline icons (no external deps) ***/
function ArrowTopRight(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={props.className}>
      <path d="M7 17L17 7" />
      <path d="M7 7h10v10" />
    </svg>
  );
}
function BookOpen(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={props.className}>
      <path d="M3 5h7a4 4 0 014 4v10H7a4 4 0 00-4 4V5zm18 0h-7a4 4 0 00-4 4v10h7a4 4 0 014 4V5z" />
    </svg>
  );
}
function Code(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={props.className}>
      <path d="M8 17l-5-5 5-5M16 7l5 5-5 5" />
    </svg>
  );
}
function Sparkle(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={props.className}>
      <path d="M12 2l1.8 4.6L18 8l-4.2 1.4L12 14l-1.8-4.6L6 8l4.2-1.4L12 2zm7 10l1 2.5L23 16l-3 1  -1 3-1-3-3-1 3-1.5L19 12zM2 12l1 2.5L6 16l-3 1-1 3-1-3-3-1 3-1.5L2 12z" />
    </svg>
  );
}
function Check(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={props.className}>
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}
function ArrowRight(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={props.className}>
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  );
}