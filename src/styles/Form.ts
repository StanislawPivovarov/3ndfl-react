import styled from "styled-components";

export const FormWrapper = styled.div`
  background: #f4f4f8;
  padding-bottom: 64px;
`;

export const Image = styled.img`
  top: 20px;
  position: relative;
  margin: 0 auto 0 auto;
  @media(min-width: 320px){
    width: 310px;
    display: block;
    z-index: 21;
  }
  @media (min-width: 768px) {
    width: 523px;
    top: 52px;
    z-index: 1;
  }
  @media (min-width: 992px) {
    width: 701px;
    position: absolute;
    right: -33px;
    top: 41px;
  }
  @media (min-width: 1200px) {
    width: 817px;
    right: -17px;
    position: absolute;
    top: -5px;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 992px) {
    flex-direction: row;
    max-width: 1206px;
    margin: 0 auto;
  }
`;
