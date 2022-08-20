import React from "react";
import styled from "styled-components";

const InfoCard = (props) => {
    return(
        <InfomationCard>
        {props.icon}
        <InformationTitle>{props.title}</InformationTitle>
        <InformationText>{"Add any field to your custom form. Canvas's inbuilt Forms Processor will handle the rest. You will never have to touch any PHP codes."}</InformationText>
      </InfomationCard>
    )
}
 
const InfomationCard = styled.div`
  max-width: 400px;
  min-height: 250px;
`;


const InformationTitle = styled.h4`
  color: #455a64;
`;

const InformationText = styled.p`
  max-width: 94%;
  font-size: 15px;
  font-weight: 400;
  line-height: 25px;
  color: #607d8b;
`;

export default InfoCard