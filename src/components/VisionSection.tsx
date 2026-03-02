import { motion } from 'framer-motion'
import { Eye, Target, Handshake } from 'lucide-react'

const items = [
  {
    icon: Eye,
    title: 'رؤيتنا',
    text: 'كسب ثقة عملائنا الكرام وتوسيع قاعدة المستفيدين من خدماتنا المتميزة. نسعى إلى تزويد عملائنا بتجربة استثنائية وقيمة مضافة وميزة تنافسية، مع التركيز الكامل على تحقيق رضاهم التام.',
  },
  {
    icon: Target,
    title: 'مهمتنا',
    text: 'نفخر بمجموعتنا التي أسست خبرات متراكمة ومعرفة عملية واسعة. لقد حشدنا جميع طاقاتنا لنكون في طليعة المجموعات التي تسعى للنهضة في شتى المجالات على مستوى المملكة، بما يتماشى مع رؤية المملكة 2030.',
  },
  {
    icon: Handshake,
    title: 'التزامنا',
    text: 'نلتزم بتقديم خدماتنا بمستوى مرموق ووفقاً لأعلى معايير الجودة العالمية وأفضل الممارسات، باستخدام أحدث التقنيات والمعدات، وتوظيف أمثل للخبرات الطويلة لكوادرنا.',
  },
]

export default function VisionSection() {
  return (
    <section id="vision" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-sm font-bold text-primary mb-2">ما يميزنا</h2>
          <h3 className="text-3xl md:text-5xl font-black text-foreground">رؤيتنا ورسالتنا وقيمنا</h3>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-card border border-border rounded-2xl p-8 card-hover"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-5">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <h4 className="text-2xl font-black text-primary mb-4">{item.title}</h4>
              <p className="text-muted-foreground leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
