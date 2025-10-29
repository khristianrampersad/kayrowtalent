import { useEffect, useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  useEffect(() => {
    document.title = 'Contact Us - KayRow Talent'
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.content = "Let's get to work"
    }
  }, [])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    // In a real implementation, you would send this to a backend API
    // For now, we'll simulate a submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', phone: '', message: '' })
      
      // Reset status message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000)
    }, 1000)
  }

  return (
    <div className="pt-16 md:pt-20 min-h-screen">
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white text-center">
            Contact Us
          </h1>
          <p className="text-xl text-text-muted text-center mb-4">
            Let's get to work
          </p>
          <p className="text-lg text-text-muted text-center mb-12 max-w-2xl mx-auto">
            We encourage anyone curious about what we do or how we could work together 
            to reach out. Fill out the form below and we'll get back to you soon.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                Name <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-primary-light border border-white/10 text-white placeholder-text-muted focus:outline-none focus:border-white/30 transition-colors"
                placeholder="Your name"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                Email <span className="text-red-400">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-primary-light border border-white/10 text-white placeholder-text-muted focus:outline-none focus:border-white/30 transition-colors"
                placeholder="your.email@example.com"
              />
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
                Phone <span className="text-text-muted text-sm">(optional)</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-primary-light border border-white/10 text-white placeholder-text-muted focus:outline-none focus:border-white/30 transition-colors"
                placeholder="(555) 123-4567"
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                Comments / Message <span className="text-red-400">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-primary-light border border-white/10 text-white placeholder-text-muted focus:outline-none focus:border-white/30 transition-colors resize-none"
                placeholder="Tell us about your project, questions, or how we can help..."
              />
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full md:w-auto px-8 py-3 bg-white text-primary-dark font-semibold hover:bg-text-muted transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </div>

            {/* Status Message */}
            {submitStatus === 'success' && (
              <div className="p-4 bg-green-500/20 border border-green-500/50 text-green-400">
                Thank you for your message! We'll get back to you soon.
              </div>
            )}
          </form>
        </div>
      </section>
    </div>
  )
}

export default Contact

