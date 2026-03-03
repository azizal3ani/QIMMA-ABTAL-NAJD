import { motion } from 'framer-motion'
import { Building2, Users, Award } from 'lucide-react'
import teamHero from '@/assets/team-hero.png'

const stats = [
  { number: '+500', label: 'مشروع منجز', icon: Building2 },
  { number: '+200', label: 'عميل راضٍ', icon: Users },
  { number: '+15', label: 'سنة خبرة', icon: Award },
]

export default function AboutSection() {
  return (
    <section id="about" className="section-padding bg-secondary">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-sm font-bold text-primary mb-2">من نحن</h2>
          <h3 className="text-3xl md:text-5xl font-black text-foreground mb-8">
            شركة قمة أبطال نجد للمقاولات
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-muted-foreground text-lg leading-relaxed">
              شركة سعودية رائدة في مجالات المقاولات والأعمال الهندسية والخدمات العامة. تتميز الشركة بتقديم مجموعة واسعة من الخدمات التخصصية التي تواكب أحدث التطورات وتلبي المتطلبات المتغيرة لمختلف القطاعات.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              نهدف إلى تحقيق تطلعات عملائنا من خلال تقديم حلول مبتكرة وغير تقليدية تتجاوز توقعاتهم، مع الالتزام بأعلى معايير الدقة والصرامة في التنفيذ والاهتمام بأدق التفاصيل في جميع الجوانب.
            </p>
            <div className="grid grid-cols-3 gap-4 pt-4">
              {stats.map((stat, i) => (
                <div key={i} className="bg-card rounded-xl p-6 text-center card-hover border border-border">
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <span className="text-3xl md:text-4xl font-black text-primary block">{stat.number}</span>
                  <span className="text-muted-foreground text-sm font-semibold">{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <img
              src={teamHero}
              alt="فريق قمة أبطال نجد"
              className="w-full max-w-lg h-auto object-contain"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
