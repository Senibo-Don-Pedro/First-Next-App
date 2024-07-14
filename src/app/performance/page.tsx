import Hero from "@/components/Hero";
import performance from "/public/performance.jpg";

export default function PerformancePage() {
  return (
    <Hero
      imgData={performance}
      imgAlt="Welding"
      title="A high performance application"
    />
  );
}
