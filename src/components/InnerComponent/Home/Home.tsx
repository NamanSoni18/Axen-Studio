import Capabilities from "./Capabilities";
import Empowering from "./Empowering";
import Hero from "./Hero";
import RecentEvents from "./RecentEvents";
import WelcomeSection from "./WelcomeSection";

const Home = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      <WelcomeSection />
      <Empowering/>
      <Capabilities/>
      <RecentEvents/>
    </div>
  );
};

export default Home;
