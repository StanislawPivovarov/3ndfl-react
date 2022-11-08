import styled from "styled-components";
import Background from "../assets/images/main-page/background.png";

export const MainPage = styled.div`
  display
  width: 100%;
  height: 100%;
  background-image: url(${Background});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #000;
  @media(min-width: 992px){
    height: max-content;
  }
  @media(min-width: 1200px){
    height: 100vh
  }
  @media(max-height: 800px){
    height: max-content
  }
  `;

export const MainPageHeader = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 992px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
  }
`;

export const Logotype = styled.img`
  width: 229px;
  height: 55px;
  display: flex;
  @media (min-width: 320px) {
    margin: 20px auto 0px auto;
  }
  @media(max-width: 992px){
    margin-bottom: 35px; 
  }
`;

export const MainPagePhone = styled.div`
  margin-bottom: 5px;
  display: flex;
  justify-content: center;
`;
export const MainPagePhoneWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  @media(max-width: 992px){
    margin-bottom: 35px;
  }
`;
export const PhoneIcon = styled.img`
  width: 24.14px;
  height: 24.14px;
`;

export const PhoneNumber = styled.a`
  text-decoration: none;
  margin-left: 12px;
  color: #fff;
  font-family: "Montserrat-regular";
  letter-spacing: 0%;
  font-weight: 600;
  font-size: 20px;
  line-height: 26px;
  text-align: center;
  text-transform: uppercase;
  
`;
export const WhatsAppIcon = styled.svg`
  width: 21px;
  height: 21px;
`;
export const ButtonWrap = styled.div`
display: flex;
flex-direction: row;
width: 100%;
padding: 0px 16px 0px 16px;

}
`;
export const WaText = styled.p`
  font-family: "Montserrat-Regular", sans-serif;
  font-weight: 400;
  margin: 8px 0px 8px 9px;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0em;
  margin-top: 0px !important;
  margin-bottom: 0px !important;

`;

export const ButtonPosition = styled.div`
  display: flex;
  width: max-content;
  height: max-content;
  margin-bottom: 8px;
  @media (max-width: 992px) {
    margin: 0 auto;
  }
`;

export const HeaderParagraph = styled.p`
  color: #fff;
  font-family: "Montserrat-semibold", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  @media(min-width: 320px){
    line-height: 43.8px;
  }
  @media(min-width: 992px){
    margin-bottom: 61px;
  }
  @media (min-width: 1200px) {
    font-size: 54px;
    line-height: 66px;
    margin-bottom: 35px;
  }
`;
export const SubParagraph = styled.p`
  color: #fff;
  font-family: "Montserrat-SemiBold", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  margin-bottom: 20px;
  line-height: 120%;
  @media (min-width: 1200px) {
    font-size: 24px;
    max-width: 580px;
  }
`;

export const Filling = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  flex-direction: column;
  padding: 36px 0px 64px 0px;
  @media (min-width: 992px) {
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    margin-top: 93px;
    padding-top: 0;
  }
  @media (min-width: 1200px) {
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    margin-top: 115px;
  }
`;

export const FillingWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
