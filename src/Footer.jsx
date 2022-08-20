import React from "react";
import styled from "styled-components";
import FooterCards from "./components/FooterCards";

const Footer = () => {
  const toTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const featureLinks = [
    "Help Center",
    "Paid with Mobile",
    "Status",
    "Contact support",
  ];

  const supportLinks = ["Home", "About", "FAQs", "Support"];

  const trendingLinks = ["Shop", "Portfolio", "Blog"];

  const getToKnowLinks = ["Corporate", "Agency", "eCommerce", "Personal"];

  return (
    <footer>
      <FooterLinks>
        <FooterCards title="Features" links={featureLinks} />
        <FooterCards title="Support" links={supportLinks} />
        <FooterCards title="Trending" links={trendingLinks} />
        <FooterCards title="Get To Know Us" links={getToKnowLinks} />
        <FooterCardInstagram>
          <h4>Instagram Photos</h4>
          <FooterInstagramButton>
            Fetching Photos From Instagram...
          </FooterInstagramButton>
          <FooterBackToTopButton onClick={toTop}>
            Back to top
          </FooterBackToTopButton>
        </FooterCardInstagram>
      </FooterLinks>
    </footer>
  );
};

const FooterLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  background-color: #3399ff;
  color: white;
  margin-block-end: -10px;
  padding-top: 20px;
  font-family: "Poppins", sans-serif;
  font-size: 15px;
  font-weight: 300;
`;

const FooterCardInstagram = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 250px;
`;

const FooterInstagramButton = styled.button`
  padding: 10px 40px;
  border: none;
  border-radius: 3px;
  background-color: #ffffcc;
  color: #ae8c05;
  font-size: 12px;
  opacity: 90%;
  box-shadow: 0 5px 5px #1e88e5;

  &:hover {
    background-color: #ae8c05;
    color: #ffffcc;
    opacity: 100%;
    transition: 2s;
    cursor: pointer;
  }
`;

const FooterBackToTopButton = styled.button`
  width: 100px;
  padding: 6px;
  align-self: center;
  margin-top: 80px;
  border-radius: 3px;
  border: none;
  cursor: pointer;
  background-color: #ffffcc;
  color: #ae8c05;
  box-shadow: 0 5px 5px #1e88e5;
  font-size: 12px;
  opacity: 90%;

  &:hover {
    background-color: #ae8c05;
    color: #ffffcc;
    opacity: 100%;
    transition: 2s;
  }
`;

export default Footer;
