import { ReservationForm } from '@/components/ReservationForm'

export function BookingSection() {
  return (
    <section id="book" className="py-20 bg-white">
      <div className="max-w-2xl mx-auto px-5">
        <h2 className="text-3xl font-bold text-center text-zinc-900">
          Reserve Your Totes
        </h2>
        <p className="mt-3 text-center text-zinc-600">
          Tell us where and when — we'll confirm availability and follow up
          to finalize your reservation.
        </p>
        <div className="mt-10">
          <ReservationForm />
        </div>
      </div>
    </section>
  )
}
