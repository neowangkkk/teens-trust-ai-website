import Image from 'next/image'
import data from '@/content/research-data.json'

const originalCards = [
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

const BORDER_COLORS = [
  'border-l-teal-500',
  'border-l-red-400',
  'border-l-emerald-500',
  'border-l-amber-500',
]

const CARD_BGS = [
  'bg-teal-50',
  'bg-pink-50',
  'bg-emerald-50',
  'bg-amber-50',
]

export default function RecommendationsPage() {
  return (
    <div className="pt-24 pb-20">
      <section className="max-w-4xl mx-auto px-4 mb-16">
        <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">Recommendations</h1>
        <p className="text-lg text-navy/70 leading-relaxed">
          Based on our findings, we propose actionable steps for those best positioned
          to help teens navigate AI safely: educators, youth workers, parents, and policymakers.
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

      {/* For Educators */}
      <section className="max-w-6xl mx-auto px-4 mb-16">
        <h2 className="font-display text-2xl md:text-3xl font-bold mb-2">For Educators: Rethinking AI in the Classroom</h2>
        <p className="text-navy/60 mb-8">How to teach WITH AI rather than against it</p>
        <div className="space-y-4">
          {data.recommendations.forEducators.map((rec, i) => (
            <div key={i} className={`${CARD_BGS[i % CARD_BGS.length]} border-l-4 ${BORDER_COLORS[i % BORDER_COLORS.length]} rounded-r-xl p-6`}>
              <h3 className="font-display font-bold text-navy mb-2">{rec.title}</h3>
              <p className="text-sm text-navy/70 leading-relaxed">{rec.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* For Youth & Social Workers */}
      <section className="max-w-6xl mx-auto px-4 mb-16">
        <h2 className="font-display text-2xl md:text-3xl font-bold mb-2">For Youth &amp; Social Workers: The Support Teens Need</h2>
        <p className="text-navy/60 mb-8">Filling the gap that schools and parents leave open</p>
        <div className="space-y-4">
          {data.recommendations.forYouthWorkers.map((rec, i) => (
            <div key={i} className={`${CARD_BGS[i % CARD_BGS.length]} border-l-4 ${BORDER_COLORS[i % BORDER_COLORS.length]} rounded-r-xl p-6`}>
              <h3 className="font-display font-bold text-navy mb-2">{rec.title}</h3>
              <p className="text-sm text-navy/70 leading-relaxed">{rec.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Original 3-column cards */}
      <section className="max-w-6xl mx-auto px-4 mb-16">
        <h2 className="font-display text-2xl md:text-3xl font-bold mb-8">Summary Recommendations</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {originalCards.map((card) => (
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

      {/* Key Takeaways */}
      <section className="max-w-4xl mx-auto px-4 mb-16">
        <div className="bg-navy rounded-2xl p-8 text-white">
          <h3 className="font-display text-2xl font-bold text-center mb-8">5 Key Takeaways</h3>
          <div className="space-y-6">
            {data.keyTakeaways.map((takeaway, i) => (
              <div key={i} className="flex gap-4 items-start">
                <span className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold ${
                  ['bg-teal-500', 'bg-red-500', 'bg-amber-500', 'bg-purple-500', 'bg-blue-500'][i]
                }`}>
                  {i + 1}
                </span>
                <div>
                  <p className="font-display font-bold text-white">{takeaway.title}</p>
                  <p className="text-white/70 text-sm">{takeaway.description}</p>
                </div>
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
