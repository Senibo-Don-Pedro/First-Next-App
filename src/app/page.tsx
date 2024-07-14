import Hero from "@/components/Hero";
import homeImg from "/public/home.jpg";

export default function Home() {
  return (
    <Hero
      imgData={homeImg}
      imgAlt="Car factory"
      title="Professional Cloud Hosting"
    />
  );
}
