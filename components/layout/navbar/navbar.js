import { useEffect, useState } from "react";

import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./navbar.styles";
import { FaBars } from "react-icons/fa";

import Link from "next/link";

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) setScrollNav(true);
    else setScrollNav(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
    return () => window.removeEventListener("scroll", changeNav);
  }, []);

  return (
    <Nav scrollNav={scrollNav}>
      <NavbarContainer>
        <Link href="/">
          <NavLogo>VB</NavLogo>
        </Link>
        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavLinks
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              exact="true"
              offset={-80}
            >
              About
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks
              to="discover"
              spy={true}
              smooth={true}
              duration={500}
              exact="true"
              offset={-80}
            >
              Discover
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              exact="true"
              offset={-80}
            >
              Services
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks
              to="signup"
              spy={true}
              smooth={true}
              duration={500}
              exact="true"
              offset={-80}
            >
              Sign Up
            </NavLinks>
          </NavItem>
        </NavMenu>
        <NavBtn>
          <Link href="/signin">
            <NavBtnLink>Sign In</NavBtnLink>
          </Link>
        </NavBtn>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
