import Hero from "../Hero";
import { connect_assets } from "@/assets/ConnectUs/connect_assets";
import Innovation from "./Innovation";
import ContactForm from "./ContactForm";
import ContactUs from "../ContactUs";
import GoogleMap from "./googleMap";
import Footer from "../Footer/Footer";

const Projects = () => {
  return (
    <div>
      <Hero
        title="Connect Us"
        bottomTitle="Transforming Moments into"
        gradientText="Perfection"
        image1={connect_assets.hero_img1}
        image2={connect_assets.hero_img2}
      />
      <Innovation />
      <ContactForm />
      <ContactUs/>
      <GoogleMap/>
      <Footer/>
    </div>
  );
};

export default Projects;
