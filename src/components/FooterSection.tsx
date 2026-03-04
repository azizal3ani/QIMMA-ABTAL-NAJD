import { useLanguage } from '@/contexts/LanguageContext'
import logo from '@/assets/logo.png'

export default function FooterSection() {
  const { t } = useLanguage()
  return (
    <footer className="bg-background border-t border-border py-8 px-4 text-center">
      <div className="flex justify-center mb-4">
        <img src={logo} alt={t('footer.brand')} className="h-16 w-auto" />
      </div>
      <p className="text-primary font-black text-xl mb-2">{t('footer.brand')}</p>
      <p className="text-muted-foreground text-sm">{t('footer.brandEn')}</p>
      <p className="text-muted-foreground text-xs mt-4">
        © {new Date().getFullYear()} {t('footer.rights')}
      </p>
    </footer>
  )
}
