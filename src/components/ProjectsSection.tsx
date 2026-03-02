import { motion } from 'framer-motion'
import projectConstruction from '@/assets/project-construction.jpg'
import projectWarehouses from '@/assets/project-warehouses.jpg'
import projectExcavation from '@/assets/project-excavation.jpg'
import projectLogistics from '@/assets/project-logistics.jpg'
import projectPipes from '@/assets/project-pipes.jpg'
import projectEquipment from '@/assets/project-equipment.jpg'
import projectTransport from '@/assets/project-transport.jpg'
import projectWater from '@/assets/project-water.jpg'

const projects = [
  { img: projectConstruction, title: 'تنفيذ أعمال البناء', desc: 'سكنية، تجارية، صناعية بأعلى معايير الجودة' },
  { img: projectWarehouses, title: 'تصميم وتنفيذ المستودعات', desc: 'مواصفات عملية للتخزين والصناعة' },
  { img: projectExcavation, title: 'أعمال الحفر ودعم التربة', desc: 'أنظمة وتقنيات حديثة لضمان السلامة' },
  { img: projectLogistics, title: 'حلول لوجستية متكاملة', desc: 'دعم المشاريع وتنظيم المواد والمعدات' },
  { img: projectPipes, title: 'تمديد شبكات المياه', desc: 'توصيل المواسير بمختلف أنواعها' },
  { img: projectEquipment, title: 'تأجير المعدات الثقيلة', desc: 'أسطول متكامل من المعدات الحديثة' },
  { img: projectTransport, title: 'نقل المعدات الثقيلة', desc: 'نقل آمن وسريع للمعدات بين المواقع' },
  { img: projectWater, title: 'شفط المياه', desc: 'وحدات شفط متخصصة بكفاءة عالية' },
]

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
            أعمال الأسفلت وتوصيل المواسير في المنطقة الشرقية (الأحساء - الخبر - الدمام - الجبيل). نقدم خدمات متكاملة وفق أعلى معايير الجودة والسلامة.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-2xl border border-border aspect-[4/3] card-hover"
            >
              <img
                src={project.img}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              <div className="absolute bottom-0 right-0 left-0 p-4">
                <h4 className="text-white font-bold text-base mb-1">{project.title}</h4>
                <p className="text-white/70 text-sm">{project.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
