interface QuoteCardProps {
  quote: string
  theme: string
}

export default function QuoteCard({ quote, theme }: QuoteCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-8 border-l-4 border-accent hover:shadow-lg transition-shadow">
      <p className="text-lg md:text-xl text-navy/80 italic leading-relaxed font-body">
        &ldquo;{quote}&rdquo;
      </p>
      <div className="mt-4">
        <span className="inline-block text-xs font-semibold uppercase tracking-wider text-accent bg-accent/10 px-3 py-1 rounded-full">
          {theme}
        </span>
      </div>
    </div>
  )
}
