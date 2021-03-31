import { Fragment } from "react";

import {
  InfoContainer,
  InfoWrapper,
  ImgWrap,
  Img,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
} from "./info-section.styles";

import Button from "../ui/button";

const InfoSection = ({
  lightText,
  lightBg,
  id,
  imgStart,
  topLine,
  headLine,
  darkText,
  description,
  buttonLabel,
  alt,
  img,
  primary,
  dark,
  dark2,
}) => {
  return (
    <InfoContainer lightBg={lightBg} id={id}>
      <InfoWrapper>
        <InfoRow imgStart={imgStart}>
          <Column1>
            <TextWrapper>
              <TopLine>{topLine}</TopLine>
              <Heading lightText={lightText}>{headLine}</Heading>
              <Subtitle darkText={darkText}>{description}</Subtitle>
              <BtnWrap>
                <Button
                  to="home"
                  spy={true}
                  smooth={true}
                  duration={500}
                  exact="true"
                  offset={-80}
                  primary={primary}
                  dark={dark}
                  dark2={dark2 ? 1 : 0}
                >
                  {buttonLabel}
                </Button>
              </BtnWrap>
            </TextWrapper>
          </Column1>
          <Column2>
            <ImgWrap>
              <Img src={img} alt={alt} width={500} height={500} />
            </ImgWrap>
          </Column2>
        </InfoRow>
      </InfoWrapper>
    </InfoContainer>
  );
};

export default InfoSection;
