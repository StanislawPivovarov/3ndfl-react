import styled from "styled-components";
import Background from "../assets/images/background2.png"
export const AccordionWrapper = styled.div`
  padding: 60px 16px 64px 16px;
  background: #EAEAF0;
  background-image: url(${Background});
  background-repeat: no-repeat;
  background-size: inherit;
  @media(min-width: 992px){
  }
  
`;
export const Header = styled.p`
  font-weight: 600;
  font-size: 36px;
  line-height: 44px;
  font-family: "Montserrat-SemiBold";
  @media(max-width:768px){
    text-align: center;
  }
  @media(min-width: 1200px){
    text-align: center;
  }

`;
