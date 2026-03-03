import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function WhyUsSection() {
  const { t } = useLanguage()
  const reasons = Array.from({ length: 10 }, (_, i) => t(`whyUs.r${i + 1}`))

  return (
    <section id="why-us" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-sm font-bold text-primary mb-2">{t('whyUs.label')}</h2>
          <h3 className="text-3xl md:text-5xl font-black text-primary">{t('whyUs.title')}</h3>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? 20 : -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="flex items-start gap-3 bg-card border border-border rounded-xl p-4 card-hover"
            >
              <CheckCircle className="w-5 h-5 text-primary mt-1 shrink-0" />
              <span className="text-foreground font-medium">{reason}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
