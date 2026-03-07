import { useLanguage } from '@/contexts/LanguageContext'
import footerLogo from '@/assets/logo.png'
import { MapPin } from 'lucide-react'

export default function FooterSection() {
  const { t, lang } = useLanguage()

  const links = [
    { href: '#', label: lang === 'ar' ? 'الصفحة الرئيسية' : 'Home' },
    { href: '#about', label: lang === 'ar' ? 'من نحن' : 'About Us' },
    { href: '#services', label: lang === 'ar' ? 'خدماتنا' : 'Services' },
    { href: '#projects', label: lang === 'ar' ? 'مشاريعنا' : 'Projects' },
    { href: '#contact', label: lang === 'ar' ? 'تواصل معنا' : 'Contact Us' },
  ]

  return (
    <footer className="bg-background border-t border-border py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* Logo & Company Info */}
        <div className="flex flex-col items-center md:items-start text-center md:text-start">
          <img src={footerLogo} alt={t('footer.brand')} className="h-20 w-auto mb-3" />
          <p className="font-black text-lg mb-1" style={{ color: '#011ea0' }}>{t('footer.brand')}</p>
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

        {/* Quick Links */}
        <div className="flex flex-col items-center md:items-end text-center md:text-end">
          <h4 className="text-foreground font-bold mb-3">
            {lang === 'ar' ? 'روابط سريعة' : 'Quick Links'}
          </h4>
          <nav className="flex flex-col gap-2">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted-foreground text-sm hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-border text-center">
        <p className="text-muted-foreground text-xs">
          © {new Date().getFullYear()} {lang === 'ar' ? 'جميع الحقوق محفوظة - قمة ابطال نجد للمقاولات' : 'All Rights Reserved - Qimma Abtal Najd Contracting'}
        </p>
      </div>
    </footer>
  )
}
