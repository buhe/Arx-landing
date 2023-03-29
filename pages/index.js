import NavBar from "../Components/NavBar";
import Hero from "../Components/Hero";
import Featured from "../Components/Featured";
import Step from "../Components/Step";
import Projects from "../Components/Projects";
import Clients from "../Components/Clients";
import Concepts from "../Components/Concepts";
import Footer from "../Components/Footer";
import ScrollToTop from "react-scroll-to-top";

export default function Home() {
  return (
    <>
      <ScrollToTop smooth color="#14213d" style={{ borderRadius: 0 }} />
      <NavBar />
      <Hero />
      <Featured />
      <Step />
      <Projects />
      <Clients />
      <Concepts />
      <Footer />
    </>
  );
}
