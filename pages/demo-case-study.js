import React from "react";

// ─── Design tokens ────────────────────────────────────────────────────────────
const t = {
  bg:          "#0d0d0d",
  bg2:         "#161616",
  bg3:         "#1e1e1e",
  surface:     "#242424",
  border:      "rgba(255,255,255,0.08)",
  borderMid:   "rgba(255,255,255,0.14)",
  text:        "#f0ede8",
  textSec:     "#a09a92",
  textMuted:   "#6b6560",
  accent:      "#e8623a",
  accentLight: "rgba(232,98,58,0.15)",
  accentMid:   "rgba(232,98,58,0.3)",
  green:       "#4aad7e",
  greenLight:  "rgba(74,173,126,0.12)",
  greenBorder: "rgba(74,173,126,0.2)",
  blue:        "#5b8fcc",
  blueLight:   "rgba(91,143,204,0.12)",
  blueBorder:  "rgba(91,143,204,0.25)",
  amber:       "#d4a234",
  amberLight:  "rgba(212,162,52,0.12)",
  amberBorder: "rgba(212,162,52,0.25)",
  purple:      "#8b6fd4",
  purpleLight: "rgba(139,111,212,0.12)",
  purpleBorder:"rgba(139,111,212,0.25)",
  mono:        "'IBM Plex Mono', monospace",
  serif:       "'Instrument Serif', serif",
  sans:        "'Syne', sans-serif",
};

// ─── Reusable primitives ──────────────────────────────────────────────────────

function Tag({ children, color = "orange" }) {
  const map = {
    orange: { color: t.accent,  border: t.accentMid,   bg: t.accentLight  },
    green:  { color: t.green,   border: t.greenBorder,  bg: t.greenLight   },
    blue:   { color: t.blue,    border: t.blueBorder,   bg: t.blueLight    },
    amber:  { color: t.amber,   border: t.amberBorder,  bg: t.amberLight   },
    purple: { color: t.purple,  border: t.purpleBorder, bg: t.purpleLight  },
  };
  const c = map[color];
  return (
    <span style={{
      fontFamily: t.sans,
      fontSize: 11, fontWeight: 600,
      letterSpacing: "0.12em", textTransform: "uppercase",
      padding: "0.3rem 0.75rem",
      borderRadius: 2,
      border: `1px solid ${c.border}`,
      background: c.bg,
      color: c.color,
      whiteSpace: "nowrap",
    }}>
      {children}
    </span>
  );
}

function SectionLabel({ children }) {
  return (
    <p style={{
      fontFamily: t.sans,
      fontSize: 11, fontWeight: 600,
      letterSpacing: "0.15em", textTransform: "uppercase",
      color: t.accent, marginBottom: "1.5rem",
    }}>
      {children}
    </p>
  );
}

function SectionTitle({ children }) {
  return (
    <h2 style={{
      fontFamily: t.serif,
      fontSize: "clamp(1.75rem, 3vw, 2.75rem)",
      fontWeight: 400, lineHeight: 1.15,
      marginBottom: "1.5rem", letterSpacing: "-0.01em",
      color: t.text,
    }}>
      {children}
    </h2>
  );
}

function Prose({ children, style }) {
  return (
    <p style={{
      color: t.textSec,
      fontSize: "1rem", lineHeight: 1.8,
      ...style,
    }}>
      {children}
    </p>
  );
}

function Code({ children }) {
  return (
    <code style={{
      fontFamily: t.mono,
      fontSize: 12, color: t.green,
      background: t.greenLight,
      border: `1px solid ${t.greenBorder}`,
      padding: "0.1em 0.4em", borderRadius: 3,
    }}>
      {children}
    </code>
  );
}

function Pill({ children, type = "none" }) {
  const map = {
    pci:  { bg: "rgba(232,98,58,0.12)",  color: t.accent },
    pii:  { bg: "rgba(91,143,204,0.12)", color: t.blue   },
    none: { bg: "rgba(160,154,146,0.1)", color: t.textMuted },
  };
  const c = map[type];
  return (
    <span style={{
      fontFamily: t.mono,
      fontSize: 10, fontWeight: 500,
      padding: "0.2rem 0.45rem", borderRadius: 2,
      letterSpacing: "0.04em",
      background: c.bg, color: c.color,
    }}>
      {children}
    </span>
  );
}

function QuoteBlock({ children, cite }) {
  return (
    <blockquote style={{
      background: t.bg2,
      border: `1px solid ${t.border}`,
      borderLeft: `3px solid ${t.accent}`,
      borderRadius: "0 4px 4px 0",
      padding: "2rem 2.5rem",
      margin: "3rem 0",
    }}>
      <p style={{
        fontFamily: t.serif,
        fontSize: "1.3rem", fontStyle: "italic",
        color: t.text, lineHeight: 1.6,
        marginBottom: "1rem",
      }}>
        {children}
      </p>
      <cite style={{
        fontFamily: t.sans,
        fontSize: 12, fontWeight: 500,
        letterSpacing: "0.1em", textTransform: "uppercase",
        color: t.textMuted, fontStyle: "normal",
      }}>
        {cite}
      </cite>
    </blockquote>
  );
}

