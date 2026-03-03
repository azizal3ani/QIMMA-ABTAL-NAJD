import { useLanguage } from '@/contexts/LanguageContext'

export default function FooterSection() {
  const { t } = useLanguage()
  return (
    <footer className="bg-background border-t border-border py-8 px-4 text-center">
      <p className="text-primary font-black text-xl mb-2">{t('footer.brand')}</p>
      <p className="text-muted-foreground text-sm">{t('footer.brandEn')}</p>
      <p className="text-muted-foreground text-xs mt-4">
        © {new Date().getFullYear()} {t('footer.rights')}
      </p>
    </footer>
  )
}
