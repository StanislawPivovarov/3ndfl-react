import styled from "styled-components";

export const FormWrapper = styled.div`
  background: #f4f4f8;
  padding-bottom: 64px;
`;

export const Image = styled.img`
  width: 100%;
  top: 20px;
  position: relative;
  margin: 0 auto 0 auto;
  @media (min-width: 992px) {
    width: 506px;
    right: 95px;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 992px) {
    flex-direction: row-reverse;
    max-width: 1206px;
    margin: 0 auto;
  }
`;
