import { motion } from 'framer-motion'
import { Phone, Menu, X, Sun, Moon, Globe } from 'lucide-react'
import { useState, useEffect } from 'react'
import { useTheme } from '@/contexts/ThemeContext'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const { lang, toggleLang, t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset'
    return () => { document.body.style.overflow = 'unset' }
  }, [isMobileMenuOpen])

  const links = [
    { href: '#about', label: t('nav.about') },
    { href: '#vision', label: t('nav.vision') },
    { href: '#values', label: t('nav.values') },
    { href: '#services', label: t('nav.services') },
    { href: '#projects', label: t('nav.projects') },
    { href: '#why-us', label: t('nav.whyUs') },
    { href: '#contact', label: t('nav.contact') },
  ]

  return (
    <motion.nav
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 w-full z-50"
    >
      <div className={`w-full px-4 md:px-8 py-3 transition-all duration-300 ${
        isScrolled ? 'bg-background/90 backdrop-blur-xl border-b border-border' : 'bg-transparent'
      }`}>
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <a href="#" className="text-primary font-extrabold text-xl">{t('nav.brand')}</a>
          
          <div className="hidden lg:flex items-center gap-6">
            {links.map(l => (
              <a key={l.href} href={l.href} className="text-foreground/80 hover:text-primary transition-colors text-sm font-medium">
                {l.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-muted transition-colors text-foreground/80 hover:text-primary"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* Language Toggle */}
            <button
              onClick={toggleLang}
              className="flex items-center gap-1 px-3 py-2 rounded-lg hover:bg-muted transition-colors text-foreground/80 hover:text-primary text-sm font-bold"
              aria-label="Toggle language"
            >
              <Globe className="w-4 h-4" />
              {lang === 'ar' ? 'EN' : 'ع'}
            </button>

            <a href="tel:+966548511531" className="hidden sm:flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg font-bold text-sm hover:opacity-90 transition-opacity">
              <Phone className="w-4 h-4" />
              {t('nav.callUs')}
            </a>
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden text-foreground p-2">
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="lg:hidden fixed inset-0 top-14 bg-background/95 backdrop-blur-xl z-40"
        >
          <div className="flex flex-col p-6 gap-4">
            {links.map(l => (
              <a key={l.href} href={l.href} onClick={() => setIsMobileMenuOpen(false)}
                className="text-foreground text-lg font-semibold py-3 border-b border-border hover:text-primary transition-colors">
                {l.label}
              </a>
            ))}
            <a href="tel:+966548511531" className="mt-4 flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-bold">
              <Phone className="w-5 h-5" />
              {t('nav.callUs')}
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}
