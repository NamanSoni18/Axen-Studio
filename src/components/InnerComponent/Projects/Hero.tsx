import { projects_assets } from "@/assets/Projects/projects_assets";
import Hero from "../Hero";

export default function Hero_Projects() {
  return (
    <Hero
      title="Our Projects"
      bottomTitle="Transforming Moments into"
      gradientText="Excellence"
      image1={projects_assets.hero_img1}
      image2={projects_assets.hero_img2}
      image1Alt="Concert scene"
      image2Alt="Photographer with camera"
    />
  );
}
