import { useLanguage } from '@/contexts/LanguageContext'
import footerLogo from '@/assets/footer-logo.png'
import { Phone, MapPin } from 'lucide-react'

export default function FooterSection() {
  const { t, lang } = useLanguage()
  return (
    <footer className="bg-background border-t border-border py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* Logo & Company Info */}
        <div className="flex flex-col items-center md:items-start text-center md:text-start">
          <img src={footerLogo} alt={t('footer.brand')} className="h-20 w-auto mb-3" />
          <p className="text-primary font-black text-lg mb-1">{t('footer.brand')}</p>
          <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
            {lang === 'ar'
              ? 'شركة سعودية رائدة في مجالات المقاولات والأعمال الهندسية والخدمات العامة'
              : 'A leading Saudi company in contracting, engineering, and general services'}
          </p>
        </div>

        {/* Office Address */}
        <div className="flex flex-col items-center text-center">
          <MapPin className="w-6 h-6 text-primary mb-2" />
          <h4 className="text-foreground font-bold mb-1">
            {lang === 'ar' ? 'المكتب الرئيسي' : 'Head Office'}
          </h4>
          <p className="text-muted-foreground text-sm leading-relaxed" dir="ltr">
            الشارع الرابع، الخبر الجنوبية، الخبر 34621
          </p>
        </div>

        {/* WhatsApp Contact */}
        <div className="flex flex-col items-center md:items-end text-center md:text-end">
          <a
            href="https://wa.me/966531188553"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green-600 text-white px-5 py-3 rounded-xl font-bold text-sm hover:bg-green-700 transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span dir="ltr">+966 53 118 8553</span>
          </a>
          <p className="text-muted-foreground text-xs mt-2">
            {lang === 'ar' ? 'تواصل معنا عبر واتساب' : 'Contact us on WhatsApp'}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-border text-center">
        <p className="text-muted-foreground text-xs">
          © {new Date().getFullYear()} {t('footer.rights')}
        </p>
      </div>
    </footer>
  )
}
