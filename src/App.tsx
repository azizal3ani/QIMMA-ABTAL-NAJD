import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import VisionSection from './components/VisionSection'
import ValuesSection from './components/ValuesSection'
import ServicesSection from './components/ServicesSection'
import ProjectsSection from './components/ProjectsSection'
import TeamSection from './components/TeamSection'
import WhyUsSection from './components/WhyUsSection'
import ContactSection from './components/ContactSection'
import FooterSection from './components/FooterSection'

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <VisionSection />
        <ValuesSection />
        <ServicesSection />
        <ProjectsSection />
        <TeamSection />
        <WhyUsSection />
        <ContactSection />
      </main>
      <FooterSection />
    </div>
  )
}
