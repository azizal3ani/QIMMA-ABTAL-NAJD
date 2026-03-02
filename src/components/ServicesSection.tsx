import { motion } from 'framer-motion'

const services = [
  'إسفلت', 'حفر', 'توريد مواد', 'تأجير معدات',
  'ترحيل مواد', 'نقل معدات', 'تسوية تربة', 'ردم',
  'شفط مياه', 'توصيل مواسير', 'أعمال إسناد', 'بناء',
  'هدم', 'بناء مستودعات', 'مرفق مجي', 'انترلوك',
]

export default function ServicesSection() {
  return (
    <section id="services" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <h2 className="text-sm font-bold text-primary mb-2">ماذا نقدم</h2>
          <h3 className="text-3xl md:text-5xl font-black text-primary mb-4">من خدماتنا</h3>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            بشغف بلا حدود، نسعى جاهدين لتقديم باقات من الخدمات التخصصية الشاملة والمتكاملة التي تشمل خيارات متعددة تناسب كافة الاحتياجات.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-12">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="border border-primary/40 rounded-xl px-4 py-4 text-center card-hover hover:border-primary hover:bg-primary/5 cursor-default"
            >
              <span className="text-foreground font-bold">{service}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
