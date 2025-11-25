import { useEffect } from "react";

import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollReveal from 'scrollreveal';



const App = () => {
  useEffect(() => {
    // Optional: You can trigger any additional initialization logic here
    // src/helper/anim.js

    // Initialize ScrollReveal
    ScrollReveal({
      reset: true,
      distance: "80px",
      duration: 2000,
      delay: 100,
    });

    // Define reveal animations
    ScrollReveal().reveal(" .headings", { origin: "top" });
    ScrollReveal().reveal(
      " .services-container, .portfolio-box, .contact form",
      { origin: "bottom" }
    );
    
  }, []);
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
