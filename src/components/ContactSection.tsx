import { useState } from 'react'
import { business } from '@/lib/site'

function encode(data: Record<string, string>) {
  return Object.entries(data)
    .map(([key, val]) => `${encodeURIComponent(key)}=${encodeURIComponent(val)}`)
    .join('&')
}

const initialFields = { name: '', phone: '', email: '', message: '', 'bot-field': '' }

export function ContactSection() {
  const [fields, setFields] = useState(initialFields)
  const [status, setStatus] = useState<'idle' | 'submitting' | 'done' | 'error'>('idle')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => setFields({ ...fields, [e.target.name]: e.target.value })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    try {
      await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'contact', ...fields }),
      })
      setStatus('done')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-20 bg-zinc-50">
      <div className="max-w-4xl mx-auto px-5 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-3xl font-bold text-zinc-900">
            Questions? Get in touch.
          </h2>
          <p className="mt-3 text-zinc-600">
            Not ready to reserve, or asking about a custom package? Send us a
            message, or reach out directly.
          </p>
          <div className="mt-6 space-y-2 text-sm text-zinc-700">
            <p>
              <span className="font-semibold">Phone/text:</span>{' '}
              {business.phone}
            </p>
            <p>
              <span className="font-semibold">Email:</span> {business.email}
            </p>
            <p>
              <span className="font-semibold">Serving:</span> the Illinois
              &amp; Iowa Quad Cities
            </p>
          </div>
        </div>

        {status === 'done' ? (
          <div className="rounded-2xl border border-green-200 bg-green-50 p-8 text-center self-start">
            <h3 className="font-bold text-green-900">Message sent!</h3>
            <p className="mt-2 text-sm text-green-800">
              We'll get back to you shortly.
            </p>
          </div>
        ) : (
          <form
            name="contact"
            onSubmit={handleSubmit}
            className="rounded-2xl border border-zinc-200 bg-white p-6 space-y-4"
          >
            <input type="hidden" name="form-name" value="contact" />
            <p className="hidden">
              <label>
                Don't fill this out:{' '}
                <input name="bot-field" onChange={handleChange} />
              </label>
            </p>
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
            <div className="grid grid-cols-2 gap-4">
              <label className="block">
                <span className="text-sm font-medium text-zinc-700">
                  Phone
                </span>
                <input
                  type="tel"
                  name="phone"
                  value={fields.phone}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-lg border border-zinc-300 px-3 py-2.5 text-sm"
                />
              </label>
              <label className="block">
                <span className="text-sm font-medium text-zinc-700">
                  Email
                </span>
                <input
                  type="email"
                  name="email"
                  required
                  value={fields.email}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-lg border border-zinc-300 px-3 py-2.5 text-sm"
                />
              </label>
            </div>
            <label className="block">
              <span className="text-sm font-medium text-zinc-700">
                Message
              </span>
              <textarea
                name="message"
                rows={4}
                required
                value={fields.message}
                onChange={handleChange}
                className="mt-1 w-full rounded-lg border border-zinc-300 px-3 py-2.5 text-sm"
              />
            </label>
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full rounded-full bg-red-700 text-white font-semibold py-3 hover:bg-red-800 transition-colors disabled:opacity-50"
            >
              {status === 'submitting' ? 'Sending…' : 'Send Message'}
            </button>
            {status === 'error' && (
              <p className="text-sm text-red-600">
                Something went wrong — please call or email us directly.
              </p>
            )}
          </form>
        )}
      </div>
    </section>
  )
}
