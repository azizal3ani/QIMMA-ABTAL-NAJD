import { createContext, useContext, useState, ReactNode } from 'react'

type Lang = 'ar' | 'en'

interface LanguageContextType {
  lang: Lang
  toggleLang: () => void
  t: (key: string) => string
}

const translations: Record<string, Record<Lang, string>> = {
  // Navbar
  'nav.brand': { ar: 'قمة أبطال نجد', en: 'Qimma Abtal Najd' },
  'nav.about': { ar: 'من نحن', en: 'About Us' },
  'nav.vision': { ar: 'رؤيتنا', en: 'Our Vision' },
  'nav.values': { ar: 'قيمنا', en: 'Our Values' },
  'nav.services': { ar: 'خدماتنا', en: 'Services' },
  'nav.projects': { ar: 'مشاريعنا', en: 'Projects' },
  'nav.whyUs': { ar: 'لماذا نحن', en: 'Why Us' },
  'nav.contact': { ar: 'تواصل معنا', en: 'Contact Us' },
  'nav.callUs': { ar: 'اتصل بنا', en: 'Call Us' },

  // Hero
  'hero.brand': { ar: 'قمة أبطال نجد', en: 'Qimma Abtal Najd' },
  'hero.tagline': { ar: 'نبني قصص النجاح', en: 'Building Success Stories' },
  'hero.contact': { ar: 'تواصل معنا', en: 'Contact Us' },
  'hero.services': { ar: 'خدماتنا', en: 'Our Services' },
  'hero.vision2030': { ar: 'رؤية 2030', en: 'Vision 2030' },
  'hero.vision2030sub': { ar: 'نواكب التطور', en: 'Keeping Pace' },

  // About
  'about.label': { ar: 'من نحن', en: 'About Us' },
  'about.title': { ar: 'شركة قمة أبطال نجد للمقاولات', en: 'Qimma Abtal Najd Contracting Company' },
  'about.p1': { ar: 'شركة سعودية رائدة في مجالات المقاولات والأعمال الهندسية والخدمات العامة. تتميز الشركة بتقديم مجموعة واسعة من الخدمات التخصصية التي تواكب أحدث التطورات وتلبي المتطلبات المتغيرة لمختلف القطاعات.', en: 'A leading Saudi company in contracting, engineering, and general services. The company excels in providing a wide range of specialized services that keep pace with the latest developments and meet the changing requirements of various sectors.' },
  'about.p2': { ar: 'نهدف إلى تحقيق تطلعات عملائنا من خلال تقديم حلول مبتكرة وغير تقليدية تتجاوز توقعاتهم، مع الالتزام بأعلى معايير الدقة والصرامة في التنفيذ والاهتمام بأدق التفاصيل في جميع الجوانب.', en: 'We aim to achieve our clients\' aspirations by providing innovative and unconventional solutions that exceed their expectations, while adhering to the highest standards of precision and rigor in execution and attention to the finest details in all aspects.' },
  'about.stat1': { ar: 'مشروع منجز', en: 'Projects Completed' },
  'about.stat2': { ar: 'عميل راضٍ', en: 'Satisfied Clients' },
  'about.stat3': { ar: 'سنة خبرة', en: 'Years of Experience' },

  // Vision
  'vision.label': { ar: 'ما يميزنا', en: 'What Sets Us Apart' },
  'vision.title': { ar: 'رؤيتنا ورسالتنا وقيمنا', en: 'Our Vision, Mission & Values' },
  'vision.t1': { ar: 'رؤيتنا', en: 'Our Vision' },
  'vision.d1': { ar: 'كسب ثقة عملائنا الكرام وتوسيع قاعدة المستفيدين من خدماتنا المتميزة. نسعى إلى تزويد عملائنا بتجربة استثنائية وقيمة مضافة وميزة تنافسية، مع التركيز الكامل على تحقيق رضاهم التام.', en: 'Earning the trust of our valued clients and expanding the base of beneficiaries of our distinguished services. We strive to provide our clients with an exceptional experience, added value, and competitive advantage, with full focus on achieving their complete satisfaction.' },
  'vision.t2': { ar: 'مهمتنا', en: 'Our Mission' },
  'vision.d2': { ar: 'نفخر بمجموعتنا التي أسست خبرات متراكمة ومعرفة عملية واسعة. لقد حشدنا جميع طاقاتنا لنكون في طليعة المجموعات التي تسعى للنهضة في شتى المجالات على مستوى المملكة، بما يتماشى مع رؤية المملكة 2030.', en: 'We take pride in our group that has built accumulated expertise and extensive practical knowledge. We have mobilized all our energies to be at the forefront of groups seeking advancement in various fields across the Kingdom, in line with Saudi Vision 2030.' },
  'vision.t3': { ar: 'التزامنا', en: 'Our Commitment' },
  'vision.d3': { ar: 'نلتزم بتقديم خدماتنا بمستوى مرموق ووفقاً لأعلى معايير الجودة العالمية وأفضل الممارسات، باستخدام أحدث التقنيات والمعدات، وتوظيف أمثل للخبرات الطويلة لكوادرنا.', en: 'We are committed to delivering our services at a prestigious level and according to the highest international quality standards and best practices, using the latest technologies and equipment, and optimal utilization of our teams\' extensive experience.' },

  // Values
  'values.label': { ar: 'مبادئنا', en: 'Our Principles' },
  'values.title': { ar: 'قيمنا', en: 'Our Values' },
  'values.v1': { ar: 'الريادة والإبداع', en: 'Leadership & Innovation' },
  'values.v1d': { ar: 'تبني الأفكار الجديدة والحلول المبتكرة لمواجهة التحديات', en: 'Adopting new ideas and innovative solutions to face challenges' },
  'values.v2': { ar: 'السلامة المهنية', en: 'Occupational Safety' },
  'values.v2d': { ar: 'توفير بيئة عمل آمنة وصحية لجميع العاملين', en: 'Providing a safe and healthy work environment for all employees' },
  'values.v3': { ar: 'الاحترافية', en: 'Professionalism' },
  'values.v3d': { ar: 'تقديم خدمات متخصصة بواسطة فريق عمل مؤهل وذو خبرة عالية', en: 'Delivering specialized services by a qualified and highly experienced team' },
  'values.v4': { ar: 'الاستدامة', en: 'Sustainability' },
  'values.v4d': { ar: 'الالتزام بالممارسات الصديقة للبيئة والمساهمة في التنمية المستدامة', en: 'Commitment to eco-friendly practices and contributing to sustainable development' },
  'values.v5': { ar: 'المصداقية والأمانة', en: 'Integrity & Trust' },
  'values.v5d': { ar: 'الالتزام بأعلى معايير النزاهة والشفافية في جميع التعاملات', en: 'Adhering to the highest standards of integrity and transparency in all dealings' },
  'values.v6': { ar: 'الجودة والتميز', en: 'Quality & Excellence' },
  'values.v6d': { ar: 'السعي الدائم لتقديم خدمات عالية الجودة تفوق توقعات العملاء', en: 'Constant pursuit of delivering high-quality services that exceed client expectations' },
  'values.v7': { ar: 'الأصالة والعراقة', en: 'Heritage & Authenticity' },
  'values.v7d': { ar: 'الحفاظ على الهوية والقيم الأصيلة مع التطلع نحو المستقبل', en: 'Preserving identity and authentic values while looking toward the future' },
  'values.v8': { ar: 'التجديد والتحديث', en: 'Renewal & Modernization' },
  'values.v8d': { ar: 'التطوير المستمر للخدمات والعمليات لمواكبة أحدث التقنيات', en: 'Continuous development of services and operations to keep up with the latest technologies' },

  // Services
  'services.label': { ar: 'ماذا نقدم', en: 'What We Offer' },
  'services.title': { ar: 'من خدماتنا', en: 'Our Services' },
  'services.desc': { ar: 'بشغف بلا حدود، نسعى جاهدين لتقديم باقات من الخدمات التخصصية الشاملة والمتكاملة التي تشمل خيارات متعددة تناسب كافة الاحتياجات.', en: 'With boundless passion, we strive to provide comprehensive and integrated packages of specialized services that include multiple options to suit all needs.' },
  'services.s1': { ar: 'إسفلت', en: 'Asphalt' },
  'services.s2': { ar: 'حفر', en: 'Excavation' },
  'services.s3': { ar: 'توريد مواد', en: 'Material Supply' },
  'services.s4': { ar: 'تأجير معدات', en: 'Equipment Rental' },
  'services.s5': { ar: 'ترحيل مواد', en: 'Material Transport' },
  'services.s6': { ar: 'نقل معدات', en: 'Equipment Moving' },
  'services.s7': { ar: 'تسوية تربة', en: 'Soil Leveling' },
  'services.s8': { ar: 'ردم', en: 'Backfilling' },
  'services.s9': { ar: 'شفط مياه', en: 'Water Pumping' },
  'services.s10': { ar: 'توصيل مواسير', en: 'Pipe Installation' },
  'services.s11': { ar: 'أعمال إسناد', en: 'Shoring Works' },
  'services.s12': { ar: 'بناء', en: 'Construction' },
  'services.s13': { ar: 'هدم', en: 'Demolition' },
  'services.s14': { ar: 'بناء مستودعات', en: 'Warehouse Building' },
  'services.s15': { ar: 'مرفق مجي', en: 'Facilities' },
  'services.s16': { ar: 'انترلوك', en: 'Interlock' },

  // Projects
  'projects.label': { ar: 'أعمالنا', en: 'Our Work' },
  'projects.title': { ar: 'من مشاريعنا', en: 'Our Projects' },
  'projects.desc': { ar: 'أعمال الأسفلت وتوصيل المواسير في المنطقة الشرقية (الأحساء - الخبر - الدمام - الجبيل). نقدم خدمات متكاملة وفق أعلى معايير الجودة والسلامة.', en: 'Asphalt and pipe installation works in the Eastern Region (Al-Ahsa - Al-Khobar - Dammam - Jubail). We provide integrated services according to the highest quality and safety standards.' },
  'projects.p1': { ar: 'تنفيذ أعمال البناء', en: 'Construction Works' },
  'projects.p1d': { ar: 'سكنية، تجارية، صناعية بأعلى معايير الجودة', en: 'Residential, commercial, industrial with highest quality standards' },
  'projects.p2': { ar: 'تصميم وتنفيذ المستودعات', en: 'Warehouse Design & Build' },
  'projects.p2d': { ar: 'مواصفات عملية للتخزين والصناعة', en: 'Practical specs for storage and industry' },
  'projects.p3': { ar: 'أعمال الحفر ودعم التربة', en: 'Excavation & Shoring' },
  'projects.p3d': { ar: 'أنظمة وتقنيات حديثة لضمان السلامة', en: 'Modern systems and techniques for safety' },
  'projects.p4': { ar: 'حلول لوجستية متكاملة', en: 'Integrated Logistics' },
  'projects.p4d': { ar: 'دعم المشاريع وتنظيم المواد والمعدات', en: 'Project support and material organization' },
  'projects.p5': { ar: 'تمديد شبكات المياه', en: 'Water Network Extension' },
  'projects.p5d': { ar: 'توصيل المواسير بمختلف أنواعها', en: 'Pipe installation of all types' },
  'projects.p6': { ar: 'تأجير المعدات الثقيلة', en: 'Heavy Equipment Rental' },
  'projects.p6d': { ar: 'أسطول متكامل من المعدات الحديثة', en: 'Complete fleet of modern equipment' },
  'projects.p7': { ar: 'نقل المعدات الثقيلة', en: 'Heavy Equipment Transport' },
  'projects.p7d': { ar: 'نقل آمن وسريع للمعدات بين المواقع', en: 'Safe and fast equipment transport between sites' },
  'projects.p8': { ar: 'شفط المياه', en: 'Water Pumping' },
  'projects.p8d': { ar: 'وحدات شفط متخصصة بكفاءة عالية', en: 'Specialized high-efficiency pumping units' },

  // Team
  'team.label': { ar: 'فريقنا', en: 'Our Team' },
  'team.title': { ar: 'فريق عمل متكامل', en: 'A Complete Team' },
  'team.desc': { ar: 'نفخر بفريق عمل سعودي متخصص يمتلك الخبرة والكفاءة لتنفيذ المشاريع بأعلى المعايير', en: 'We are proud of a specialized Saudi team with the expertise and competence to execute projects to the highest standards' },

  // Why Us
  'whyUs.label': { ar: 'تميزنا', en: 'Our Excellence' },
  'whyUs.title': { ar: 'أسباب تجعلك تختار قمة أبطال نجد', en: 'Reasons to Choose Qimma Abtal Najd' },
  'whyUs.r1': { ar: 'الالتزام بتسليم المشاريع في الوقت المحدد', en: 'Commitment to on-time project delivery' },
  'whyUs.r2': { ar: 'الاهتمام بأدق التفاصيل والعناية باهتمامات الزبائن', en: 'Attention to finest details and client concerns' },
  'whyUs.r3': { ar: 'التحسين المستمر والتطوير الدائم لأساليب العمل', en: 'Continuous improvement and development of work methods' },
  'whyUs.r4': { ar: 'نعمل بلا كلل لإتقان عملنا على أكمل وجه', en: 'We work tirelessly to perfect our craft' },
  'whyUs.r5': { ar: 'تتميز مشاريعنا بالفخامة والأناقة والتصاميم العصرية', en: 'Our projects feature luxury, elegance, and modern designs' },
  'whyUs.r6': { ar: 'الجودة العالية والأسعار التنافسية', en: 'High quality and competitive prices' },
  'whyUs.r7': { ar: 'إجراءات أمان ممتازة وخصوصية عالية', en: 'Excellent security measures and high privacy' },
  'whyUs.r8': { ar: 'نعمل بجد لتوفير متطلبات العملاء والذوق الرفيع', en: 'We work hard to meet client requirements and refined taste' },
  'whyUs.r9': { ar: 'تقديم خيارات دفع مرنة للعملاء', en: 'Offering flexible payment options for clients' },
  'whyUs.r10': { ar: 'استخدام أفضل الخامات وأجود المواد', en: 'Using the best materials and finest quality' },

  // Contact
  'contact.label': { ar: 'تواصل معنا', en: 'Contact Us' },
  'contact.title': { ar: 'نبني قصص النجاح', en: 'Building Success Stories' },
  'contact.desc': { ar: 'نحن هنا لخدمتكم. لا تترددوا في التواصل معنا', en: 'We are here to serve you. Don\'t hesitate to contact us' },
  'contact.location': { ar: 'المملكة العربية السعودية', en: 'Saudi Arabia' },

  // Footer
  'footer.brand': { ar: 'قمة أبطال نجد للمقاولات', en: 'Qimma Abtal Najd Contracting' },
  'footer.brandEn': { ar: 'QIMMA ABTAL NAJD CONTRACTING COMPANY', en: 'QIMMA ABTAL NAJD CONTRACTING COMPANY' },
  'footer.rights': { ar: 'جميع الحقوق محفوظة', en: 'All Rights Reserved' },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('ar')

  const toggleLang = () => {
    setLang(prev => prev === 'ar' ? 'en' : 'ar')
  }

  const t = (key: string) => {
    return translations[key]?.[lang] || key
  }

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      <div dir={lang === 'ar' ? 'rtl' : 'ltr'} className={lang === 'en' ? 'font-sans' : ''}>
        {children}
      </div>
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
