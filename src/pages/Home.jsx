import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const slideshowImages = [
    '/assets/MontreHartage5.jpg',
    '/assets/MontreHartage2.jpg',
    '/assets/LAfreshman.jpg',
    '/assets/LAfreshman2.jpg',
    '/assets/Justyn2.jpg',
    '/assets/justyn.jpg',
  ]

  // Create pairs of images for side-by-side display
  const imagePairs = []
  for (let i = 0; i < slideshowImages.length; i += 2) {
    if (i + 1 < slideshowImages.length) {
      imagePairs.push([slideshowImages[i], slideshowImages[i + 1]])
    }
  }

  useEffect(() => {
    document.title = 'KayRow Talent - Strengthening digital footprint and partnering with leading brands'
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.content = 'Strengthening digital footprint and partnering with leading brands'
    }
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % imagePairs.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [imagePairs.length])


  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Slideshow Background */}
        <div className="absolute inset-0 top-0 flex">
          {imagePairs.map((pair, pairIndex) => (
            <div
              key={pairIndex}
              className={`absolute inset-0 top-0 flex transition-opacity duration-[3000ms] ease-in-out ${
                pairIndex === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                transition: 'opacity 3s ease-in-out'
              }}
            >
              {pair.map((image, imgIndex) => (
                <div
                  key={imgIndex}
                  className={`h-full flex items-center justify-center bg-primary ${
                    imgIndex === 0 ? 'w-full md:w-1/2' : 'hidden md:flex md:w-1/2'
                  }`}
                >
                  <img
                    src={image}
                    alt={`Slideshow ${pairIndex + 1} - Image ${imgIndex + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
        {/* Gradient Overlay - More subtle for media focus */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary-dark/40 to-primary/60 z-[1]"></div>
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto pt-16 md:pt-20">
          <h1 className="tracking-tight mb-4 text-white font-helvetica" style={{ fontSize: '2rem', fontWeight: 900 }}>
            KAYROW TALENT
          </h1>
          <p className="text-base md:text-lg text-white/80 mb-12 font-light tracking-wide">
          Strengthening digital footprint and partnering with leading brands
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              to="/services"
              className="text-sm md:text-base text-white border-b border-white/40 hover:border-white transition-colors duration-200 font-light tracking-wider uppercase"
            >
              Our Services
            </Link>
            <Link
              to="/talent"
              className="text-sm md:text-base text-white border-b border-white/40 hover:border-white transition-colors duration-200 font-light tracking-wider uppercase"
            >
              View Talent
            </Link>
          </div>
        </div>
      </section>

      {/* Talent Preview Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
            <Link
              to="/talent"
              className="group relative overflow-hidden aspect-[4/5] bg-primary-light block"
            >
              <img
                src="/assets/LAfreshmanlogo.jpg"
                alt="LAfreshman"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </Link>
            
            {/* Video in the middle */}
            <div className="relative overflow-hidden aspect-[4/5] bg-primary-light">
              <video
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                controls={false}
                preload="auto"
                onLoadedData={(e) => {
                  e.target.play().catch(err => console.log('Autoplay prevented:', err));
                }}
                onError={(e) => {
                  console.error('Video loading error. Make sure the file is in public/assets/Video (1).mov');
                }}
              >
                <source src="/assets/Video (1).mov" type="video/quicktime" />
                <source src="/assets/Video (1).mov" type="video/mp4" />
              </video>
            </div>
            
            <Link
              to="/talent"
              className="group relative overflow-hidden aspect-[4/5] bg-primary-light block"
            >
              <img
                src="/assets/brandpartnership1.jpg"
                alt="Brand Partnership"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="relative py-16 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* YouTube Background Video */}
        <div className="absolute inset-0 w-full h-full">
          <iframe
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[177.77777778vh] h-[56.25vw] min-w-full min-h-full"
            src="https://www.youtube.com/embed/6XmmAFFC-r4?autoplay=1&loop=1&playlist=6XmmAFFC-r4&mute=1&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1"
            title="Background video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ pointerEvents: 'none' }}
          ></iframe>
        </div>
        
        {/* Dark Overlay for Readability */}
        <div className="absolute inset-0 bg-primary/70 z-[1]"></div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
            Our Services
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-primary/80 backdrop-blur-sm p-8 border border-white/10">
              <h3 className="text-2xl font-semibold mb-4 text-white">Digital Strategy</h3>
              <p className="text-text-muted">
                Optimizing social media presence and developing strategies to grow your brand online.
              </p>
            </div>
            <div className="bg-primary/80 backdrop-blur-sm p-8 border border-white/10">
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

