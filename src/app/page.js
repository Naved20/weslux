import {
  Header,
  Hero,
  About,
  ProgramDetails,
  Partners,
  SDG,
  NewsEvents,
  PartnersShowcase,
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
      <Partners />
      <SDG />
      <NewsEvents />
      <PartnersShowcase />
      <CTA />
      <Footer />
    </div>
  );
}