import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import ContactForm from "./components/Contact";
import Roadmap from "./components/Roadmap";
import Services from "./components/Services";
import AboutUs from "./components/AboutUs";
import InputForm from "./components/Input";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
     
        <InputForm />
        <ContactForm />
        <Header />
        <Hero />      
        
        <Pricing />

        <Footer />
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;
