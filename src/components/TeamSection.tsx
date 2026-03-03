import { motion } from 'framer-motion'
import teamGroup from '@/assets/team-group.png'

export default function TeamSection() {
  return (
    <section className="section-padding bg-card">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-sm font-bold text-primary mb-2">فريقنا</h2>
          <h3 className="text-3xl md:text-5xl font-black text-foreground mb-4">
            فريق عمل متكامل
          </h3>
          <p className="text-muted-foreground max-w-3xl mx-auto text-base leading-relaxed">
            نفخر بفريق عمل سعودي متخصص يمتلك الخبرة والكفاءة لتنفيذ المشاريع بأعلى المعايير
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl overflow-hidden border border-border bg-secondary"
        >
          <img
            src={teamGroup}
            alt="فريق عمل شركة قمة أبطال نجد"
            className="w-full h-auto object-contain mx-auto"
          />
        </motion.div>
      </div>
    </section>
  )
}
