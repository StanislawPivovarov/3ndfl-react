import styled from "styled-components";
import Background from "../assets/images/background.png";

export const WorkWrapper = styled.div`
  padding: 60px 30px 15px 30px;
  background-color: #f4f4f8;
  background-image: url(${Background});

  background-repeat: repeat-y;
  @media (min-width: 320px) {
    background-position: calc(100vw - 180px);
    padding: 60px 16px 16px 16px;
  }

  @media (min-width: 1200px) {
    background-position: calc(100vw - 25%);
    padding: 60px 30px 15px 30px;
  }
`;
export const Circle = styled.div`
  height: 40px;
  width: 40px;
  background-color: #262626;
  border-radius: 50%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
`;

export const Number = styled.p`
  color: #fff;
  font-size: 24px;
  display: block;
  text-align: center;
  font-family: "Montserrat-regular", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  font-weight: 500;
  margin-bottom: 0px;
  padding-top: 0px;
`;
export const Description = styled.p`
  padding-bottom: 15px;
  font-family: "Montserrat-bold", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  display: flex;
  align-items: center;
  margin-bottom: 0;
  @media(min-width: 992px){
    min-width: 852px
  }
  @media(min-width: 1200px){
    width: 1000px
  }
`;
export const Subdescription = styled.p`
  padding-bottom: 50px;
  font-family: "OpenSans-Regular", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  margin-bottom: 0;
  @media(min-width: 992px){
    width: 852px
  }
  @media(min-width: 1200px){
    width: 1000px
  }
`;
export const Line = styled.div`
  height: 100%;
  width: 3px;
  background-color: #262626;
  margin-left: auto;
  margin-right: auto;
  display: flex;
`;
export const Header = styled.h1`
  font-weight: 600;
  font-size: 48px;
  line-height: 44px;
  text-align: center;
  margin-bottom: 65px;
  font-family: "Montserrat-SemiBold";
  @media(min-width: 320px){
    font-size: 36px;
  }
  @media (min-width: 992px){
    font-size: 48px
  }
`;

export const RoadWrapp = styled.div`
  display: flex;
  flex-direction: row;
`;

export const RoadWord = styled.div`
@media(min-width: 320px){
  padding-left: 16px;
}
  @media (min-width: 992px) {
    padding-left: 40px;
    max-width: 1000px;
  }
`;
