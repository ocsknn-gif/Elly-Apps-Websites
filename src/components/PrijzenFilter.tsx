const DIENSTEN = ['Websites', 'Apps', 'Social Media', 'Google Ads', 'SEO']

export function PrijzenFilter({ actief }: { actief: string }) {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {DIENSTEN.map((dienst) => (
        <a
          key={dienst}
          href={`/prijzen?dienst=${encodeURIComponent(dienst)}`}
          className={[
            'px-5 py-2 rounded-full text-sm font-semibold transition-colors cursor-pointer',
            actief === dienst
              ? 'bg-[#E53E3E] text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200',
          ].join(' ')}
        >
          {dienst}
        </a>
      ))}
    </div>
  )
}
