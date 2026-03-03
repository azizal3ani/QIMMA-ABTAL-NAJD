import { motion } from 'framer-motion'
import { Eye, Target, Handshake } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function VisionSection() {
  const { t } = useLanguage()
  const items = [
    { icon: Eye, title: t('vision.t1'), text: t('vision.d1') },
    { icon: Target, title: t('vision.t2'), text: t('vision.d2') },
    { icon: Handshake, title: t('vision.t3'), text: t('vision.d3') },
  ]

  return (
    <section id="vision" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-sm font-bold text-primary mb-2">{t('vision.label')}</h2>
          <h3 className="text-3xl md:text-5xl font-black text-foreground">{t('vision.title')}</h3>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-card border border-border rounded-2xl p-8 card-hover"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-5">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <h4 className="text-2xl font-black text-primary mb-4">{item.title}</h4>
              <p className="text-muted-foreground leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
