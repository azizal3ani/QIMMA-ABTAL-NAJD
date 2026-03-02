export default function FooterSection() {
  return (
    <footer className="bg-background border-t border-border py-8 px-4 text-center">
      <p className="text-primary font-black text-xl mb-2">قمة أبطال نجد للمقاولات</p>
      <p className="text-muted-foreground text-sm">
        QIMMA ABTAL NAJD CONTRACTING COMPANY
      </p>
      <p className="text-muted-foreground text-xs mt-4">
        © {new Date().getFullYear()} جميع الحقوق محفوظة
      </p>
    </footer>
  )
}
