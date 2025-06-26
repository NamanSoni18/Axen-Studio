// import AboutHero from "./AboutHero";
import Capabilities from "./Capabilities";
import ContactUs from "../ContactUs";
import Empowering from "./Empowering";
import Hero from "./Hero";
import PeopleReview from "./PeopleReview";
import Pricing from "./Pricing";
// import RecentEvents from "./RecentEvents";
import Team from "./Team";
import WelcomeSection from "./WelcomeSection";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      <WelcomeSection />
      <Empowering/>
      <Capabilities/>
      {/* <RecentEvents/> */}
      <PeopleReview/>
      <ContactUs/>
      <Team/>
      <Pricing/>
      <Footer/>
    </div>
  );
};

export default Home;
