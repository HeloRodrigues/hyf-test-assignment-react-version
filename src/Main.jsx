import React from "react";
import styled from "styled-components";
import InfoCard from "./components/InfoCard";
import { ReactComponent as WifiIcon } from "./icons/wifi.svg";
import { ReactComponent as Coffee } from "./icons/coffee.svg";
import { ReactComponent as FingerPrint } from "./icons/fingerPrint.svg";
import { ReactComponent as Lock } from "./icons/lock.svg";
import { ReactComponent as Tv } from "./icons/tv.svg";
import { ReactComponent as Printer } from "./icons/printer.svg";

const Main = () => {
  const cards = [
    {
      icon: <WifiIcon width={30} fill={"#3399ff"} />,
      title: "Fiber Optic Wifi",
    },
    {
      icon: <Coffee width={30} fill={"#3399ff"} />,
      title: "Cafeteria",
    },
    {
      icon: <Tv width={30} fill={"#3399ff"} />,
      title: "Flexible Desks",
    },
    {
      icon: <Lock width={30} fill={"#3399ff"} />,
      title: "Lockers",
    },
    {
      icon: <FingerPrint width={30} fill={"#3399ff"} />,
      title: "100% secure",
    },
    {
      icon: <Printer width={30} fill={"#3399ff"} />,
      title: "Printer & Fax",
    },
  ];

  return (
    <MainContent>
      <IntroductionSection>
        <IntroductionTitle>
          We are making better <br />
          <IntroductionTitleDecoration>CoWorking </IntroductionTitleDecoration>
          for you.
        </IntroductionTitle>
        <IntroductionText>
          Collaboratively coordinate adaptative synergyy with compelling
          "outside of the box" thinking. Continually recaptualize user friendly
          sources whereas leveraged.
        </IntroductionText>
      </IntroductionSection>
      <PresentationSection>
        <PresentationSectionImg src="https://images.unsplash.com/photo-1594732832278-abd644401426?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjA5OTIyNjY&ixlib=rb-1.2.1&q=80" />
        <PresentationText>
          The Center is a network of 9 workspaces,
          <br />
          from 200 to 3,700 sqft, Build and
          <br />
          Designed to support Personal and
          <br />
          Bussinesses in the Creative World.
        </PresentationText>
      </PresentationSection>
      <InformationSection id="info-section">
        {cards.map((card) => (
          <InfoCard icon={card.icon} title={card.title} />
        ))}
      </InformationSection>
    </MainContent>
  );
};

const MainContent = styled.main`
  display: flex;
  flex-direction: column;
  animation: fadeIn 5s;
  font-family: "Poppins", sans-serif;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const IntroductionSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin-inline: 40px;
  line-height: 25px;
`;

const IntroductionTitle = styled.h1`
  font-size: 40px;
  font-weight: 600;
  line-height: 50px;
  color: #455a64;
  width: 450px;
  height: 150px;
`;

const IntroductionTitleDecoration = styled.span`
  color: #3399ff;
`;

const IntroductionText = styled.p`
  width: 350px;
  height: 150px;
  color: #607d8b;
`;

const PresentationSection = styled.section`
  position: relative;
`;

const PresentationSectionImg = styled.img`
  width: 100%;
  height: 550px;
  margin-top: 50px;
`;

const PresentationText = styled.p`
  position: absolute;
  top: 140px;
  left: 40px;
  color: white;
  font-size: 30px;
  font-weight: 600;
`;

const InformationSection = styled.section`
  display: flex;
  padding-top: 20px;
  margin-inline: 30px;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export default Main;
