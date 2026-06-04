import { useState } from 'react'
import { services } from '../../data/services'
import Toast from './Toast'

const initial = {
  name: '',
  phone: '',
  email: '',
  service: '',
  message: '',
}

function validate(form) {
  const errors = {}
  if (!form.name.trim()) errors.name = 'Full name is required'
  if (!form.phone.trim()) errors.phone = 'Phone is required'
  if (!form.email.trim()) {
    errors.email = 'Email is required'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Enter a valid email address'
  }
  if (!form.message.trim()) errors.message = 'Message is required'
  return errors
}

export default function ContactForm({ className = '' }) {
  const [form, setForm] = useState(initial)
  const [errors, setErrors] = useState({})
  const [toast, setToast] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const nextErrors = validate(form)
    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors)
      return
    }
    console.log('Contact form submission:', form)
    setToast(true)
    setForm(initial)
    setErrors({})
  }

  const inputClass = (field) =>
    `w-full px-4 py-3 rounded-lg bg-white/10 border text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-gold ${
      errors[field] ? 'border-red-400' : 'border-white/20'
    }`

  return (
    <>
      <form onSubmit={handleSubmit} className={className} noValidate>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="sr-only">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Full Name *"
              value={form.name}
              onChange={handleChange}
              className={inputClass('name')}
            />
            {errors.name && (
              <p className="text-red-300 text-xs mt-1">{errors.name}</p>
            )}
          </div>
          <div>
            <label htmlFor="phone" className="sr-only">
              Phone
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="Phone *"
              value={form.phone}
              onChange={handleChange}
              className={inputClass('phone')}
            />
            {errors.phone && (
              <p className="text-red-300 text-xs mt-1">{errors.phone}</p>
            )}
          </div>
        </div>
        <div className="mt-4">
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Email *"
            value={form.email}
            onChange={handleChange}
            className={inputClass('email')}
          />
          {errors.email && (
            <p className="text-red-300 text-xs mt-1">{errors.email}</p>
          )}
        </div>
        <div className="mt-4">
          <label htmlFor="service" className="sr-only">
            Service
          </label>
          <select
            id="service"
            name="service"
            value={form.service}
            onChange={handleChange}
            className={`${inputClass('service')} appearance-none cursor-pointer`}
          >
            <option value="" className="text-navy">
              Select a service (optional)
            </option>
            {services.map((s) => (
              <option key={s.slug} value={s.slug} className="text-navy">
                {s.title}
              </option>
            ))}
          </select>
        </div>
        <div className="mt-4">
          <label htmlFor="message" className="sr-only">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Your message *"
            value={form.message}
            onChange={handleChange}
            className={`${inputClass('message')} resize-none`}
          />
          {errors.message && (
            <p className="text-red-300 text-xs mt-1">{errors.message}</p>
          )}
        </div>
        <button
          type="submit"
          className="mt-6 w-full md:w-auto px-8 py-3 bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg transition-colors"
        >
          Send Message
        </button>
      </form>
      <Toast
        message="Message sent! We'll contact you shortly."
        visible={toast}
        onClose={() => setToast(false)}
      />
    </>
  )
}
