import { useState, type FormEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ProductSelector from './ProductSelector'
import CustomerTypeSelector from './CustomerTypeSelector'

type FormState = {
  product: string
  quantity: string
  customerType: string
  location: string
  requiredDate: string
  requirements: string
  name: string
  phone: string
  email: string
}

const initialState: FormState = {
  product: '',
  quantity: '',
  customerType: '',
  location: '',
  requiredDate: '',
  requirements: '',
  name: '',
  phone: '',
  email: '',
}

type Errors = Partial<Record<keyof FormState, string>>

function fieldClass(hasError: boolean) {
  return `w-full bg-transparent border rounded-md px-4 py-3 text-sm text-body placeholder:text-muted/60 focus:border-forest transition-colors ${
    hasError ? 'border-red-400' : 'border-hairline'
  }`
}

export default function QuoteForm() {
  const [form, setForm] = useState<FormState>(initialState)
  const [errors, setErrors] = useState<Errors>({})
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle')

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((f) => ({ ...f, [key]: value }))
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }))
  }

  function validate(): boolean {
    const next: Errors = {}
    if (!form.product) next.product = 'Please select a product category.'
    if (!form.quantity.trim()) next.quantity = 'Please tell us how much you need.'
    if (!form.customerType) next.customerType = 'Please select a customer type.'
    if (!form.location.trim()) next.location = 'Please provide a delivery location.'
    if (!form.name.trim()) next.name = 'Please tell us your name.'
    if (!form.phone.trim()) next.phone = 'Please provide a phone or WhatsApp number.'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!validate()) return
    setStatus('loading')
    await new Promise((resolve) => setTimeout(resolve, 900))
    setStatus('success')
  }

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-cream rounded-md p-8 md:p-12 text-center"
      >
        <p className="eyebrow justify-center">Request Received</p>
        <h3 className="mt-4 font-display text-2xl md:text-3xl text-deep">
          Thank you, {form.name.split(' ')[0]}.
        </h3>
        <p className="mt-3 text-muted max-w-md mx-auto leading-relaxed">
          We've received your request and will get back to you with availability and pricing
          as soon as possible.
        </p>
        <button
          type="button"
          onClick={() => {
            setForm(initialState)
            setStatus('idle')
          }}
          className="mt-6 text-sm font-semibold text-forest hover:text-deep"
        >
          Submit another request
        </button>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-10">
      <fieldset className="space-y-5">
        <legend className="eyebrow mb-1">What You Need</legend>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="product" className="block text-sm font-semibold text-body mb-2">
              Product / Category
            </label>
            <ProductSelector value={form.product} onChange={(v) => update('product', v)} />
            {errors.product && <p className="mt-1.5 text-xs text-red-500">{errors.product}</p>}
          </div>

          <div>
            <label htmlFor="quantity" className="block text-sm font-semibold text-body mb-2">
              Quantity
            </label>
            <input
              id="quantity"
              type="text"
              placeholder="e.g. 5 bags, 20kg, 3 birds"
              value={form.quantity}
              onChange={(e) => update('quantity', e.target.value)}
              className={fieldClass(!!errors.quantity)}
            />
            {errors.quantity && <p className="mt-1.5 text-xs text-red-500">{errors.quantity}</p>}
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-body mb-2">Customer Type</label>
          <CustomerTypeSelector value={form.customerType} onChange={(v) => update('customerType', v)} />
          {errors.customerType && (
            <p className="mt-1.5 text-xs text-red-500">{errors.customerType}</p>
          )}
        </div>
      </fieldset>

      <fieldset className="space-y-5">
        <legend className="eyebrow mb-1">Delivery Details</legend>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="location" className="block text-sm font-semibold text-body mb-2">
              Delivery Location
            </label>
            <input
              id="location"
              type="text"
              placeholder="City, area or address"
              value={form.location}
              onChange={(e) => update('location', e.target.value)}
              className={fieldClass(!!errors.location)}
            />
            {errors.location && <p className="mt-1.5 text-xs text-red-500">{errors.location}</p>}
          </div>

          <div>
            <label htmlFor="requiredDate" className="block text-sm font-semibold text-body mb-2">
              Required Date
            </label>
            <input
              id="requiredDate"
              type="date"
              value={form.requiredDate}
              onChange={(e) => update('requiredDate', e.target.value)}
              className={fieldClass(false)}
            />
          </div>
        </div>

        <div>
          <label htmlFor="requirements" className="block text-sm font-semibold text-body mb-2">
            Additional Requirements
          </label>
          <textarea
            id="requirements"
            rows={4}
            placeholder="Anything else we should know about your order"
            value={form.requirements}
            onChange={(e) => update('requirements', e.target.value)}
            className={fieldClass(false)}
          />
        </div>
      </fieldset>

      <fieldset className="space-y-5">
        <legend className="eyebrow mb-1">Your Details</legend>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-body mb-2">
              Name
            </label>
            <input
              id="name"
              type="text"
              value={form.name}
              onChange={(e) => update('name', e.target.value)}
              className={fieldClass(!!errors.name)}
            />
            {errors.name && <p className="mt-1.5 text-xs text-red-500">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-semibold text-body mb-2">
              Phone / WhatsApp
            </label>
            <input
              id="phone"
              type="tel"
              value={form.phone}
              onChange={(e) => update('phone', e.target.value)}
              className={fieldClass(!!errors.phone)}
            />
            {errors.phone && <p className="mt-1.5 text-xs text-red-500">{errors.phone}</p>}
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-body mb-2">
            Email (optional)
          </label>
          <input
            id="email"
            type="email"
            value={form.email}
            onChange={(e) => update('email', e.target.value)}
            className={fieldClass(false)}
          />
        </div>
      </fieldset>

      <div>
        <button
          type="submit"
          disabled={status === 'loading'}
          className="inline-flex items-center gap-2 bg-forest text-warm-white font-semibold text-sm px-7 py-4 rounded-md hover:bg-deep transition-colors disabled:opacity-70"
        >
          <AnimatePresence mode="wait" initial={false}>
            {status === 'loading' ? (
              <motion.span key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                Sending Request…
              </motion.span>
            ) : (
              <motion.span key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                Request a Quote →
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>
    </form>
  )
}
