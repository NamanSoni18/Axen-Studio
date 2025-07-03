import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/InnerComponent/Home/Home";
import Projects from "./components/InnerComponent/Projects/projects";
import ConnectUs from "./components/InnerComponent/Connect Us/ConnectUs";
import About from "./components/InnerComponent/About Us/About";
import Services from "./components/InnerComponent/Services/Services";
import Preloader from "./components/Preloader";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
    const [isLoading, setIsLoading] = useState(true);

    // This will run only once when the app mounts
    useEffect(() => {
      // You can add logic here to check if all initial data/assets are loaded
      // For now, we just show the preloader for a fixed time.
      // The preloader itself handles its timing and calls onLoaded.
    }, []);

    if (isLoading) {
      return <Preloader onLoaded={() => setIsLoading(false)} />;
    }
    return (
      <>
        <ScrollToTop />
        <Routes>
          {/* Root layout with Navbar */}
          <Route path="/" element={<Navbar />}>
            {/* Child routes */}
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="projects" element={<Projects />} />
            <Route path="connect" element={<ConnectUs />} />
            <Route path="services" element={<Services />} />
          </Route>
        </Routes>
      </>
    );
  }

  export default App;
