"use client";

import HighlightWord from "./HighlightWord";

export default function PortfolioContent() {
  return (
    <div className="bg-white text-black p-6 rounded-xl max-w-3xl mx-auto text-left space-y-4">
      <h2 className="text-2xl font-bold">Khaled Doulami</h2>
      <p>
        Full Stack WordPress Developer based in London with{" "}
        <HighlightWord>14+ years of experience</HighlightWord> building scalable, performant websites and applications.
      </p>

      <p>
        Previously CTO and founder of{" "}
        <HighlightWord linkText="WAPPDEV" href="https://wappdev.co.uk" />, now focused on{" "}
        hands-on WordPress, Next.js, and plugin development.
      </p>

      <h3 className="text-xl font-semibold mt-4">Key Skills</h3>
      <ul className="list-disc pl-5">
        <li><HighlightWord>PHP, JavaScript, Node.js</HighlightWord></li>
        <li><HighlightWord>WordPress, WooCommerce, Elementor, ACF</HighlightWord></li>
        <li><HighlightWord>Next.js, GraphQL, React, Vue</HighlightWord></li>
        <li><HighlightWord>AWS, CyberPanel, Plesk, Redis, Cloudflare</HighlightWord></li>
        <li>Core Web Vitals, SEO audits, WCAG accessibility</li>
      </ul>

      <h3 className="text-xl font-semibold mt-4">Notable Projects</h3>
      <ul className="list-disc pl-5">
        <li>
          <HighlightWord linkText="Impact Nutrition" href="https://impactnutrition.com.tn" /> — multilingual WooCommerce shop
        </li>
        <li>
          <HighlightWord linkText="DNS Abuse Tool" href="https://acidtool.com" /> — WordPress plugin for domain intelligence
        </li>
        <li>
          <HighlightWord linkText="Elementor Headless API" href="#" /> — headless integration with Next.js
        </li>
      </ul>

      <h3 className="text-xl font-semibold mt-4">Work History</h3>
      <p><strong>WAPPDEV (London/Tunis)</strong> – 2020–Now</p>
      <p><strong>WWT Technologies</strong> – Founder & CTO</p>
      <p><strong>Webi / Microsoft Innovation Center</strong> – Senior Web Dev</p>

      <h3 className="text-xl font-semibold mt-4">Languages</h3>
      <p>Arabic (Native), English (Fluent), French (Fluent), Italian (Beginner)</p>

      <h3 className="text-xl font-semibold mt-4">Links</h3>
      <p>
        <HighlightWord linkText="wappdev.co.uk" href="https://wappdev.co.uk" /> ·{" "}
        <HighlightWord linkText="LinkedIn" href="https://linkedin.com/in/doulami-khaled-5221502" />
      </p>
    </div>
  );
}
