const DIENSTEN = ['Websites', 'Apps', 'Social Media', 'Google Ads', 'SEO']

export function PrijzenFilter({ actief }: { actief: string }) {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {DIENSTEN.map((dienst) => (
        <a
          key={dienst}
          href={`/prijzen?dienst=${encodeURIComponent(dienst)}`}
          className={[
            'inline-flex min-h-10 items-center px-5 rounded-full text-sm font-semibold transition-colors cursor-pointer',
            actief === dienst
              ? 'bg-brand-strong text-white'
              : 'bg-bg border border-line text-muted hover:border-brand-strong hover:text-brand-strong',
          ].join(' ')}
        >
          {dienst}
        </a>
      ))}
    </div>
  )
}
