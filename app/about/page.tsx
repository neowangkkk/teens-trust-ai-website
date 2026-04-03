import Image from 'next/image'
import data from '@/content/research-data.json'

export default function AboutPage() {
  return (
    <div className="pt-24 pb-20">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-4 mb-16">
        <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">About the Project</h1>
        <p className="text-lg text-navy/70 leading-relaxed">
          From {data.project.duration}, {data.project.studentResearchers} high school students from the
          LinkedKey Foundation&apos;s Leading Tomorrow program undertook an ambitious research project
          to understand how Canadian teenagers perceive the risks of artificial intelligence. Mentored
          by {data.project.mentor}, the team designed and executed a mixed-methods study spanning{' '}
          {data.project.schools} schools across the Greater Toronto Area.
        </p>
      </section>

      {/* Photo */}
      <section className="max-w-6xl mx-auto px-4 mb-16">
        <div className="relative aspect-[21/9] rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/images/classroom-session-1.jpg"
            alt="Students in a classroom during a research training session"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </section>

      {/* Research Questions */}
      <section className="max-w-4xl mx-auto px-4 mb-16">
        <h2 className="font-display text-2xl md:text-3xl font-bold mb-6">Research Questions</h2>
        <ol className="space-y-4">
          {data.researchQuestions.map((q, i) => (
            <li key={i} className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 bg-accent/10 text-accent rounded-full flex items-center justify-center font-bold text-sm">
                {i + 1}
              </span>
              <p className="text-navy/80 leading-relaxed pt-1">{q}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Methodology */}
      <section className="bg-light-gray py-16 mb-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-8">Methodology</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="font-display text-xl font-semibold mb-3">Quantitative Survey</h3>
              <ul className="space-y-2 text-navy/70 text-sm">
                <li>{data.project.surveyResponses} responses collected</li>
                <li>{data.project.schools} schools across the GTA</li>
                <li>5-point Likert scale measuring risk perception across 4 categories</li>
                <li>Demographics: gender, grade level, school type</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="font-display text-xl font-semibold mb-3">Qualitative Interviews</h3>
              <ul className="space-y-2 text-navy/70 text-sm">
                <li>{data.project.interviews} one-on-one interviews</li>
                <li>Semi-structured format exploring personal AI experiences</li>
                <li>Thematic analysis of attitudes toward data sharing, emotional use, and boundaries</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Schools */}
      <section className="max-w-4xl mx-auto px-4 mb-16">
        <h2 className="font-display text-2xl md:text-3xl font-bold mb-8">Randomly Sampled School List</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-accent mb-4">
              Public Schools ({data.schools.public.length})
            </h3>
            <ul className="space-y-2">
              {data.schools.public.map((school) => (
                <li key={school} className="text-sm text-navy/70">{school}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-accent mb-4">
              Private Schools ({data.schools.private.length})
            </h3>
            <ul className="space-y-2">
              {data.schools.private.map((school) => (
                <li key={school} className="text-sm text-navy/70">{school}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Photo + Ethics */}
      <section className="max-w-6xl mx-auto px-4 mb-16 grid md:grid-cols-2 gap-12 items-center">
        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/images/classroom-presentation.jpg"
            alt="A speaker presenting to students during the research program"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div>
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">Ethical Considerations</h2>
          <p className="text-navy/70 leading-relaxed mb-4">
            This research was conducted with careful attention to ethical standards. All participants
            provided informed consent, and for minors, parental consent was obtained. Survey responses
            were anonymous, and interview data was de-identified to protect participant privacy.
          </p>
          <p className="text-navy/70 leading-relaxed">
            The research team received training on ethical research practices, including data handling,
            interviewing minors, and avoiding leading questions. The study design was reviewed by the
            faculty mentor to ensure alignment with academic research standards.
          </p>
        </div>
      </section>
    </div>
  )
}
