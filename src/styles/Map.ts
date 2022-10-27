import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 992px) {
    flex-direction: row-reverse;
    align-items: center;
  }
`;

export const AdressWrapper = styled.div`
  background: #fff;
  @media(min-width: 320px){
    padding: 32px 16px;
  }
  @media(min-width: 768px){
    padding: 64px 109px 32px 187px;
    width: 580px;
    
  }
  @media (min-width: 992px) {
    margin: 0 30px 0 0;
    position: absolute;
    z-index: 10;
    display: flex;
    flex-direction: column;
    padding: 30px;
    box-shadow: 0px 9px 28px 8px rgba(0, 0, 0, 0.05),
    0px 6px 16px rgba(0, 0, 0, 0.08), 0px 3px 6px -4px rgba(0, 0, 0, 0.12);
    width: 450px;

  }
  @media (min-width: 1200px) {
    margin: 0 240px 0 0;
  }
`;

export const ContactInfo = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-family: "Montserrat-SemiBold";
  font-size: 36px;
  line-height: 44px;
  margin-bottom: 16px;
  @media(min-width: 992px){
    font-size: 24px;
  }
`;
export const Lists = styled.div`
  list-style-type: none;
  margin-bottom: 16px;
`;
export const Subheader = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;
  font-family: "OpenSans-Regular";
  margin-bottom: 16px;
`;
export const ListElement = styled.div`
  font-weight: 400;
  font-size: 14px;
  font-family: "OpenSans-Regular";
  line-height: 19px;
  margin-bottom: 16px;
`;
export const SocialWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const SocialIcon = styled.img`
  width: 30px;
  height: 30px;
`;
export const Subs = styled.p`
  margin-left: 10px;
  margin-bottom: 0px;
  height: max-content;
`;
export const MailLink = styled.a`
  font-style: normal;
  font-family: "OpenSans-Regular";
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  color: #11b7e9;
  &:hover {
    color: #11b7e9;
  }
`;
export const LinkWrapper = styled.div`
  margin-bottom: 37px;
`;

export const MapWrapper = styled.div`
  width: 100%;
`;
