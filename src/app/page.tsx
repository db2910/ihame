import HeroSection from "../components/HeroSection";
import ServicesPreview from "../components/ServicesPreview";
import WhyIhame from "../components/WhyIhame";
import TrackingCallout from "../components/TrackingCallout";
import Testimonials from "../components/Testimonials";
import Partners from "../components/Partners";
import FooterCta from "../components/FooterCta";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServicesPreview />
      <WhyIhame />
      <TrackingCallout />
      <Testimonials />
      <Partners />
      <FooterCta />
    </main>
  );
}
