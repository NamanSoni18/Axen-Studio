import OurStudio from "./OurStudio";
import OurVision from "./OurVision";
import OurTeam from "./OurTeam";
import Footer from "../Footer/Footer";
import Hero_About from "./Hero";

export default function About() {
  return (
    <div className="flex flex-col gap-16">
      <Hero_About/>
      <OurVision/>
      <OurStudio/>
      <OurTeam/>
      <Footer/>
    </div>
  );
}
