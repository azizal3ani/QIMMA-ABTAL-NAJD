import { motion } from 'framer-motion'
import { Lightbulb, Shield, Leaf, Award, Heart, Gem, RefreshCw, HardHat } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function ValuesSection() {
  const { t } = useLanguage()
  const values = [
    { icon: Lightbulb, title: t('values.v1'), desc: t('values.v1d') },
    { icon: HardHat, title: t('values.v2'), desc: t('values.v2d') },
    { icon: Award, title: t('values.v3'), desc: t('values.v3d') },
    { icon: Leaf, title: t('values.v4'), desc: t('values.v4d') },
    { icon: Heart, title: t('values.v5'), desc: t('values.v5d') },
    { icon: Shield, title: t('values.v6'), desc: t('values.v6d') },
    { icon: Gem, title: t('values.v7'), desc: t('values.v7d') },
    { icon: RefreshCw, title: t('values.v8'), desc: t('values.v8d') },
  ]

  return (
    <section id="values" className="section-padding bg-secondary">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-sm font-bold text-primary mb-2">{t('values.label')}</h2>
          <h3 className="text-3xl md:text-5xl font-black text-primary">{t('values.title')}</h3>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {values.map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-card border border-border rounded-xl p-5 card-hover text-center"
            >
              <v.icon className="w-8 h-8 text-primary mx-auto mb-3" />
              <h4 className="text-lg font-bold text-foreground mb-2">{v.title}</h4>
              <p className="text-muted-foreground text-sm">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
