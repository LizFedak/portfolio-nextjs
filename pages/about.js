import React from "react";


// About.js
export default function About() {
  return (
    <main className="about-container">
      <section className="intro">
        <h1>Hi, I’m Liz Fedak<span className="dot">.</span></h1>
        <p>
          I’m a <strong>Solutions Engineer</strong> and full-stack developer building web products that solve real problems. 
          With 7+ years of experience in React and TypeScript, I specialize in integrating APIs (like monday.com, Duda, etc.) to streamline workflows and automate processes. 
          I balance *product thinking* with engineering best practices—ensuring solutions are user-centered, responsive, and accessible.
        </p>
      </section>

      <section className="skills">
        <h2>Core Skills & Technologies</h2>
        <ul>
          <li>Full-Stack: React, Next.js, Node.js, TypeScript</li>
          <li>Integration & APIs: monday.com, Supabase, Stripe, Google Maps</li>
          <li>Architectures: Serverless (AWS/Cloudflare), GraphQL/REST APIs</li>
          <li>Product Dev: Requirements gathering, UX & accessibility (WCAG)</li>
        </ul>
      </section>

      <section className="projects">
        <h2>Featured Projects</h2>
        <ul>
          <li><strong>Under the Flatirons:</strong> Built a Boulder-centric kids activities platform (React/Next) with user auth and dynamic filters, helping local families discover events.</li>
          <li><strong>Auth Suite (WidgetPro):</strong> Created a custom Supabase + Stripe auth system for static sites, enabling secure memberships and subscription flows.</li>
          <li><strong>CO Mountain Tracker:</strong> Developed a Google Maps/Airtable tracker for mountain lion encounters with real-time Slack alerts, improving community safety.</li>
        </ul>
      </section>

      <section className="contact-cta">
        <p>Want to collaborate or learn more? <a href="mailto:liz@fedak.com">Get in touch</a>!</p>
      </section>
    </main>
  );
}
