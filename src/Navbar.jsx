import React from "react";
import styled from "styled-components";

const Navbar = () => {
  return (
    <div>
      <NavigationBar>
        <NavLogo>
          <NavLogoFirsLetter>C</NavLogoFirsLetter>
          anvas
          <NavLogoDot>.</NavLogoDot>
        </NavLogo>
        <NavigationLinks>
          <NavAncorTag href="#">Home</NavAncorTag>
          <NavAncorTag href="#info-section">About us</NavAncorTag>
          <NavAncorTag href="#info-section">Rates</NavAncorTag>
          <NavAncorTag href="#features">Single</NavAncorTag>
          <NavAncorTag href="#features">Contact Us</NavAncorTag>
          <NavButton>
            <ButtonSvg viewBox="0 0 512 512" title="phone-alt">
              <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z" />
            </ButtonSvg>
            +(61)8-234-352-45
          </NavButton>
        </NavigationLinks>
      </NavigationBar>
    </div>
  );
};

const NavigationBar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;
  margin: 20px 40px 50px;
  font-family: 'Poppins', sans-serif;
`;

const NavLogo = styled.div`
  display: flex;
  align-items: center;
  font-size: 30px;
  font-weight: 500;
  width: 200px;
  height: 40px;
`;

const NavLogoFirsLetter = styled.span`
  background-color: #3399ff;
  color: white;
  border-radius: 3px;
  line-height: 30px;
  margin: 0;
  padding: 0 3px 0 3px;
`;

const NavLogoDot = styled.span`
  color: #3399ff;
`;

const NavigationLinks = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: 590px;
  height: 40px;
  gap: 25px;
`;

const NavAncorTag = styled.a`
  text-decoration: none;
  color: #455a64;

  &:hover {
    color: #3399ff;
  }
`;

const ButtonSvg = styled.svg`
  width: 10px;
  fill: white;
`;

const NavButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 7px;
  background-color: #3399ff;
  color: white;
  border: none;
  border-radius: 3px;
  opacity: 85%;
  cursor: pointer;
  box-shadow: 0 2px 5px #37474f;

  &:hover {
    background-color: #1565c0;
    opacity: 100%;
    transition: 2s;
  }
`;

export default Navbar;
