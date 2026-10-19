/** Kop + optionele introzin boven een homepage-sectie. */
export function SectionHeader({ title, intro, id }: { title: string; intro?: string; id?: string }) {
  return (
    <div className="max-w-2xl mx-auto text-center mb-10 md:mb-12">
      <h2 id={id} className="h2 text-ink">
        {title}
      </h2>
      {intro && <p className="body-lg text-muted mt-3">{intro}</p>}
    </div>
  )
}
