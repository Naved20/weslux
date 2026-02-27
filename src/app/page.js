import {
  Header,
  Hero,
  About,
  ProgramDetails,
  HowItWorks,
  Partners,
  SDG,
  CTA,
  Footer,
} from '@/components';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <ProgramDetails />
      <HowItWorks />
      <Partners />
      <SDG />
      <CTA />
      <Footer />
    </div>
  );
}