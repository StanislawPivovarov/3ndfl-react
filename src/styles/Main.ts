import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  justify-content: space-between;
  @media (min-width: 320px) {
    grid-template-columns: 100%;
    row-gap: 64px;
  }
  @media (min-width: 992px) {
    grid-template-columns: 45% 45%;
    row-gap: 120px
  }
  @media (min-width: 1200px) {
    grid-template-columns: 30% 30% 30%;
    
    row-gap: 90px;
  }
`;
export const RegisterIp = styled.div`
  padding-top: 32px;
  display: flex;
  flex-direction: column;
  @media (min-width: 992px) {
    flex-direction: row;
  }
`;
export const Img = styled.img`
  width: 243px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  @media(min-width: 992px){
    width: 353px;
    margin-top: 39px;
  }
  @media (min-width: 1200px) {
    width: 335px;
    margin-left: 61px;
    margin-top: 39px;
  }
  
`;
export const Header = styled.p`
  text-transform: uppercase;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  text-align: center;
  padding-top: 45px;
  font-family: "Montserrat-SemiBold";
  @media (min-width: 992px) {
    text-align: left;
    margin-bottom: 14px;
  }
`;

export const UlList = styled.ul`
  list-style-type: none;
  padding-left: 0px;
  margin-bottom: 60px;
  @media(max-width: 1200px){
    margin-bottom: 35px;
  }
`;

export const ListElement = styled.li`
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  padding-bottom: 15px;
  font-family: "OpenSans-Regular";
`;
export const TextWrapper = styled.div`
  width: 100%;
`;
export const Baseline = styled.div`
  display: block;
  margin: 0 auto 0 auto;
  @media (min-width: 768px) {
    width: 510px;
  }
  @media (min-width: 992px) {
    width: 930px;
  }
  @media (min-width: 1200px) {
    width: 1140px;
  }
`;

export const BaselineForm = styled.div`
display: block;
margin: 0 auto 0 auto;
@media(min-width: 320px){
  width: 100%;
}
@media (min-width: 768px) {
  width: 510px;
}
@media (min-width: 992px) {
  width: 962px;
}
@media (min-width: 1200px){
  width: 1140px;
}
`
export const BaselineHeader = styled.div`
  display: block;
  margin: 0 auto 0 auto;
  @media (min-width: 320px){
    padding: 0 16px;
  }
  @media (min-width: 768px) {
    width: 510px;
  }
  @media (min-width: 992px) {
    width: 932px;
  }
  @media (min-width: 1200px) {
    width: 1140px;
  }
`;

export const BaselineMain = styled.div`
display: block;
  margin: 0 auto 0 auto;
  @media(min-width: 320px){
    padding: 64px 16px 64px 16px;
  }
  @media (min-width: 768px) {
    width: 510px;
  }
  @media (min-width: 992px) {
    width: 740px;
    padding: 100px 16px 100px 16px;
  }
  @media (min-width: 1200px) {
    width: 1140px;
    margin-bottom: 150px;
  }
`

export const Bold = styled.span`
  font-weight: bold;
`;

export const BaselineRoadmap = styled.div`
  display: block;
  margin: 0 auto 0 auto;
  @media (min-width: 768px) {
    width: 736px;
  }
  @media (min-width: 992px) {
    width: 932px;
  }
  @media (min-width: 1200px) {
    width: 1080px;
  }
`;

export const BaselineCollapse = styled.div `
display: block;
margin: 0 auto 0 auto;
@media(min-width: 320px){
  width: 100%;
}
@media(min-width: 992px){
  width: 932px;
}
@media(min-width: 1200px){
  width: 1140px;
  display: flex;
    flex-direction: row-reverse;
  ;
}
`