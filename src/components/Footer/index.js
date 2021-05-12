import React from "react";
import {animateScroll as scroll} from 'react-scroll';
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcons,
  SocialIconLink,
  WebsiteRights
} from "./FooterElements";

import {
    FaFacebook,
    FaInstagram,
    FaTwitter,
    FaYoutube,
    FaLinkedin
} from 'react-icons/fa'

const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop()
    }
  return (
    <FooterContainer>
      <FooterWrap>

        <FooterLinksContainer>
          <FooterLinkItems>
            <FooterLinkTitle> About Us </FooterLinkTitle>
            <FooterLink to="/">How it Works</FooterLink>
            <FooterLink to="/">Testimonials</FooterLink>
            <FooterLink to="/">Carrers</FooterLink>
            <FooterLink to="/">Investors</FooterLink>
            <FooterLink to="/">Terms of Service</FooterLink>
          </FooterLinkItems>

          <FooterLinkItems>
            <FooterLinkTitle> Videos </FooterLinkTitle>
            <FooterLink to="/">Submit Video</FooterLink>
            <FooterLink to="/">Ambassadors</FooterLink>
            <FooterLink to="/">Agency</FooterLink>
            <FooterLink to="/">Influencers</FooterLink>
          </FooterLinkItems>

          <FooterLinkItems>
            <FooterLinkTitle>Contact Us </FooterLinkTitle>
            <FooterLink to="/">Contact</FooterLink>
            <FooterLink to="/">Support</FooterLink>
            <FooterLink to="/">Destinations</FooterLink>
            <FooterLink to="/">Sponsoships</FooterLink>
          </FooterLinkItems>

        </FooterLinksContainer>

        <SocialMedia>
            <SocialMediaWrap>
                <SocialLogo to='/' onClick={toggleHome}>
                    dolla
                </SocialLogo>
                <WebsiteRights>dolla © {new Date().getFullYear()} All rights reserved</WebsiteRights>
                <SocialIcons>
                    <SocialIconLink href="/" target='_blank' aria-label='Facebook'>
                        <FaFacebook/>
                    </SocialIconLink>
                    <SocialIconLink href="/" target='_blank' aria-label='Instagram'>
                        <FaInstagram/>
                    </SocialIconLink>
                    <SocialIconLink href="/" target='_blank' aria-label='Twitter'>
                        <FaTwitter/>
                    </SocialIconLink>
                    <SocialIconLink href="/" target='_blank' aria-label='Youtube'>
                        <FaYoutube/>
                    </SocialIconLink>
                    <SocialIconLink href="/" target='_blank' aria-label='Linkedin'>
                        <FaLinkedin/>
                    </SocialIconLink>
                </SocialIcons>
            </SocialMediaWrap>
        </SocialMedia>

      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
