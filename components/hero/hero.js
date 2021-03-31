import { useState } from "react";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./hero.styles";

import Button from "../ui/button";

const Hero = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => setHover(!hover);

  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg
          autoPlay
          loop
          muted
          layout="fill"
          src={require("../../public/videos/video.mp4")}
          type="video/mp4"
        />
      </HeroBg>
      <HeroContent>
        <HeroH1>Virtual Banking Made Easy</HeroH1>
        <HeroP>
          Sign up for a new account today and receive $250 in credit towards
          yours next payment.
        </HeroP>
        <HeroBtnWrapper>
          <Button
            primary="true"
            dark="true"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            to="signup"
            spy={true}
            smooth={true}
            duration={500}
          >
            Get started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
