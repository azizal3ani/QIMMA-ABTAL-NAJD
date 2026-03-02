import { motion } from 'framer-motion'

export default function ProjectsSection() {
  return (
    <section id="projects" className="section-padding bg-secondary">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <h2 className="text-sm font-bold text-primary mb-2">أعمالنا</h2>
          <h3 className="text-3xl md:text-5xl font-black text-primary mb-4">من مشاريعنا</h3>
          <p className="text-muted-foreground max-w-4xl mx-auto text-base leading-relaxed">
            أعمال الأسفلت وتوصيل المواسير في المنطقة الشرقية (الأحساء - الخبر - الدمام - الجبيل). نقدم خدمات متكاملة في تنفيذ أعمال الأسفلت وتمديد وتوصيل المواسير بمختلف أنواعها وفق أعلى معايير الجودة والسلامة.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-10">
          {[
            'أعمال أسفلت الطرق والمواقف',
            'تمديد شبكات المياه',
            'أعمال الحفر والتسوية',
            'توصيل المواسير',
            'بناء المستودعات',
            'أعمال البنية التحتية',
          ].map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative group overflow-hidden rounded-2xl border border-border bg-card aspect-[4/3] flex items-end card-hover"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="relative p-5">
                <span className="text-white font-bold text-lg">{project}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
