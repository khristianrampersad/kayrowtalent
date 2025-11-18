import { useEffect } from 'react'

function Services() {
  useEffect(() => {
    document.title = 'Services - KayRow Talent'
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.content = 'Optimizing socials and facilitating brand deals'
    }
  }, [])

  const brandPartnershipImages = [
    '/assets/brandpartnership1.jpg',
    '/assets/brandpartnership2.jpg',
    '/assets/brandpartnership3.jpg',
    '/assets/brandpartnership4.jpg',
  ]

  const services = [
    {
      title: 'Digital Strategy',
      description: 'We help talent optimize their social media presence across all platforms. Our comprehensive digital strategy services include content planning, audience growth, engagement optimization, and brand positioning. We work with talent to develop a cohesive online presence that authentically represents their brand and resonates with their audience.',
      for: ['Talent', 'Brands'],
    },
    {
      title: 'Brand Partnerships',
      description: 'We facilitate meaningful brand partnerships by connecting talent with brands that align with their values and audience. Our team handles negotiation, contract management, and partnership execution to ensure successful collaborations for both parties. We work with brands to identify the right talent for their campaigns and marketing initiatives.',
      for: ['Talent', 'Brands'],
      images: brandPartnershipImages,
    },
  ]

  return (
    <div className="pt-16 md:pt-20 min-h-screen">
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white text-center">
            Our Services
          </h1>
          <p className="text-xl text-text-muted text-center mb-16">
            Optimizing socials and facilitating brand deals
          </p>

          <div className="mb-16 text-center">
            <p className="text-lg text-text-muted">
              We work with both <span className="text-white font-semibold">talent</span> and{' '}
              <span className="text-white font-semibold">brands</span> to create successful partnerships.
            </p>
          </div>

          <div className="space-y-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-primary-light border border-white/10 p-8 md:p-12"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 md:mb-0">
                    {service.title}
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {service.for.map((type, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 bg-primary border border-white/20 text-sm text-white"
                      >
                        {type}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-lg text-text-muted leading-relaxed mb-6">
                  {service.description}
                </p>
                {service.images && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                    {service.images.map((image, imgIndex) => (
                      <div
                        key={imgIndex}
                        className="relative overflow-hidden aspect-[4/3] bg-primary group"
                      >
                        <img
                          src={image}
                          alt={`${service.title} - Image ${imgIndex + 1}`}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-lg text-text-muted mb-8">
              Interested in learning more about our services?
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-3 bg-white text-primary-dark font-semibold hover:bg-text-muted transition-colors"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services

