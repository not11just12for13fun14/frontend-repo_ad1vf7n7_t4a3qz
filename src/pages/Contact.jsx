import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())

    // demo only
    await new Promise(r => setTimeout(r, 600))
    setStatus('Thanks! I\'ll get back to you within 24 hours.')
    e.currentTarget.reset()
  }

  return (
    <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">Let\'s work together</h1>
      <p className="text-gray-600 mt-2">Share a bit about your project and I\'ll reply promptly.</p>

      <form onSubmit={onSubmit} className="mt-8 grid grid-cols-1 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Your name</label>
          <input required name="name" className="mt-1 w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-900" placeholder="John Doe" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Company</label>
          <input required name="company" className="mt-1 w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-900" placeholder="Acme Inc." />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input required type="email" name="email" className="mt-1 w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-900" placeholder="you@example.com" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Project description</label>
          <textarea required name="description" rows="5" className="mt-1 w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-900" placeholder="Tell me about your goals, scope, and timeline." />
        </div>
        <div className="flex items-center justify-between gap-4">
          <p className="text-sm text-gray-600">I respect your privacy. No spam, ever.</p>
          <button className="px-5 py-2.5 rounded-full bg-black text-white hover:bg-gray-800">Send message</button>
        </div>
        {status && <p className="text-green-700 bg-green-50 border border-green-200 rounded-xl p-3">{status}</p>}
      </form>
    </section>
  )
}
