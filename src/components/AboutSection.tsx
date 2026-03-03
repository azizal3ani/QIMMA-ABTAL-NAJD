import { motion } from 'framer-motion'
import { Building2, Users, Award } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function AboutSection() {
  const { t } = useLanguage()
  const stats = [
    { number: '+500', label: t('about.stat1'), icon: Building2 },
    { number: '+200', label: t('about.stat2'), icon: Users },
    { number: '+15', label: t('about.stat3'), icon: Award },
  ]

  return (
    <section id="about" className="section-padding bg-secondary">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-sm font-bold text-primary mb-2">{t('about.label')}</h2>
          <h3 className="text-3xl md:text-5xl font-black text-foreground mb-8">
            {t('about.title')}
          </h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <p className="text-muted-foreground text-lg leading-relaxed">{t('about.p1')}</p>
          <p className="text-muted-foreground text-lg leading-relaxed">{t('about.p2')}</p>
          <div className="grid grid-cols-3 gap-4 pt-4">
            {stats.map((stat, i) => (
              <div key={i} className="bg-card rounded-xl p-6 text-center card-hover border border-border">
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <span className="text-3xl md:text-4xl font-black text-primary block">{stat.number}</span>
                <span className="text-muted-foreground text-sm font-semibold">{stat.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
