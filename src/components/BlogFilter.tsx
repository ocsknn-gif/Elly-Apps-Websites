const CATEGORIES = ['Alle', 'SEO', 'Google Ads', 'Websites', 'Strategie']

export function BlogFilter({ actief }: { actief: string }) {
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-10">
      {CATEGORIES.map((cat) => (
        <a
          key={cat}
          href={cat === 'Alle' ? '/blog' : `/blog?categorie=${encodeURIComponent(cat)}`}
          className={[
            'inline-flex items-center min-h-10 px-4 rounded-full text-sm font-semibold transition-colors cursor-pointer',
            cat === actief
              ? 'bg-brand-strong text-white'
              : 'border border-line bg-surface text-muted hover:text-ink',
          ].join(' ')}
        >
          {cat}
        </a>
      ))}
    </div>
  )
}
