import Image from 'next/image'
import data from '@/content/research-data.json'

const cards = [
  {
    title: 'For Schools',
    icon: '🏫',
    items: data.recommendations.forSchools,
    color: 'bg-blue-50 border-blue-200',
  },
  {
    title: 'For Parents',
    icon: '👨‍👩‍👧',
    items: data.recommendations.forParents,
    color: 'bg-amber-50 border-amber-200',
  },
  {
    title: 'For Policymakers',
    icon: '🏛️',
    items: data.recommendations.forPolicymakers,
    color: 'bg-green-50 border-green-200',
  },
]

export default function RecommendationsPage() {
  return (
    <div className="pt-24 pb-20">
      <section className="max-w-4xl mx-auto px-4 mb-16">
        <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">Recommendations</h1>
        <p className="text-lg text-navy/70 leading-relaxed">
          Based on our findings, we propose actionable steps for the three groups best positioned
          to help teens navigate AI safely: schools, parents, and policymakers.
        </p>
      </section>

      {/* Photo */}
      <section className="max-w-6xl mx-auto px-4 mb-16">
        <div className="relative aspect-[21/9] rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/teens-trust-ai-website/images/students-presenting.jpg"
            alt="A student giving a presentation of research findings"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </section>

      {/* Cards */}
      <section className="max-w-6xl mx-auto px-4 mb-16">
        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card) => (
            <div
              key={card.title}
              className={`rounded-2xl border p-8 ${card.color}`}
            >
              <div className="text-3xl mb-3">{card.icon}</div>
              <h2 className="font-display text-xl font-bold mb-4">{card.title}</h2>
              <ul className="space-y-4">
                {card.items.map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="flex-shrink-0 w-5 h-5 bg-accent/20 text-accent rounded-full flex items-center justify-center text-xs font-bold mt-0.5">
                      {i + 1}
                    </span>
                    <p className="text-sm text-navy/80 leading-relaxed">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Key Conclusions */}
      <section className="bg-light-gray py-16 mb-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-8">Key Conclusions</h2>
          <div className="space-y-4">
            {data.conclusions.map((conclusion, i) => (
              <div key={i} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                <p className="text-navy/80 leading-relaxed">{conclusion}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section className="text-center px-4">
        <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">Read the Full Report</h2>
        <p className="text-navy/60 mb-8 max-w-xl mx-auto">
          Want to dive deeper? Download the complete research report with full methodology,
          data tables, and analysis.
        </p>
        <a
          href="/teens-trust-ai-website/FinalReport1205.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-3 bg-accent text-navy font-semibold rounded-full hover:bg-accent/90 transition-colors shadow-md"
        >
          Download Full Report (PDF)
        </a>
      </section>
    </div>
  )
}
