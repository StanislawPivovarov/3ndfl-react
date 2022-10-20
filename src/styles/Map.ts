import styled from "styled-components";

export const Wrapper = styled.div`
display: flex;
flex-direction: column;
@media(min-width: 992px){
  flex-direction: row-reverse;
}
`

export const AdressWrapper = styled.div`
margin: 64px 70px 43px 16px;
  background: #fff;

  @media(min-width: 786px){
    padding: 64px 65px 32px 43px;
  }
  @media(min-width: 992px){
    position: absolute;
    z-index: 10;
    display: flex;
    flex-direction: column;
  }
  @media(max-wisth: 768px){
    box-shadow: 0px 9px 28px 8px rgba(0, 0, 0, 0.05), 0px 6px 16px rgba(0, 0, 0, 0.08), 0px 3px 6px -4px rgba(0, 0, 0, 0.12);
  }
`;

export const ContactInfo = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-family: "Montserrat-SemiBold";
  font-size: 36px;
  line-height: 44px;
  margin-bottom: 16px;
`;
export const Lists = styled.div`
list-style-type: none;
margin-bottom: 16px;
`
export const Subheader = styled.div`
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 25px;
font-family: "OpenSans-Regular";
margin-bottom: 16px;
`
export const ListElement = styled.div`
font-weight: 400;
font-size: 14px;
font-family: "OpenSans-Regular";
line-height: 19px;
margin-bottom: 16px;
`
export const SocialWrapper = styled.div`
display: flex;
flex-direction: row;
align-items: center;
`
export const SocialIcon = styled.img`
width: 30px;
height: 30px;
`
export const Subs = styled.p`
margin-left: 10px;
margin-bottom: 0px;
height: max-content;
`
export const MailLink = styled.a`
font-style: normal;
font-family: "OpenSans-Regular";
font-weight: 400;
font-size: 14px;
line-height: 19px;
color: #0000FF;
&:hover{
  color: #0000FF;
}
`
export const LinkWrapper = styled.div`
margin-bottom: 37px;
`

export const MapWrapper = styled.div`
width: 100%;

`