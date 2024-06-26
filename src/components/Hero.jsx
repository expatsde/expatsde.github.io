import { curve, heroBackground, robot } from "../assets";
import Button from "./Button";
import Section from "./Section";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { heroIcons } from "../constants";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
import Generating from "./Generating";
import Notification from "./Notification";
import CompanyLogos from "./CompanyLogos";
import Pricing from "./Pricing";

const Hero = () => {
  const parallaxRef = useRef(null);

  const openLifeInGermany = () => {
    window.open(
      "https://mousy-relation-39a.notion.site/Life-In-Germany-b24781e2b4cd41ffb0f160879c2a3863?pvs=4",
      "_blank"
    );
  };

  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <h1 className="h1 mb-6">
            Explore the Possibilities of&nbsp;&nbsp;Moving Germany 🇩🇪 with {` `}
            <span className="inline-block relative">
              ExpatsDE{" "}
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
          </h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
            We Facilitates Smooth Relocation to Germany, Ensuring a Seamless
            Transition for Individuals. 🛫 🏡
          </p>
          <Button white onClick={openLifeInGermany}>
            Life in Germany
          </Button>
        </div>
      </div>
      <Pricing />
      <BottomLine />
    </Section>
  );
};

export default Hero;
