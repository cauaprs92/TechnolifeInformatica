import Hero from "@/components/Hero";
import ClientMarquee from "@/components/ClientMarquee";
import ServicePillars from "@/components/ServicePillars";
import TeamLab from "@/components/TeamLab";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import CtaBand from "@/components/CtaBand";

export default function Home() {
  return (
    <>
      <Hero />
      <ClientMarquee />
      <ServicePillars />
      <TeamLab />
      <Process />
      <Testimonials />
      <CtaBand />
    </>
  );
}
