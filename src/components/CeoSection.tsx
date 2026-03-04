import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import ceoImage from '@/assets/ceo.jpg'

export default function CeoSection() {
  const { t } = useLanguage()

  return (
    <section id="ceo" className="section-padding bg-secondary">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-sm font-bold text-primary mb-2">{t('ceo.label')}</h2>
          <h3 className="text-3xl md:text-5xl font-black text-foreground">{t('ceo.title')}</h3>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* CEO Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-1 flex flex-col items-center"
          >
            <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-2xl overflow-hidden border-4 border-primary/20 shadow-xl">
              <img
                src={ceoImage}
                alt={t('ceo.name')}
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="mt-4 text-center">
              <h4 className="text-xl font-black text-primary">{t('ceo.name')}</h4>
              <p className="text-muted-foreground font-semibold">{t('ceo.role')}</p>
            </div>
          </motion.div>

          {/* CEO Message */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 bg-card border border-border rounded-2xl p-8 relative"
          >
            <Quote className="w-10 h-10 text-primary/20 absolute top-6 start-6" />
            <div className="space-y-4 text-muted-foreground leading-relaxed pt-8">
              <p className="text-sm text-primary font-bold">{t('ceo.bismillah')}</p>
              <p>{t('ceo.p1')}</p>
              <p>{t('ceo.p2')}</p>
              <p>{t('ceo.p3')}</p>
              <p>{t('ceo.p4')}</p>
              <p>{t('ceo.p5')}</p>
              <p className="text-primary font-bold text-lg">{t('ceo.closing')}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
