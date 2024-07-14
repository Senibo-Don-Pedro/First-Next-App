import Image from "next/image";
import type { StaticImageData } from "next/image";

type HeroProps = {
  imgData: StaticImageData;
  imgAlt: string;
  title: string;
};

export default function Hero({ imgData, imgAlt, title }: HeroProps) {
  return (
    <div className="relative h-screen">
      <div className="absolute -z-30 inset-0">
        <Image src={imgData} alt={imgAlt} fill style={{ objectFit: "cover" }} />
      </div>
      <div className="pt-48 flex justify-center items-center">
        <h1 className="text-white text-6xl">{title}</h1>
      </div>
    </div>
  );
}
