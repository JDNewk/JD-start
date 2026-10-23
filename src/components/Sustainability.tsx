import { business } from '@/lib/site'

export function Sustainability() {
  return (
    <section className="py-16 bg-red-700 text-white">
      <div className="max-w-4xl mx-auto px-5 text-center">
        <h2 className="text-2xl md:text-3xl font-bold">
          Fewer boxes in the landfill
        </h2>
        <p className="mt-4 text-red-100 leading-relaxed">
          Every {business.name} tote is reused hundreds of times instead of
          being taped up once and thrown away. Between rentals, each tote and
          lid is inspected and sanitized before it heads back out to a Quad
          Cities driveway.
        </p>
      </div>
    </section>
  )
}
