import { motion } from 'framer-motion'
import heroImg from '@/assets/hero-construction.jpg'
import { useLanguage } from '@/contexts/LanguageContext'

export default function HeroSection() {
  const { t } = useLanguage()
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <img src={heroImg} alt="Construction site" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-l from-black/80 via-black/60 to-black/40" />
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-2xl"
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black leading-tight text-white mb-4">
            <span className="text-primary">{t('hero.brand')}</span>
          </h1>
          <p className="text-2xl md:text-4xl font-bold text-white/90 mb-8">
            {t('hero.tagline')}
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#contact" className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-bold text-lg hover:opacity-90 transition-opacity">
              {t('hero.contact')}
            </a>
            <a href="#services" className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-white/10 transition-colors">
              {t('hero.services')}
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8 }}
        className="absolute top-24 left-4 md:left-8 bg-primary text-primary-foreground px-5 py-3 rounded-xl text-center"
      >
        <span className="text-2xl font-black block">{t('hero.vision2030')}</span>
        <span className="text-sm font-semibold">{t('hero.vision2030sub')}</span>
      </motion.div>
    </section>
  )
}
