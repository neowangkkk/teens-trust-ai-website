import Image from 'next/image'
import QuoteCard from '@/components/QuoteCard'
import data from '@/content/research-data.json'

const sections = [
  {
    title: 'Data Sharing Attitudes',
    description: 'Students show a mix of casual openness and felt helplessness about their data.',
    quotes: data.interviewQuotes.dataSharingAttitudes,
  },
  {
    title: 'AI as Emotional Support',
    description: 'Some students turn to AI for therapy-like interactions, raising psychological safety concerns.',
    quotes: data.interviewQuotes.aiEmotionalSupport,
  },
  {
    title: 'Drawing Boundaries',
    description: 'Other students maintain clear limits on how they engage with AI.',
    quotes: data.interviewQuotes.drawingBoundaries,
  },
]

export default function VoicesPage() {
  return (
    <div className="pt-24 pb-20">
      <section className="max-w-4xl mx-auto px-4 mb-16">
        <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">Student Voices</h1>
        <p className="text-lg text-navy/70 leading-relaxed">
          Behind the numbers are real conversations. Through {data.project.interviews} one-on-one
          interviews, students shared candid perspectives on how they use AI, what they share with it,
          and where they draw the line.
        </p>
      </section>

      {/* Photo */}
      <section className="max-w-6xl mx-auto px-4 mb-16">
        <div className="relative aspect-[21/9] rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/images/students-collaborating-1.jpg"
            alt="Two students working together closely during an interview session"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </section>

      {/* Quote Sections */}
      {sections.map((section) => (
        <section key={section.title} className="max-w-4xl mx-auto px-4 mb-16">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-2">{section.title}</h2>
          <p className="text-navy/60 mb-8">{section.description}</p>
          <div className="space-y-6">
            {section.quotes.map((q) => (
              <QuoteCard key={q.quote} quote={q.quote} theme={q.theme} />
            ))}
          </div>
        </section>
      ))}

      {/* Second Photo */}
      <section className="max-w-6xl mx-auto px-4">
        <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/images/students-interview.jpg"
            alt="A student during a one-on-one interview for the research project"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </section>
    </div>
  )
}
