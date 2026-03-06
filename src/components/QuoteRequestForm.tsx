import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Send, User, Phone, Mail, Building, FileText, CheckCircle } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

interface QuoteRequestFormProps {
  isOpen: boolean
  onClose: () => void
}

export default function QuoteRequestForm({ isOpen, onClose }: QuoteRequestFormProps) {
  const { t, lang } = useLanguage()
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    service: '',
    details: '',
  })

  const services = [
    t('services.s1'), t('services.s2'), t('services.s3'), t('services.s4'),
    t('services.s5'), t('services.s6'), t('services.s7'), t('services.s8'),
    t('services.s9'), t('services.s10'), t('services.s11'), t('services.s12'),
    t('services.s13'), t('services.s14'), t('services.s15'), t('services.s16'),
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(t('quote.emailSubject'))
    const body = encodeURIComponent(
      `${t('quote.name')}: ${formData.name}\n` +
      `${t('quote.phone')}: ${formData.phone}\n` +
      `${t('quote.email')}: ${formData.email}\n` +
      `${t('quote.company')}: ${formData.company}\n` +
      `${t('quote.service')}: ${formData.service}\n` +
      `${t('quote.details')}: ${formData.details}`
    )
    window.open(`mailto:abtal.najd@gmail.com?subject=${subject}&body=${body}`, '_blank')
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: '', phone: '', email: '', company: '', service: '', details: '' })
      onClose()
    }, 2500)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="bg-card border border-border rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={e => e.stopPropagation()}
            dir={lang === 'ar' ? 'rtl' : 'ltr'}
          >
            {isSubmitted ? (
              <div className="p-12 text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', damping: 15 }}
                >
                  <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
                </motion.div>
                <h3 className="text-2xl font-bold text-foreground mb-2">{t('quote.success')}</h3>
                <p className="text-muted-foreground">{t('quote.successDesc')}</p>
              </div>
            ) : (
              <>
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-border">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{t('quote.title')}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{t('quote.subtitle')}</p>
                  </div>
                  <button
                    onClick={onClose}
                    className="p-2 rounded-lg hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="p-6 space-y-4">
                  {/* Name */}
                  <div className="relative">
                    <User className="absolute top-3 text-muted-foreground w-4 h-4" style={{ [lang === 'ar' ? 'right' : 'left']: '12px' }} />
                    <input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder={t('quote.name')}
                      className="w-full bg-input border border-border rounded-xl py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                      style={{ [lang === 'ar' ? 'paddingRight' : 'paddingLeft']: '40px', [lang === 'ar' ? 'paddingLeft' : 'paddingRight']: '12px' }}
                    />
                  </div>

                  {/* Phone */}
                  <div className="relative">
                    <Phone className="absolute top-3 text-muted-foreground w-4 h-4" style={{ [lang === 'ar' ? 'right' : 'left']: '12px' }} />
                    <input
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder={t('quote.phone')}
                      dir="ltr"
                      className="w-full bg-input border border-border rounded-xl py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                      style={{ [lang === 'ar' ? 'paddingRight' : 'paddingLeft']: '40px', [lang === 'ar' ? 'paddingLeft' : 'paddingRight']: '12px', textAlign: lang === 'ar' ? 'right' : 'left' }}
                    />
                  </div>

                  {/* Email */}
                  <div className="relative">
                    <Mail className="absolute top-3 text-muted-foreground w-4 h-4" style={{ [lang === 'ar' ? 'right' : 'left']: '12px' }} />
                    <input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={t('quote.email')}
                      dir="ltr"
                      className="w-full bg-input border border-border rounded-xl py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                      style={{ [lang === 'ar' ? 'paddingRight' : 'paddingLeft']: '40px', [lang === 'ar' ? 'paddingLeft' : 'paddingRight']: '12px', textAlign: lang === 'ar' ? 'right' : 'left' }}
                    />
                  </div>

                  {/* Company */}
                  <div className="relative">
                    <Building className="absolute top-3 text-muted-foreground w-4 h-4" style={{ [lang === 'ar' ? 'right' : 'left']: '12px' }} />
                    <input
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder={t('quote.company')}
                      className="w-full bg-input border border-border rounded-xl py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                      style={{ [lang === 'ar' ? 'paddingRight' : 'paddingLeft']: '40px', [lang === 'ar' ? 'paddingLeft' : 'paddingRight']: '12px' }}
                    />
                  </div>

                  {/* Service Select */}
                  <div className="relative">
                    <FileText className="absolute top-3 text-muted-foreground w-4 h-4" style={{ [lang === 'ar' ? 'right' : 'left']: '12px' }} />
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full bg-input border border-border rounded-xl py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all appearance-none"
                      style={{ [lang === 'ar' ? 'paddingRight' : 'paddingLeft']: '40px', [lang === 'ar' ? 'paddingLeft' : 'paddingRight']: '12px' }}
                    >
                      <option value="" disabled>{t('quote.selectService')}</option>
                      {services.map(s => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>

                  {/* Details */}
                  <textarea
                    name="details"
                    value={formData.details}
                    onChange={handleChange}
                    placeholder={t('quote.details')}
                    rows={3}
                    className="w-full bg-input border border-border rounded-xl p-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all resize-none"
                  />

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full bg-primary text-primary-foreground font-bold py-3 rounded-xl hover:opacity-90 transition-opacity flex items-center justify-center gap-2 text-lg"
                  >
                    <Send className="w-5 h-5" />
                    {t('quote.submit')}
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