function Section({ children, id, style }) {
  return (
    <section id={id} style={{
      maxWidth: 1100, margin: "0 auto",
      padding: "5rem 3rem",
      borderTop: `1px solid ${t.border}`,
      ...style,
    }}>
      {children}
    </section>
  );
}

function TwoCol({ children, reversed = false }) {
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "4rem",
      alignItems: "start",
      direction: reversed ? "rtl" : "ltr",
    }}>
      {React.Children.map(children, (child) => (
        <div style={{ direction: "ltr" }}>{child}</div>
      ))}
    </div>
  );
}

// ─── Nav ──────────────────────────────────────────────────────────────────────

function Nav() {
  const links = ["Problem", "The Build", "AI-Accelerated", "Outcomes"];
  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      padding: "1.25rem 3rem",
      display: "flex", justifyContent: "space-between", alignItems: "center",
      background: "rgba(13,13,13,0.85)",
      backdropFilter: "blur(12px)",
      borderBottom: `1px solid ${t.border}`,
    }}>
      <span style={{
        fontFamily: t.sans,
        fontSize: 13, fontWeight: 600,
        letterSpacing: "0.12em", textTransform: "uppercase",
        color: t.textSec,
      }}>
        Liz Fedak — Portfolio
      </span>
      <ul style={{ display: "flex", gap: "2rem", listStyle: "none", padding: 0, margin: 0 }}>
        {links.map((l) => (
          <li key={l}>
            <a
              href={`#${l.toLowerCase().replace(/\s+/g, "-")}`}
              style={{
                fontFamily: t.sans,
                fontSize: 13, fontWeight: 500,
                letterSpacing: "0.06em", textTransform: "uppercase",
                color: t.textSec, textDecoration: "none",
              }}
            >
              {l}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  const meta = [
    { label: "Role",   value: "Sales Engineer, Postman" },
    { label: "Scope",  value: "Solo build — platform design to deployment" },
    { label: "Year",   value: "2026" },
    { label: "Status", value: "Live — team onboarding in progress" },
  ];
  return (
    <header style={{
      padding: "12rem 3rem 6rem",
      maxWidth: 1100, margin: "0 auto",
    }}>
      {/* Eyebrow tags */}
      <div style={{ display: "flex", gap: "0.75rem", marginBottom: "2rem", flexWrap: "wrap" }}>
        <Tag color="orange">Case Study</Tag>
        <Tag color="green">Infrastructure</Tag>
        <Tag color="blue">Postman SE</Tag>
        <Tag color="amber">AI-Accelerated</Tag>
      </div>

      {/* Headline */}
      <h1 style={{
        fontFamily: t.serif,
        fontSize: "clamp(3rem, 5.5vw, 5.5rem)",
        fontWeight: 400, lineHeight: 1.05,
        letterSpacing: "-0.02em",
        marginBottom: "1.5rem",
        color: t.text,
      }}>
        Building{" "}
        <em style={{ fontStyle: "italic", color: t.accent }}>Brightbox</em>
        {" —"}<br />
        an enterprise-grade<br />
        Postman demo environment
      </h1>

      {/* Sub */}
      <p style={{
        fontFamily: t.sans,
        fontSize: "1.125rem", color: t.textSec,
        maxWidth: 600, lineHeight: 1.75,
        marginBottom: "3rem",
      }}>
        Postman repositioned around a platform solution this year — and the sales motion that came with it required real, running infrastructure. We didn&rsquo;t have a demo engineering team, and no one gave us an environment. SEs were standing up local Docker containers and the shared account was a mess. I took it on: a centrally managed, cloud-hosted environment with real Kubernetes clusters, live API traffic, and every platform feature wired up and demo-ready — built solo, at a pace that would normally take a team.
      </p>

      {/* Meta strip */}
      <div style={{
        display: "flex", gap: "3rem", flexWrap: "wrap",
        paddingTop: "2rem",
        borderTop: `1px solid ${t.border}`,
      }}>
        {meta.map(({ label, value }) => (
          <div key={label}>
            <label style={{
              display: "block",
              fontFamily: t.sans,
              fontSize: 11, fontWeight: 600,
              letterSpacing: "0.1em", textTransform: "uppercase",
              color: t.textMuted, marginBottom: "0.3rem",
            }}>
              {label}
            </label>
            <span style={{
              fontFamily: t.sans,
              fontSize: 14, fontWeight: 500,
              color: t.textSec,
            }}>
              {value}
            </span>
          </div>
        ))}
      </div>
    </header>
  );
}

// ─── Stats strip ──────────────────────────────────────────────────────────────

function StatsStrip() {
  const stats = [
    { num: "11",  label: "Production services deployed" },
    { num: "5",   label: "Postman industry verticals designed" },
    { num: "70%", label: "Reduction in per-SE setup effort" },
    { num: "1",   label: "SE who built this, org-wide" },
  ];
  return (
    <div style={{
      background: t.bg2,
      borderTop: `1px solid ${t.border}`,
      borderBottom: `1px solid ${t.border}`,
    }}>
      <div style={{
        maxWidth: 1100, margin: "0 auto",
        padding: "3rem",
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "2rem",
      }}>
        {stats.map(({ num, label }) => (
          <div key={label} style={{
            textAlign: "center",
            padding: "2rem 1rem",
            background: t.bg3,
            border: `1px solid ${t.border}`,
            borderRadius: 4,
          }}>
            <div style={{
              fontFamily: t.serif,
              fontSize: "3.5rem", lineHeight: 1,
              marginBottom: "0.5rem", color: t.accent,
            }}>
              {num}
            </div>
            <div style={{
              fontFamily: t.sans,
              fontSize: 12, fontWeight: 500,
              letterSpacing: "0.08em", textTransform: "uppercase",
              color: t.textMuted,
            }}>
              {label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Problem section ──────────────────────────────────────────────────────────

function ProblemSection() {
  return (
    <Section id="problem">
      <TwoCol>
        <div>
          <SectionLabel>The problem</SectionLabel>
          <SectionTitle>
            Demo environments that{" "}
            <em style={{ fontStyle: "italic", color: t.accent }}>undermined</em>
            {" "}the sale
          </SectionTitle>
        </div>
        <div>
          <Prose>
            Postman&rsquo;s SE team had a fragmented demo landscape. There was no single owned
            environment — instead, a patchwork of individually maintained setups, personal
            workspaces bleeding into shared demo accounts, and services with names like
            &ldquo;XYZ test&rdquo; and &ldquo;Liz - personal workspace&rdquo; appearing in
            the API Catalog during customer calls.
          </Prose>
          <Prose style={{ marginTop: "1.25rem" }}>
            Postman is an{" "}
            <strong style={{ color: t.text, fontWeight: 600 }}>
              enterprise governance and API management platform
            </strong>
            . Walking into a deal and demoing governance over a messy, un-governed account
            was a fundamental credibility problem. We were arguing the value of our product
            while accidentally proving we didn&rsquo;t use it ourselves.
          </Prose>
          <Prose style={{ marginTop: "1.25rem" }}>
            There was also a velocity issue. New SEs spent weeks building their own demo
            services — time that should have been spent selling. And crucially, our demo
            accounts weren&rsquo;t always in sync with what was actually shipping in
            production.
          </Prose>
          <Prose>
            The solution needed to be centrally managed, production-realistic, and
            maintainable by a small team — while making every Postman feature genuinely
            demonstrable against real infrastructure generating real signals.
          </Prose>
        </div>
      </TwoCol>
    </Section>
  );
}

// ─── Architecture viz ─────────────────────────────────────────────────────────

function ArchViz() {
  const rows = [
    {
      label: "Cloud",
      nodes: [
        { text: "AWS (EKS)",   type: "cloud" },
        { text: "→",           type: "arrow" },
        { text: "API Gateway", type: "gw"    },
        { text: "→",           type: "arrow" },
        { text: "VPC Link",    type: "k8s"   },
      ],
    },
    {
      label: "Observability",
      nodes: [
        { text: "Postman Insights", type: "k8s"     },
        { text: "+",                type: "arrow"    },
        { text: "Cluster Watcher",  type: "neutral"  },
        { text: "→",                type: "arrow"    },
        { text: "API Catalog",      type: "pm"       },
      ],
    },
    {
      label: "Service mesh",
      nodes: [
        { text: "Istio (minimal)", type: "neutral" },
        { text: "→",              type: "arrow"   },
        { text: "Envoy sidecar",  type: "k8s"     },
        { text: "→",              type: "arrow"   },
        { text: "Insights Agent", type: "k8s"     },
      ],
    },
    {
      label: "Specs",
      nodes: [
        { text: "OpenAPI 3.0", type: "pm"    },
        { text: "+",           type: "arrow" },
        { text: "AsyncAPI",    type: "pm"    },
        { text: "→",           type: "arrow" },
        { text: "Spec Hub",    type: "pm"    },
      ],
    },
    {
      label: "CI/CD",
      nodes: [
        { text: "postman spec lint",  type: "neutral" },
        { text: "→",                  type: "arrow"   },
        { text: "collection run",     type: "neutral" },
        { text: "→",                  type: "arrow"   },
        { text: "workspace push",     type: "neutral" },
      ],
    },
    {
      label: "Data / Auth",
      nodes: [
        { text: "Supabase",       type: "neutral" },
        { text: "+",              type: "arrow"   },
        { text: "Stripe (test)",  type: "gw"      },
        { text: "→",              type: "arrow"   },
        { text: "OAuth2 / mTLS",  type: "neutral" },
      ],
    },
  ];

  const nodeStyle = {
    cloud:   { bg: "rgba(91,143,204,0.1)",  border: "rgba(91,143,204,0.25)",  color: t.blue    },
    k8s:     { bg: "rgba(74,173,126,0.1)",  border: "rgba(74,173,126,0.25)",  color: t.green   },
    gw:      { bg: "rgba(232,98,58,0.1)",   border: "rgba(232,98,58,0.25)",   color: t.accent  },
    pm:      { bg: "rgba(139,111,212,0.1)", border: "rgba(139,111,212,0.25)", color: t.purple  },
    neutral: { bg: t.bg3,                   border: t.border,                  color: t.textSec },
  };

  return (
    <div style={{
      background: t.bg2,
      border: `1px solid ${t.border}`,
      borderRadius: 4,
      padding: "2.5rem",
      fontFamily: t.mono,
    }}>
      {rows.map(({ label, nodes }) => (
        <div key={label} style={{
          display: "flex", alignItems: "center",
          gap: "0.75rem", marginBottom: "1rem", flexWrap: "wrap",
        }}>
          <span style={{
            fontFamily: t.sans,
            fontSize: 10, letterSpacing: "0.1em",
            textTransform: "uppercase", color: t.textMuted,
            minWidth: 90,
          }}>
            {label}
          </span>
          {nodes.map(({ text, type }, i) =>
            type === "arrow" ? (
              <span key={i} style={{ fontSize: 14, color: t.textMuted }}>{text}</span>
            ) : (
              <span key={i} style={{
                fontSize: 11, fontWeight: 500,
                padding: "0.4rem 0.9rem",
                borderRadius: 3, whiteSpace: "nowrap",
                border: `1px solid ${nodeStyle[type].border}`,
                background: nodeStyle[type].bg,
                color: nodeStyle[type].color,
              }}>
                {text}
              </span>
            )
          )}
        </div>
      ))}
    </div>
  );
}

// ─── Build section ────────────────────────────────────────────────────────────

const services = [
  { name: "Product Catalog API",         team: "Storefront",  port: "3001", auth: "API key",  data: "none", exposure: "Public (API GW)"   },
  { name: "Pricing & Promotions API",    team: "Storefront",  port: "3002", auth: "API key",  data: "none", exposure: "Public (API GW)"   },
  { name: "Cart API",                    team: "Checkout",    port: "3003", auth: "OAuth2",   data: "pii",  exposure: "Public (API GW)"   },
  { name: "Checkout API",                team: "Checkout",    port: "3004", auth: "OAuth2",   data: "pci",  exposure: "Public + Stripe"   },
  { name: "Orders API",                  team: "Orders",      port: "3005", auth: "OAuth2",   data: "pii",  exposure: "Public (API GW)"   },
  { name: "Order Events Contract",       team: "Orders",      port: "—",    auth: "Broker",   data: "pii",  exposure: "Spec-only artifact" },
  { name: "Inventory API",               team: "Inventory",   port: "3006", auth: "mTLS",     data: "none", exposure: "Internal only"     },
  { name: "Fulfillment Orchestrator API",team: "Fulfillment", port: "3007", auth: "mTLS",     data: "pii",  exposure: "Internal only"     },
  { name: "3PL Connector API",           team: "3PL",         port: "3008", auth: "OAuth2",   data: "pii",  exposure: "Internal only"     },
  { name: "Shipping Webhooks Contract",  team: "3PL",         port: "—",    auth: "API key sig", data: "pii", exposure: "Spec-only artifact" },
  { name: "Tracking & Exceptions API",   team: "Platform",    port: "3009", auth: "mTLS",     data: "pii",  exposure: "Internal only"     },
];

function BuildSection() {
  return (
    <Section id="the-build">
      <SectionLabel>The build</SectionLabel>
      <SectionTitle>
        A deploy-once,{" "}
        <em style={{ fontStyle: "italic", color: t.accent }}>centrally managed</em>
        {" "}demo platform
      </SectionTitle>

      <div style={{
        display: "grid", gridTemplateColumns: "1fr 1fr",
        gap: "4rem", alignItems: "start", marginTop: "3rem",
      }}>
        <div>
          <Prose>
            The platform I designed —{" "}
            <strong style={{ color: t.text, fontWeight: 600 }}>Brightbox</strong>{" "}
            — is a retail industry demo environment built on AWS, running real Kubernetes
            workloads on EKS, with production traffic flowing through AWS API Gateway and
            Postman Insights surfacing live endpoint health across every service.
          </Prose>
          <Prose style={{ marginTop: "1.25rem" }}>
            This isn&rsquo;t a mock. It&rsquo;s not a simulated &ldquo;lite&rdquo; mode.
            Every service runs in a real cluster with real latency, real error rates, and
            real CI pipeline results. When you open the Postman API Catalog and see a p90
            latency spike — it&rsquo;s actual infrastructure responding to actual traffic.
            That authenticity is what makes the demo credible.
          </Prose>
          <Prose style={{ marginTop: "1.25rem" }}>
            The retail vertical is the first of five planned industry accounts — FinTech,
            Healthcare, Insurance, Retail, and General SaaS — each mapped to a distinct
            cloud provider and set of compliance narratives relevant to enterprise buyers
            in that space.
          </Prose>
        </div>
        <ArchViz />
      </div>

      {/* Service table */}
      <div style={{ marginTop: "4rem" }}>
        <SectionLabel>Retail service inventory — 11 production services</SectionLabel>
        <div style={{
          overflowX: "auto",
          border: `1px solid ${t.border}`,
          borderRadius: 4,
        }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
            <thead>
              <tr style={{
                background: t.bg3,
                borderBottom: `1px solid ${t.border}`,
              }}>
                {["Service", "Team", "Port", "Auth", "Data", "Exposure"].map((h) => (
                  <th key={h} style={{
                    textAlign: "left",
                    padding: "0.875rem 1rem",
                    fontFamily: t.sans,
                    fontSize: 11, fontWeight: 600,
                    letterSpacing: "0.1em", textTransform: "uppercase",
                    color: t.textMuted, whiteSpace: "nowrap",
                  }}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {services.map((s, i) => (
                <tr key={s.name} style={{
                  borderBottom: i < services.length - 1
                    ? `1px solid ${t.border}` : "none",
                }}>
                  <td style={{ padding: "0.75rem 1rem", color: t.text, fontWeight: 600, fontFamily: t.sans }}>
                    {s.name}
                  </td>
                  <td style={{ padding: "0.75rem 1rem", color: t.textSec, fontFamily: t.sans }}>{s.team}</td>
                  <td style={{ padding: "0.75rem 1rem", fontFamily: t.mono }}>
                    {s.port !== "—" ? <Code>{s.port}</Code> : <span style={{ color: t.textMuted }}>—</span>}
                  </td>
                  <td style={{ padding: "0.75rem 1rem", color: t.textSec, fontFamily: t.sans }}>{s.auth}</td>
                  <td style={{ padding: "0.75rem 1rem" }}><Pill type={s.data}>{s.data}</Pill></td>
                  <td style={{ padding: "0.75rem 1rem", color: t.textSec, fontFamily: t.sans }}>{s.exposure}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Section>
  );
}

// ─── Postman features section ─────────────────────────────────────────────────

const features = [
  {
    title: "API Catalog",
    tag: { label: "Command center", color: "purple" },
    desc: "Governance groups, system environments (dev/staging/prod), service ownership tagging, and multi-source discovery all configured — giving the 'birds-eye' enterprise view the platform promises.",
  },
  {
    title: "Postman Insights",
    tag: { label: "Live traffic", color: "green" },
    desc: "Insights Agent deployed via Istio sidecar injection. Real p90 latency, error rates, and endpoint health surfaced in Postman — not mocked. Health check traffic filtered to keep signals meaningful.",
  },
  {
    title: "Cluster Watcher",
    tag: { label: "Git correlation", color: "blue" },
    desc: "Kubernetes CRD connects deployment events to Git commit metadata in the Catalog. When latency spikes, you can trace it to the exact commit that caused it — a compelling enterprise story.",
  },
  {
    title: "Spec Hub",
    tag: { label: "OpenAPI + AsyncAPI", color: "amber" },
    desc: "All 11 services spec'd in OpenAPI 3.0. Two AsyncAPI event contracts for order and shipping webhooks. Git-connected workspaces sync specs from the repo on push.",
  },
  {
    title: "Postman CLI (CI)",
    tag: { label: "Governance gates", color: "green" },
    desc: "postman spec lint with --fail-severity WARN blocks non-conforming specs from reaching production. collection run sends regression results to the cloud. workspace push keeps everything in sync.",
  },
  {
    title: "Native Git + Agent Mode",
    tag: { label: "SE workflow", color: "purple" },
    desc: "Desktop app connected via Native Git. When a governance violation surfaces in the Catalog, Agent Mode summarizes the violation and proposes the fix — demoing AI-assisted API governance in real time.",
  },
];

function FeaturesSection() {
  return (
    <Section>
      <SectionLabel>Postman implementation</SectionLabel>
      <SectionTitle>
        Every feature wired up,{" "}
        <em style={{ fontStyle: "italic", color: t.accent }}>demo-ready</em>
      </SectionTitle>
      <Prose>
        Beyond the infrastructure, I configured the full Postman Enterprise feature stack
        across the demo account — the same feature set we sell into enterprise accounts.
        The goal: when an SE opens Brightbox, every capability is live, populated with
        realistic data, and ready to demonstrate.
      </Prose>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "1.5rem", marginTop: "2.5rem",
      }}>
        {features.map(({ title, tag, desc }) => (
          <div key={title} style={{
            background: t.bg2,
            border: `1px solid ${t.border}`,
            borderRadius: 4, padding: "1.5rem",
          }}>
            <div style={{
              display: "flex", alignItems: "flex-start",
              justifyContent: "space-between", marginBottom: "0.75rem",
            }}>
              <h4 style={{
                fontFamily: t.sans,
                fontSize: "0.875rem", fontWeight: 600,
                color: t.text, letterSpacing: "-0.01em",
              }}>
                {title}
              </h4>
              <Tag color={tag.color}>{tag.label}</Tag>
            </div>
            <p style={{
              fontFamily: t.sans,
              fontSize: "0.8125rem", color: t.textSec, lineHeight: 1.6,
            }}>
              {desc}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}

// ─── AI section ───────────────────────────────────────────────────────────────

const aiSteps = [
  {
    num: "01 — Design",
    title: "AI as product collaborator",
    desc: "Prompted AI to design the retail service architecture from scratch — specifying demo goals, Postman feature requirements, and enterprise realism constraints. Iterated on service count, ERP mocking strategy, and repo structure until the design fit the actual operational budget of a small team.",
  },
  {
    num: "02 — Scaffolding",
    title: "AI-generated project structure",
    desc: "Used Codex to generate the full folder scaffolding for all 11 services in a single pass — Helm charts, k8s manifests, Dockerfiles, package.json, .gitignore. What would have been hours of repetitive setup became a single well-structured prompt and a few minutes of review.",
  },
  {
    num: "03 — Prompt engineering",
    title: "Building a prompt generator",
    desc: "Rather than manually writing prompts for each of 11 services × 6 file types, I prompted AI to generate a prompt generator — a reusable tool that took a service description and output the exact prompts for each artifact. The highest-leverage move in the entire project.",
  },
  {
    num: "04 — Code generation",
    title: "Systematic file production",
    desc: "Ran each generated prompt through Claude to produce OpenAPI specs, route handlers, Helm value files, and Dockerfiles. Dropped results directly into VSCode. Reviewed and adjusted for realism — especially around auth patterns, data sensitivity, and Postman Insights compatibility constraints.",
  },
  {
    num: "05 — Infrastructure ops",
    title: "AI pair programming through deployment",
    desc: "Used Claude as a live pair during the AWS CLI and kubectl work — creating EKS clusters, setting up Istio with sidecar injection, configuring VPC links and API Gateway routes, managing ELB listeners across 9 services. Complex multi-step infrastructure work executed without a cloud engineer.",
  },
  {
    num: "06 — Enablement",
    title: "AI-accelerated documentation",
    desc: "Used AI to synthesize a 35-page infrastructure proposal covering all five industry verticals, CI pipeline templates, RACI models, tagging taxonomy, and demo storylines.",
  },
];

function AISection() {
  return (
    <Section id="ai-accelerated">
      <SectionLabel>AI-accelerated development</SectionLabel>
      <SectionTitle>
        How I used AI to build{" "}
        <em style={{ fontStyle: "italic", color: t.accent }}>faster and smarter</em>
      </SectionTitle>
      <Prose>
        This entire environment was built solo. That&rsquo;s only feasible at this level of
        quality because of how deliberately I used AI tools to compress the development
        lifecycle — not to cut corners, but to move through design, scaffolding, and
        iteration at a pace that would otherwise require a full team.
      </Prose>

      <div style={{
        display: "grid", gridTemplateColumns: "repeat(3, 1fr)",
        gap: 1, background: t.border,
        border: `1px solid ${t.border}`,
        borderRadius: 4, overflow: "hidden",
        marginTop: "2.5rem",
      }}>
        {aiSteps.map(({ num, title, desc }) => (
          <div key={num} style={{ background: t.bg2, padding: "2rem" }}>
            <div style={{
              fontFamily: t.mono,
              fontSize: 11, color: t.accent,
              fontWeight: 500, marginBottom: "0.75rem",
            }}>
              {num}
            </div>
            <h4 style={{
              fontFamily: t.sans,
              fontSize: "0.9rem", fontWeight: 600,
              color: t.text, marginBottom: "0.5rem", lineHeight: 1.3,
            }}>
              {title}
            </h4>
            <p style={{
              fontFamily: t.sans,
              fontSize: "0.8125rem", color: t.textSec, lineHeight: 1.6,
            }}>
              {desc}
            </p>
          </div>
        ))}
      </div>

      <QuoteBlock cite="— Liz Fedak, on the prompt generator approach">
        &ldquo;The trick wasn&rsquo;t just using AI — it was knowing when to prompt AI to
        produce prompts, rather than prompting it directly for outputs. That meta-layer
        compressed 11 services worth of work into a systematic, repeatable process and 
        enabled me roll out these services within 3 days from concept to execution.&rdquo;
      </QuoteBlock>
    </Section>
  );
}

// ─── Outcomes section ─────────────────────────────────────────────────────────

const results = [
  {
    accent: t.accent,
    title: "Enterprise credibility on day one",
    desc: "SEs open Brightbox and see a clean, governed API Catalog with real services, real owners, and real runtime data — not personal workspaces and duplicate 'accounts-service' APIs. The platform models what we're selling, in the product we're selling it in.",
  },
  {
    accent: t.green,
    title: "Dramatically faster onboarding",
    desc: "New SEs no longer have to spend weeks building their own demo environments or rely on tools maintained by other teams that don&rsquo;t always work. They onboard to Brightbox — learning one well-designed retail environment first, then branching into other verticals as they move upmarket. Weeks of setup becomes days of learning.",
  },
  {
    accent: t.blue,
    title: "Real failure scenarios, on demand",
    desc: "Demo storylines include intentional failure modes — spec lint failures blocking releases, async contract drift causing error spikes, latency regressions traced to deployment commits. Every Postman feature is showcased solving a real problem, not a contrived one.",
  },
  {
    accent: t.amber,
    title: "Org-wide scalability",
    desc: "The infrastructure proposal, RACI model, and implementation playbook are designed for a small team to maintain across five industry verticals. What I built for retail is the template: the same Helm charts, CI pipeline snippets, and governance rulesets replicate to FinTech, Healthcare, Insurance, and SaaS.",
  },
];

const nextSteps = [
  {
    num: "01",
    title: "Team onboarding — this week",
    desc: "Running the SE org through Brightbox next week. Demoing every Postman feature against live infrastructure, establishing the shared demo standards, and establishing the first cohort of vertical experts.",
    tag: "Retail vertical → full org",
  },
  {
    num: "02",
    title: "FinTech vertical — AWS, PCI narrative",
    desc: "Apply the same AI-accelerated approach to the FinTech account — EKS + API Gateway, Stripe PaymentIntents lifecycle, fraud event contracts in AsyncAPI, PCI governance groups in the Catalog.",
    tag: "EKS + Stripe + Lambda",
  },
  {
    num: "03",
    title: "Healthcare vertical — Azure, HIPAA narrative",
    desc: "AKS + Azure API Management + FHIR-shaped Patient APIs. The vertical that resonates with healthcare buyers who need to see PHI governance and audit trail capabilities demonstrated against realistic services.",
    tag: "AKS + APIM + FHIR facade",
  },
  {
    num: "04",
    title: "Drift detection + Postman Flows automation",
    desc: "Wire up deployed Flows for incident intake — webhook-triggered ticket creation and runbook posting when contract drift or latency spikes are detected. Closes the loop on the 'governance at scale' narrative.",
    tag: "Flows + Jira automation",
  },
];

function OutcomesSection() {
  return (
    <Section id="outcomes">
      <SectionLabel>Outcomes &amp; impact</SectionLabel>
      <SectionTitle>
        What this makes{" "}
        <em style={{ fontStyle: "italic", color: t.accent }}>possible</em>
      </SectionTitle>

      <div style={{
        display: "grid", gridTemplateColumns: "repeat(2, 1fr)",
        gap: "1.5rem", marginTop: "3rem",
      }}>
        {results.map(({ accent, title, desc }) => (
          <div key={title} style={{
            background: t.bg2,
            border: `1px solid ${t.border}`,
            borderRadius: 4, padding: "2rem",
            borderTop: `2px solid ${accent}`,
          }}>
            <h3 style={{
              fontFamily: t.sans,
              fontSize: "0.9375rem", fontWeight: 600,
              color: t.text, marginBottom: "0.6rem",
            }}>
              {title}
            </h3>
            <p style={{
              fontFamily: t.sans,
              fontSize: "0.875rem", color: t.textSec, lineHeight: 1.65,
            }}>
              {desc}
            </p>
          </div>
        ))}
      </div>

      {/* Next steps */}
      <div style={{ marginTop: "4rem" }}>
        <SectionLabel>What&rsquo;s next</SectionLabel>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {nextSteps.map(({ num, title, desc, tag }, i) => (
            <div key={num} style={{
              display: "grid", gridTemplateColumns: "80px 1fr",
              gap: "2rem", padding: "2.5rem 0",
              borderBottom: i < nextSteps.length - 1
                ? `1px solid ${t.border}` : "none",
            }}>
              <div style={{
                fontFamily: t.serif,
                fontSize: "3.5rem", color: t.borderMid,
                lineHeight: 1, paddingTop: "0.2rem",
              }}>
                {num}
              </div>
              <div>
                <h3 style={{
                  fontFamily: t.sans,
                  fontSize: "1.05rem", fontWeight: 600,
                  color: t.text, marginBottom: "0.6rem",
                  letterSpacing: "-0.01em",
                }}>
                  {title}
                </h3>
                <p style={{
                  fontFamily: t.sans,
                  fontSize: "0.9375rem", color: t.textSec, lineHeight: 1.7,
                }}>
                  {desc}
                </p>
                <span style={{
                  display: "inline-block",
                  fontFamily: t.mono,
                  fontSize: 11, color: t.green,
                  background: t.greenLight,
                  border: `1px solid ${t.greenBorder}`,
                  borderRadius: 3, padding: "0.15rem 0.5rem",
                  marginTop: "0.75rem",
                }}>
                  {tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

// ─── Closing section ──────────────────────────────────────────────────────────

function ClosingSection() {
  return (
    <Section>
      <TwoCol>
        <div>
          <SectionLabel>The bigger picture</SectionLabel>
          <SectionTitle>
            Demo quality is a{" "}
            <em style={{ fontStyle: "italic", color: t.accent }}>product marketing</em>
            {" "}problem
          </SectionTitle>
        </div>
        <div>
          <Prose>
            The Brightbox project is, at its core, a product marketing initiative delivered
            through an engineering lens. The insight that drove it — that demoing governance
            in an ungoverned environment actively undermines positioning — is a product
            marketing insight. The solution required infrastructure, but the problem was
            narrative.
          </Prose>
          <Prose style={{ marginTop: "1.25rem" }}>
            Enterprise software is bought through stories. Buyers need to see themselves in
            the demo. A clean Postman API Catalog with real ownership tags, real compliance
            tiers, and real CI enforcement tells a story that a hand-wavy screen share of
            mock data simply cannot.{" "}
            <strong style={{ color: t.text, fontWeight: 600 }}>
              The environment is the message.
            </strong>
          </Prose>
          <Prose style={{ marginTop: "1.25rem" }}>
            What I built is also a proof of what&rsquo;s possible when AI is used
            strategically — not to replace judgment, but to compress the distance between
            an idea and a working system. The prompt generator, the scaffolding automation,
            the AI pair-programming through deployment: these are patterns that every
            technical team should be building into their workflows.
          </Prose>
        </div>
      </TwoCol>
    </Section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer style={{
      borderTop: `1px solid ${t.border}`,
      padding: "3rem",
      maxWidth: 1100, margin: "0 auto",
      display: "flex", justifyContent: "space-between", alignItems: "center",
    }}>
      <p style={{ fontFamily: t.sans, fontSize: 13, color: t.textMuted }}>
        Liz Fedak — Senior Solutions Engineer, Postman &bull;{" "}
        <a
          href="mailto:liz@lizfedak.com"
          style={{ color: t.accent, textDecoration: "none" }}
        >
          liz@lizfedak.com
        </a>
      </p>
      <p style={{
        fontFamily: t.sans,
        fontSize: 13, fontWeight: 600, color: t.textSec,
      }}>
        Portfolio &mdash; 2026
      </p>
    </footer>
  );
}

// ─── Google Fonts loader ──────────────────────────────────────────────────────
// Drop this into your layout.jsx or _document.jsx instead if you prefer.
// It's here so the component is self-contained for portfolio use.

function FontLoader() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=Instrument+Serif:ital@0;1&family=IBM+Plex+Mono:wght@400;500&display=swap"
        rel="stylesheet"
      />
    </>
  );
}

// ─── Root page ────────────────────────────────────────────────────────────────

export default function Page() {
  return (
    <>
      <FontLoader />
      <div style={{
        background: t.bg,
        color: t.text,
        fontFamily: t.sans,
        fontSize: 16,
        lineHeight: 1.7,
        WebkitFontSmoothing: "antialiased",
        minHeight: "100vh",
      }}>
        <Nav />
        <Hero />
        <StatsStrip />
        <ProblemSection />
        <BuildSection />
        <FeaturesSection />
        <AISection />
        <OutcomesSection />
        <ClosingSection />
        <Footer />
      </div>
    </>
  );
}
