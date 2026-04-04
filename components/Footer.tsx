import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-navy text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-display text-lg mb-3">Teens Trust AI More Than They Should</h3>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-3 uppercase tracking-wider text-white/80">Navigate</h4>
            <div className="space-y-2">
              <Link href="/about" className="block text-sm text-white/60 hover:text-accent transition-colors">About</Link>
              <Link href="/findings" className="block text-sm text-white/60 hover:text-accent transition-colors">Findings</Link>
              <Link href="/voices" className="block text-sm text-white/60 hover:text-accent transition-colors">Student Voices</Link>
              <Link href="/team" className="block text-sm text-white/60 hover:text-accent transition-colors">Team</Link>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-3 uppercase tracking-wider text-white/80">Resources</h4>
            <a
              href="/teens-trust-ai-website/FinalReport1205.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-sm text-accent hover:text-accent/80 transition-colors"
            >
              Download Full Report (PDF)
            </a>
          </div>
        </div>
        <div className="border-t border-white/10 mt-8 pt-8 text-center text-xs text-white/40">
          &copy; {new Date().getFullYear()} LinkedKey Foundation. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
