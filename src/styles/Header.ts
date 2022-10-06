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
  `;

export const MainPageHeader = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Logotype = styled.img`
  padding: 20px 16px 16px;
  width: 229px;
  display: flex;
  margin-left: auto;
  margin-right: auto;
`;

export const MainPagePhone = styled.div`
  padding-bottom: 36px;
  padding-top: 36px;
  display: flex;
  justify-content: center;
`;
export const MainPagePhoneWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
export const PhoneIcon = styled.img`
  width: 24.14px;
  height: 24.14px;
`;

export const PhoneNumber = styled.a`
  text-decoration: none;
  margin-left: 12px;
  color: #fff;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 21px;
  line-height: 26px;
  text-align: center;
  text-transform: uppercase;
`;
export const WhatsAppIcon = styled.img`
  width: 21px;
  height: 21px;
`;
export const ButtonWrap = styled.div`
display: flex;
flex-direction: row;
width: 100%
padding: 0px 16px 0px 16px;

`
export const WaText = styled.p`
color: #fff;
font-family: "Montserrat", sans-serif;
font-weight: 400;
margin: 8px 0px 8px 9px;
font-size: 16px;
line-height: 24px;
letter-spacing: 0em;
margin-top: 0px !important;
margin-bottom: 0px !important;
  `

export const ButtonPosition = styled.div`
display: flex;
width: max-content;
height: max-content;
margin-right: auto;
margin-left: auto;
`

export const HeaderParagraph = styled.p`
color: #fff;
font-family: "Montserrat", sans-serif;
font-style: normal;
font-weight: 600;
font-size: 36px;
line-height: 60px;
`
export const SubParagraph = styled.p`
color: #fff;
font-family: "Montserrat", sans-serif;
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 22px;
`

export const Filling = styled.div`
padding: 48px 16px 64px 16px;
`