import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "./footer.styles";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink>Testimonials</FooterLink>
              <FooterLink>Careers</FooterLink>
              <FooterLink>Investors</FooterLink>
              <FooterLink>Terms of Service</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Contact Us</FooterLinkTitle>
              <FooterLink>Contact</FooterLink>
              <FooterLink>Support</FooterLink>
              <FooterLink>Destinations</FooterLink>
              <FooterLink>Sponsorships</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Videos</FooterLinkTitle>
              <FooterLink>Submit Video</FooterLink>
              <FooterLink>Ambassadors</FooterLink>
              <FooterLink>Agensy</FooterLink>
              <FooterLink>Influencer</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Social Media</FooterLinkTitle>
              <FooterLink>Instagram</FooterLink>
              <FooterLink>Facebook</FooterLink>
              <FooterLink>Youtube</FooterLink>
              <FooterLink>Twitter</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo>dolla</SocialLogo>
            <WebsiteRights>
              dolla {new Date().getFullYear()} All rights reserved
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink>
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink>
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink>
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink>
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink>
                <FaLinkedinIn />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
