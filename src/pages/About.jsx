import { Link } from 'react-router-dom'
import { useEffect } from 'react'

function About() {
  useEffect(() => {
    document.title = 'About Us - KayRow Talent'
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.content = 'Who we are and what we do'
    }
  }, [])

  return (
    <div className="pt-16 md:pt-20 min-h-screen">
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-white">
            About Us
          </h1>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-text-muted mb-6 leading-relaxed">
              KayRow Talent is a full-service talent management and brand partnership agency 
              dedicated to connecting exceptional talent with the right opportunities. We work 
              closely with both talent and brands to create meaningful partnerships that drive 
              success on all fronts.
            </p>
            
            <p className="text-lg text-text-muted mb-6 leading-relaxed">
              Our mission is to optimize social media presence, facilitate strategic brand 
              partnerships, and provide comprehensive digital strategy services that help our 
              clients reach their full potential. Whether you're a content creator, athlete, 
              or brand looking to collaborate, we're here to make it happen.
            </p>
            
            <p className="text-lg text-text-muted mb-8 leading-relaxed">
              We specialize in digital strategy and brand partnerships, working with talent 
              across various industries to build their online presence and connect them with 
              brands that align with their values and audience.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-white/10">
            <Link
              to="/services"
              className="inline-block px-8 py-3 bg-white text-primary-dark font-semibold hover:bg-text-muted transition-colors"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About

