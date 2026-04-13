import { useEffect } from 'react'
const NILImage = '/assets/NIL.png'

function NIL() {
  useEffect(() => {
    document.title = 'NIL - KayRow Talent'
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.content = 'The best high-school and college athletes'
    }
  }, [])

  return (
    <div className="pt-16 md:pt-20 min-h-screen">
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white text-center">
            NIL
          </h1>
          <p className="text-xl text-text-muted text-center mb-16">
            The best high-school and college athletes
          </p>

          <div className="text-center mb-16">
            <p className="text-lg text-text-muted mb-8 max-w-3xl mx-auto leading-relaxed">
              We partner with{' '}
              <a
                href="https://www.educatingathletes.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:underline font-semibold"
              >
                Educating Athletes
              </a>{' '}
              to work with top high-school and college athletes, helping them navigate 
              Name, Image, and Likeness (NIL) opportunities. Our partnership focuses on 
              connecting athletes with brand partnerships and optimizing their digital 
              presence while they pursue their athletic and academic goals.
            </p>
          </div>

          <div className="relative mb-16">
            <div className="aspect-video bg-primary-light border border-white/10 overflow-hidden">
              <img
                src={NILImage}
                alt="NIL Partnership with Educating Athletes"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="text-center">
            <div className="inline-block px-8 py-4 bg-primary-light border-2 border-white/20">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                COMING SOON
              </h2>
              <p className="text-text-muted">
                We're currently working with amazing athletes. Check back soon!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default NIL

