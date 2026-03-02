import { motion } from 'framer-motion'
import { Lightbulb, Shield, Leaf, Award, Heart, Gem, RefreshCw, HardHat } from 'lucide-react'

const values = [
  { icon: Lightbulb, title: 'الريادة والإبداع', desc: 'تبني الأفكار الجديدة والحلول المبتكرة لمواجهة التحديات' },
  { icon: HardHat, title: 'السلامة المهنية', desc: 'توفير بيئة عمل آمنة وصحية لجميع العاملين' },
  { icon: Award, title: 'الاحترافية', desc: 'تقديم خدمات متخصصة بواسطة فريق عمل مؤهل وذو خبرة عالية' },
  { icon: Leaf, title: 'الاستدامة', desc: 'الالتزام بالممارسات الصديقة للبيئة والمساهمة في التنمية المستدامة' },
  { icon: Heart, title: 'المصداقية والأمانة', desc: 'الالتزام بأعلى معايير النزاهة والشفافية في جميع التعاملات' },
  { icon: Shield, title: 'الجودة والتميز', desc: 'السعي الدائم لتقديم خدمات عالية الجودة تفوق توقعات العملاء' },
  { icon: Gem, title: 'الأصالة والعراقة', desc: 'الحفاظ على الهوية والقيم الأصيلة مع التطلع نحو المستقبل' },
  { icon: RefreshCw, title: 'التجديد والتحديث', desc: 'التطوير المستمر للخدمات والعمليات لمواكبة أحدث التقنيات' },
]

export default function ValuesSection() {
  return (
    <section id="values" className="section-padding bg-secondary">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-sm font-bold text-primary mb-2">مبادئنا</h2>
          <h3 className="text-3xl md:text-5xl font-black text-primary">قيمنا</h3>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {values.map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-card border border-border rounded-xl p-5 card-hover text-center"
            >
              <v.icon className="w-8 h-8 text-primary mx-auto mb-3" />
              <h4 className="text-lg font-bold text-foreground mb-2">{v.title}</h4>
              <p className="text-muted-foreground text-sm">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
