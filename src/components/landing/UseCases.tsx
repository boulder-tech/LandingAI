type Item = { title: string; bullets: string[] };

const groups: { heading: string; items: Item[] }[] = [
  {
    heading: "Price & stock monitoring",
    items: [
      {
        title: "Daily tracking across e-commerce and marketplaces",
        bullets: ["Threshold alerts via Slack or Telegram", "Auto-write to Google Sheets or databases"],
      },
    ],
  },
  {
    heading: "Ops & Back-office",
    items: [
      {
        title: "ETL, data sync between systems",
        bullets: ["KYC/KYB checks and approval flows", "Automated reporting (PDF/Sheets) to your team or clients"],
      },
    ],
  },
  {
    heading: "Team bots",
    items: [
      {
        title: "Operational shortcuts from Slack or Discord",
        bullets: ["Assistants that “read” Notion/Docs and answer with context", "Commands that trigger n8n flows securely"],
      },
    ],
  },
  {
    heading: "Growth & Data",
    items: [
      {
        title: "Ethical scraping + lead enrichment",
        bullets: ["Trigger-based campaigns (Email/LinkedIn)", "Dashboards with actionable metrics"],
      },
    ],
  },
];

export default function UseCases() {
  return (
    <section className="px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-12 sm:py-16" id="use-cases">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-xl sm:text-2xl section-title">Use Cases</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {groups.map((group) => (
            <div key={group.heading} className="card">
              <h3 className="text-lg font-medium">{group.heading}</h3>
              <div className="mt-3 space-y-4">
                {group.items.map((item) => (
                  <div key={item.title}>
                    <p className="font-medium">{item.title}</p>
                    <ul className="mt-2 list-disc list-inside text-sm muted space-y-1">
                      {item.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


