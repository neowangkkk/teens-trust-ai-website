import Image from 'next/image'
import PhotoGrid from '@/components/PhotoGrid'
import data from '@/content/research-data.json'

const galleryPhotos = [
  { src: '/images/group-photo-stage.jpg', alt: 'All student researchers on stage at the LinkedKey Foundation event' },
  { src: '/images/classroom-session-1.jpg', alt: 'Students in a classroom during a research training session' },
  { src: '/images/students-teamwork.jpg', alt: 'Students collaborating as a team on research tasks' },
  { src: '/images/students-working-1.jpg', alt: 'Students focused on their research work' },
  { src: '/images/students-working-2.jpg', alt: 'Students at desks working on data analysis' },
  { src: '/images/students-working-3.jpg', alt: 'Students engaged in research activities' },
  { src: '/images/students-discussion.jpg', alt: 'A small group of students in discussion' },
]

export default function TeamPage() {
  return (
    <div className="pt-24 pb-20">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-4 mb-16">
        <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">Our Team</h1>
        <p className="text-lg text-navy/70 leading-relaxed">
          This research was made possible by {data.project.studentResearchers} dedicated high school
          students who designed the study, collected data, and analyzed the results &mdash; all while
          balancing school, extracurriculars, and everything else that comes with being a teenager.
        </p>
      </section>

      {/* Student Researchers Grid */}
      <section className="max-w-6xl mx-auto px-4 mb-16">
        <h2 className="font-display text-2xl md:text-3xl font-bold mb-8">
          {data.project.studentResearchers} Student Researchers
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {data.researchers.map((name) => (
            <div
              key={name}
              className="bg-light-gray rounded-xl p-4 text-center hover:bg-accent/10 transition-colors"
            >
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-accent font-bold text-lg">
                  {name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <p className="text-sm font-medium text-navy">{name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mentor */}
      <section className="bg-light-gray py-16 mb-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-8">Faculty Mentor</h2>
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h3 className="font-display text-xl font-semibold mb-2">Professor Tao Wang</h3>
            <p className="text-accent font-medium text-sm mb-4">Faculty of Information, University of Toronto</p>
            <p className="text-navy/70 leading-relaxed">
              Professor Wang guided the student researchers through the entire research process,
              from study design and ethics considerations to data analysis and report writing,
              ensuring academic rigor while maintaining the student-led spirit of the project.
            </p>
          </div>
        </div>
      </section>

      {/* Organization */}
      <section className="max-w-4xl mx-auto px-4 mb-16">
        <h2 className="font-display text-2xl md:text-3xl font-bold mb-8">Organized By</h2>
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <h3 className="font-display text-xl font-semibold mb-2">LinkedKey Foundation</h3>
          <p className="text-accent font-medium text-sm mb-4">Leading Tomorrow Program</p>
          <p className="text-navy/70 leading-relaxed">
            The LinkedKey Foundation&apos;s Leading Tomorrow program empowers high school students
            to engage in meaningful research and leadership experiences. This AI risk perception
            study is part of their mission to develop the next generation of informed, critical
            thinkers who can shape the future of technology responsibly.
          </p>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="max-w-6xl mx-auto px-4">
        <h2 className="font-display text-2xl md:text-3xl font-bold mb-8">Photo Gallery</h2>
        <PhotoGrid photos={galleryPhotos} />
      </section>
    </div>
  )
}
