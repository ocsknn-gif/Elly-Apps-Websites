const CATEGORIES = ['Alle', 'SEO', 'Google Ads', 'Websites', 'Strategie']

export function BlogFilter({ actief }: { actief: string }) {
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-10">
      {CATEGORIES.map((cat) => (
        <a
          key={cat}
          href={cat === 'Alle' ? '/blog' : `/blog?categorie=${encodeURIComponent(cat)}`}
          className={[
            'px-4 py-2 rounded-full text-sm font-semibold transition-colors cursor-pointer',
            cat === actief
              ? 'bg-[#E53E3E] text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200',
          ].join(' ')}
        >
          {cat}
        </a>
      ))}
    </div>
  )
}
