import styled from "styled-components";
import Background from "../assets/images/background2.png";
export const AccordionWrapper = styled.div`
  padding: 60px 16px 64px 16px;
  background: #eaeaf0;
  background-image: url(${Background});
  background-repeat: no-repeat;
  background-size: inherit;
  @media (min-width: 992px) {
  }
`;
export const Header = styled.p`
  font-weight: 600;
  font-size: 36px;
  line-height: 44px;
  font-family: "Montserrat-SemiBold";
text-align: center;
  @media(min-width: 320px){
    font-size: 36px;
  }
  @media (min-width: 992px){
    font-size: 48px
  }
`;
export const TextFilling = styled.p`
  font-weight: normal;
  font-size: 18px;
  font-family: "Montserrat-regular";
`;
