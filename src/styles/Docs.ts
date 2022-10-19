import styled from "styled-components";
import Background from "../assets/images/background.png"
export const AccordionWrapper = styled.div`
  padding: 60px 16px 64px 16px;
  background: #EAEAF0;
  background-image: url(${Background});
  background-repeat: no-repeat;
  background-size: inherit;
  @media(min-width: 992px){
    background-size: cover;
  }
  
`;
export const Header = styled.p`
  font-weight: 600;
  font-size: 36px;
  line-height: 44px;
  text-align: center;
  font-family: "Montserrat-SemiBold"
`;
