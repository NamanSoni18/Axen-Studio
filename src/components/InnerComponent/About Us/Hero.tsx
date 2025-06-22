import { about_assets } from "@/assets/About/about_assets";
import Hero from "../Hero";

export default function Hero_About() {
  return (
    <Hero
      title="About Us"
      bottomTitle="Transforming Moments into"
      gradientText="Masterpieces"
      image1={about_assets.hero_img1}
      image2={about_assets.hero_img2}
      image1Alt="Concert scene"
      image2Alt="Photographer with camera"
    />
  );
}
