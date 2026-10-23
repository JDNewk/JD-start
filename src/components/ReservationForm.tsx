import { useEffect, useRef, useState } from 'react'
import { business, deliveryMessage, locationOptions, packages } from '@/lib/site'

function encode(data: Record<string, string>) {
  return Object.entries(data)
    .map(([key, val]) => `${encodeURIComponent(key)}=${encodeURIComponent(val)}`)
    .join('&')
}

const initialFields = {
  dropoffLocation: '',
  pickupLocation: '',
  package: '',
  name: '',
  email: '',
  phone: '',
  deliveryAddress: '',
  pickupAddress: '',
  preferredDate: '',
  notes: '',
  'bot-field': '',
}

export function ReservationForm() {
  const [fields, setFields] = useState(initialFields)
  const [sameAddress, setSameAddress] = useState(true)
  const [agreedPolicy, setAgreedPolicy] = useState(false)
  const [agreedAgreement, setAgreedAgreement] = useState(false)
  const [status, setStatus] = useState<'idle' | 'submitting' | 'done' | 'error'>('idle')
  const confirmationRef = useRef<HTMLDivElement>(null)

  // The confirmation is much shorter than the form, so without this the
  // page collapses and leaves the visitor scrolled down past it.
  useEffect(() => {
    if (status === 'done') {
      confirmationRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
      confirmationRef.current?.focus()
    }
  }, [status])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => setFields({ ...fields, [e.target.name]: e.target.value })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!agreedPolicy || !agreedAgreement) return
    setStatus('submitting')
    try {
      const res = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': 'reservation',
          ...fields,
          pickupAddress: sameAddress ? fields.deliveryAddress : fields.pickupAddress,
        }),
      })
      if (!res.ok) throw new Error(`Form submission failed: ${res.status}`)
      setStatus('done')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'done') {
    return (
      <div
        ref={confirmationRef}
        tabIndex={-1}
        role="status"
        className="rounded-2xl border border-green-200 bg-green-50 p-8 text-center scroll-mt-24 outline-none"
      >
        <h3 className="text-xl font-bold text-green-900">
          Request received!
        </h3>
        <p className="mt-2 text-green-800">
          We'll check availability for your dates and follow up by phone or
          email within one business day to confirm details and arrange
          payment.
        </p>
      </div>
    )
  }

  return (
    <form
      name="reservation"
      onSubmit={handleSubmit}
      className="rounded-2xl border border-zinc-200 bg-white p-6 md:p-8 space-y-5"
    >
      <input type="hidden" name="form-name" value="reservation" />
      <p className="hidden">
        <label>
          Don't fill this out: <input name="bot-field" onChange={handleChange} />
        </label>
      </p>

      <div className="grid md:grid-cols-2 gap-5">
        <label className="block">
          <span className="text-sm font-medium text-zinc-700">
            Delivery location
          </span>
          <select
            name="dropoffLocation"
            required
            value={fields.dropoffLocation}
            onChange={handleChange}
            className="mt-1 w-full rounded-lg border border-zinc-300 px-3 py-2.5 text-sm"
          >
            <option value="">Select a city&hellip;</option>
            {locationOptions.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className="text-sm font-medium text-zinc-700">
            Pickup / return location
          </span>
          <select
            name="pickupLocation"
            required
            value={fields.pickupLocation}
            onChange={handleChange}
            className="mt-1 w-full rounded-lg border border-zinc-300 px-3 py-2.5 text-sm"
          >
            <option value="">Select a city&hellip;</option>
            {locationOptions.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </label>
      </div>

      <p className="text-sm rounded-lg bg-red-50 text-red-900 px-4 py-3">
        {deliveryMessage(fields.dropoffLocation, fields.pickupLocation)}
      </p>

      <label className="block">
        <span className="text-sm font-medium text-zinc-700">Package</span>
        <select
          name="package"
          required
          value={fields.package}
          onChange={handleChange}
          className="mt-1 w-full rounded-lg border border-zinc-300 px-3 py-2.5 text-sm"
        >
          <option value="">Select a package&hellip;</option>
          {packages.map((pkg) => (
            <option key={pkg.id} value={`${pkg.name} (${pkg.totes} totes) - $${pkg.price}`}>
              {pkg.name} — {pkg.totes} totes — ${pkg.price}
            </option>
          ))}
          <option value="Custom">Custom — tell us in the notes</option>
        </select>
      </label>

      <div className="grid md:grid-cols-3 gap-5">
        <label className="block">
          <span className="text-sm font-medium text-zinc-700">Name</span>
          <input
            type="text"
            name="name"
            required
            value={fields.name}
            onChange={handleChange}
            className="mt-1 w-full rounded-lg border border-zinc-300 px-3 py-2.5 text-sm"
          />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-zinc-700">Email</span>
          <input
            type="email"
            name="email"
            required
            value={fields.email}
            onChange={handleChange}
            className="mt-1 w-full rounded-lg border border-zinc-300 px-3 py-2.5 text-sm"
          />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-zinc-700">Phone</span>
          <input
            type="tel"
            name="phone"
            required
            value={fields.phone}
            onChange={handleChange}
            className="mt-1 w-full rounded-lg border border-zinc-300 px-3 py-2.5 text-sm"
          />
        </label>
      </div>

      <label className="block">
        <span className="text-sm font-medium text-zinc-700">
          Delivery address
        </span>
        <input
          type="text"
          name="deliveryAddress"
          required
          value={fields.deliveryAddress}
          onChange={handleChange}
          className="mt-1 w-full rounded-lg border border-zinc-300 px-3 py-2.5 text-sm"
        />
      </label>

      <label className="flex items-center gap-2 text-sm text-zinc-700">
        <input
          type="checkbox"
          checked={sameAddress}
          onChange={(e) => setSameAddress(e.target.checked)}
          className="h-4 w-4"
        />
        Pickup address is the same as the delivery address
      </label>

      {!sameAddress && (
        <label className="block">
          <span className="text-sm font-medium text-zinc-700">
            Pickup address
          </span>
          <input
            type="text"
            name="pickupAddress"
            required
            value={fields.pickupAddress}
            onChange={handleChange}
            className="mt-1 w-full rounded-lg border border-zinc-300 px-3 py-2.5 text-sm"
          />
        </label>
      )}

      <label className="block">
        <span className="text-sm font-medium text-zinc-700">
          Preferred delivery date
        </span>
        <input
          type="date"
          name="preferredDate"
          required
          value={fields.preferredDate}
          onChange={handleChange}
          className="mt-1 w-full rounded-lg border border-zinc-300 px-3 py-2.5 text-sm md:w-1/2"
        />
      </label>

      <label className="block">
        <span className="text-sm font-medium text-zinc-700">
          Anything we should know? (gate codes, stairs, alternate pickup date,
          discount you're requesting)
        </span>
        <textarea
          name="notes"
          rows={3}
          value={fields.notes}
          onChange={handleChange}
          className="mt-1 w-full rounded-lg border border-zinc-300 px-3 py-2.5 text-sm"
        />
      </label>

      <div className="space-y-2 pt-2 border-t border-zinc-100">
        <label className="flex items-start gap-2 text-sm text-zinc-700">
          <input
            type="checkbox"
            checked={agreedPolicy}
            onChange={(e) => setAgreedPolicy(e.target.checked)}
            className="h-4 w-4 mt-0.5"
            required
          />
          I understand rentals run on a two-week cycle and understand the
          cancellation and rescheduling policy.
        </label>
        <label className="flex items-start gap-2 text-sm text-zinc-700">
          <input
            type="checkbox"
            checked={agreedAgreement}
            onChange={(e) => setAgreedAgreement(e.target.checked)}
            className="h-4 w-4 mt-0.5"
            required
          />
          I agree to the tote rental agreement, including responsibility for
          totes lost or damaged during the rental.
        </label>
      </div>

      <button
        type="submit"
        disabled={status === 'submitting' || !agreedPolicy || !agreedAgreement}
        className="w-full rounded-full bg-red-700 text-white font-semibold py-3.5 hover:bg-red-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'submitting' ? 'Sending request…' : 'Request Reservation'}
      </button>
      {status === 'error' && (
        <p className="text-sm text-red-600">
          Something went wrong sending your request — please call or text{' '}
          {business.phone} instead.
        </p>
      )}
      <p className="text-xs text-zinc-500 text-center">
        This reserves your spot — we'll confirm pricing and collect payment
        by phone or a follow-up link before delivery.
      </p>
    </form>
  )
}
