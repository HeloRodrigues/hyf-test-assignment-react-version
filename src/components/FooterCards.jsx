import React from "react";
import styled from "styled-components";
import FooterLink from "./FooterLink";

const FooterCards = (props) => {
  return (
    <Cards>
      <h4 id="features">{props.title}</h4>
      {props.links.map((link) => (
        <FooterLink text={link} />
      ))}
    </Cards>
  );
};

export default FooterCards;

const Cards = styled.div`
  width: 150px;
  height: 250px;

  a {
    text-decoration: none;
    color: white;

    &:hover {
      color: #b0bec5;
    }
  }
`;
