import Hero from "@/components/Hero";
import reliability from "/public/reliability.jpg";

export default function ReliabilityPage() {
  return (
    <Hero
      imgData={reliability}
      imgAlt="Welding"
      title="Super high reliability"
    />
  );
}
