import { motion } from 'framer-motion'
import { Phone, Mail, MapPin } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function ContactSection() {
  const { t } = useLanguage()
  const contacts = [
    { icon: Phone, label: '+966 54 851 1531', href: 'tel:+966548511531' },
    { icon: Phone, label: '+966 53 118 8553', href: 'https://wa.me/966531188553', isWhatsApp: true },
    { icon: Mail, label: 'abtal.najd@gmail.com', href: 'mailto:abtal.najd@gmail.com' },
    { icon: Mail, label: 'hello@abtalnajd.com', href: 'mailto:hello@abtalnajd.com' },
    { icon: MapPin, label: t('contact.location'), href: '#' },
  ]

  return (
    <section id="contact" className="section-padding bg-secondary">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-sm font-bold text-primary mb-2">{t('contact.label')}</h2>
          <h3 className="text-3xl md:text-5xl font-black text-foreground mb-4">{t('contact.title')}</h3>
          <p className="text-muted-foreground text-lg">{t('contact.desc')}</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {contacts.map((c, i) => (
            <motion.a
              key={i}
              href={c.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border rounded-xl p-6 text-center card-hover block"
            >
              <c.icon className="w-8 h-8 text-primary mx-auto mb-3" />
              <span className="text-foreground font-semibold text-sm block" dir="ltr">{c.label}</span>
              {(c as any).isWhatsApp && <span className="text-xs text-green-600 font-bold mt-1 block">WhatsApp</span>}
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
