"use client";

export default function PortfolioContent() {
  return (
    <div className="space-y-10 text-black text-left bg-white p-6 lg:p-12">
      <h2 className="text-3xl font-bold">CV in Motion</h2>

      <div>
        <h3 className="text-xl font-semibold">Khaled Doulami</h3>
        <p className="text-gray-800 mt-2 max-w-2xl">
          Full Stack WordPress Developer based in London with 14+ years of experience building scalable, performant websites and applications.
        </p>
        <p className="text-gray-600 mt-2">
          Previously CTO and founder of WAPPDEV, now focused on hands-on WordPress, Next.js, and plugin development.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h4 className="text-lg font-semibold mb-2">Key Skills</h4>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            <li>PHP, JavaScript, Node.js</li>
            <li>WordPress, WooCommerce, Elementor, ACF</li>
            <li>Next.js, GraphQL, React, Vue</li>
            <li>AWS, CyberPanel, Plesk, Redis, Cloudflare</li>
            <li>Core Web Vitals, SEO, Accessibility</li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-2">Notable Projects</h4>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            <li><strong>Impact Nutrition</strong> — multilingual WooCommerce shop</li>
            <li><strong>DNS Abuse Tool</strong> — WP plugin for domain intelligence</li>
            <li><strong>Elementor Headless API</strong> — integration with Next.js</li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h4 className="text-lg font-semibold mb-2">Work History</h4>
          <p><strong>WAPPDEV</strong> (London/Tunis) – 2020–Now</p>
          <p><strong>WWT Technologies</strong> – Founder & CTO</p>
          <p><strong>Webi / Microsoft Innovation Center</strong> – Senior Web Dev</p>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-2">Languages</h4>
          <p>Arabic (Native), English (Fluent), French (Fluent), Italian (Beginner)</p>
        </div>
      </div>
    </div>
  );
}
