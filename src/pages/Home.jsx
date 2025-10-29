import { Link } from 'react-router-dom'
import { useEffect } from 'react'
const KyleQueiro = '/assets/KyleQueiro.jpg'
const LAfreshman = '/assets/LAfreshman.jpg'
const Justyn = '/assets/Justyn.jpg'
const VicLaw = '/assets/VicLaw.jpg'
const MontreHartage = '/assets/MontreHartage.jpg'

function Home() {
  useEffect(() => {
    document.title = 'KayRow Talent - One stop shop for talent and brands!'
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.content = 'One stop shop for talent and brands!'
    }
  }, [])

  const talentImages = [
    { src: KyleQueiro, alt: 'Kyle Queiro' },
    { src: LAfreshman, alt: 'LAfreshman' },
    { src: Justyn, alt: 'Justyn' },
    { src: VicLaw, alt: 'Vic Law' },
    { src: MontreHartage, alt: 'Montre Hartage' },
  ]

  return (
    <div className="pt-16 md:pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary-dark to-primary"></div>
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white">
            KAYROW TALENT
          </h1>
          <p className="text-xl md:text-2xl text-text-muted mb-8">
            One stop shop for talent and brands!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/services"
              className="px-8 py-3 bg-white text-primary-dark font-semibold hover:bg-text-muted transition-colors"
            >
              Our Services
            </Link>
            <Link
              to="/talent"
              className="px-8 py-3 border-2 border-white text-white font-semibold hover:bg-white hover:text-primary transition-colors"
            >
              View Talent
            </Link>
          </div>
        </div>
      </section>

      {/* Talent Preview Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
            Talent We Work With
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {talentImages.map((talent, index) => (
              <div
                key={index}
                className="group relative overflow-hidden aspect-[4/5] bg-primary-light"
              >
                <img
                  src={talent.src}
                  alt={talent.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white font-semibold text-lg">{talent.alt}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/talent"
              className="inline-block px-8 py-3 border-2 border-white text-white font-semibold hover:bg-white hover:text-primary transition-colors"
            >
              View All Talent
            </Link>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-primary-light">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
            Our Services
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-primary p-8 border border-white/10">
              <h3 className="text-2xl font-semibold mb-4 text-white">Digital Strategy</h3>
              <p className="text-text-muted">
                Optimizing social media presence and developing strategies to grow your brand online.
              </p>
            </div>
            <div className="bg-primary p-8 border border-white/10">
              <h3 className="text-2xl font-semibold mb-4 text-white">Brand Partnerships</h3>
              <p className="text-text-muted">
                Facilitating brand deals and connecting talent with the right partnerships.
              </p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-block px-8 py-3 bg-white text-primary-dark font-semibold hover:bg-text-muted transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Links Footer */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-semibold text-center mb-8 text-white">Quick Links</h2>
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/about" className="text-text-muted hover:text-white transition-colors">
              About Us
            </Link>
            <Link to="/services" className="text-text-muted hover:text-white transition-colors">
              Services
            </Link>
            <Link to="/talent" className="text-text-muted hover:text-white transition-colors">
              Talent
            </Link>
            <Link to="/nil" className="text-text-muted hover:text-white transition-colors">
              NIL
            </Link>
            <Link to="/contact" className="text-text-muted hover:text-white transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

