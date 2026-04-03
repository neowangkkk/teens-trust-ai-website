import Image from 'next/image'
import Link from 'next/link'
import StatCounter from '@/components/StatCounter'
import data from '@/content/research-data.json'

const riskCards = [
  {
    title: 'Performance Risks',
    description: 'How AI affects learning, critical thinking, and writing skills',
    score: data.riskPerception.performance.overall,
    anchor: 'performance',
  },
  {
    title: 'Privacy Risks',
    description: 'Data misuse, scams, and cybersecurity concerns',
    score: data.riskPerception.privacy.overall,
    anchor: 'privacy',
  },
  {
    title: 'Misinformation Risks',
    description: 'Incorrect info, opacity, and unsupervised AI decisions',
    score: data.riskPerception.misinformation.overall,
    anchor: 'misinformation',
  },
  {
    title: 'Social & Psychological',
    description: 'Loneliness, discrimination, and emotional manipulation',
    score: data.riskPerception.socialPsychological.overall,
    anchor: 'social-psychological',
  },
]

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="/images/group-photo-stage.jpg"
          alt="All 25 student researchers on stage at the LinkedKey Foundation event"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-navy/70" />
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 text-balance">
            Teens Trust AI More Than They Should
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            {data.project.surveyResponses} surveys and {data.project.interviews} interviews across {data.project.schools} GTA schools reveal a widening gap between AI risk and teen perception.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/findings"
              className="px-8 py-3 bg-accent text-navy font-semibold rounded-full hover:bg-accent/90 transition-colors"
            >
              Explore Findings
            </Link>
            <Link
              href="/team"
              className="px-8 py-3 bg-white/10 text-white border border-white/30 font-semibold rounded-full hover:bg-white/20 transition-colors"
            >
              Meet the Team
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="py-16 bg-light-gray">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <StatCounter end={55} suffix="%" label="of teens use AI weekly" />
          <StatCounter end={data.project.surveyResponses} label="survey responses" />
          <StatCounter end={data.project.studentResearchers} label="student researchers" />
        </div>
      </section>

      {/* Risk Category Cards */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
            Four Dimensions of Risk
          </h2>
          <p className="text-center text-navy/60 mb-12 max-w-2xl mx-auto">
            Students rated their perception of AI risks across four categories on a scale of 1&ndash;5. Higher scores indicate greater perceived risk.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {riskCards.map((card) => (
              <Link
                key={card.anchor}
                href={`/findings#${card.anchor}`}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-md hover:border-accent/30 transition-all group"
              >
                <div className="text-3xl font-bold text-accent font-display mb-2">
                  {card.score.toFixed(2)}
                  <span className="text-sm text-navy/40 font-body font-normal"> / 5</span>
                </div>
                <h3 className="font-display text-lg font-semibold mb-2 group-hover:text-accent transition-colors">
                  {card.title}
                </h3>
                <p className="text-sm text-navy/60">{card.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Photo feature */}
      <section className="py-20 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/images/students-collaborating-2.jpg"
              alt="Students discussing research findings at a table"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div>
            <h2 className="font-display text-3xl font-bold mb-4">Research by Students, for Students</h2>
            <p className="text-navy/70 mb-6 leading-relaxed">
              This isn&apos;t research <em>about</em> teenagers &mdash; it&apos;s research <em>by</em> teenagers.
              {' '}{data.project.studentResearchers} high school students from across the Greater Toronto Area
              designed surveys, conducted interviews, and analyzed data to understand how their
              peers really think about AI.
            </p>
            <Link
              href="/about"
              className="inline-block px-6 py-2.5 border-2 border-navy text-navy font-semibold rounded-full hover:bg-navy hover:text-white transition-colors"
            >
              Learn About the Project
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
