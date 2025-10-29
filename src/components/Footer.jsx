import { Link } from 'react-router-dom'

function Footer() {
  const footerLinks = {
    main: [
      { path: '/', label: 'Home' },
      { path: '/about', label: 'About Us' },
      { path: '/services', label: 'Services' },
      { path: '/talent', label: 'Talent' },
      { path: '/nil', label: 'NIL' },
      { path: '/contact', label: 'Contact' },
    ],
    legal: [
      { path: '/privacy', label: 'Privacy' },
      { path: '/terms', label: 'Terms' },
    ],
  }

  return (
    <footer className="bg-primary-dark border-t border-white/10 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-white font-semibold mb-4">KayRow Talent</h3>
            <p className="text-text-muted text-sm">
              One stop shop for talent and brands!
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.main.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-text-muted hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <p className="text-text-muted text-sm mb-4">
              Let's get to work. Reach out to discuss how we can help.
            </p>
            <Link
              to="/contact"
              className="inline-block text-white border border-white/20 px-4 py-2 text-sm hover:border-white transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10">
          <p className="text-text-muted text-sm text-center">
            © {new Date().getFullYear()} KayRow Talent. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

