import React from "react";

import styled from "styled-components";

export const WrapperCard = styled.div`
  background-color: #fff;
  padding: 30px 30px 54px 30px;
  box-shadow: 0px 9px 28px 8px rgba(0, 0, 0, 0.05),
    0px 6px 16px rgba(0, 0, 0, 0.08), 0px 3px 6px -4px rgba(0, 0, 0, 0.12);

  @media (max-width: 768px) {
    padding: 16px 16px 24px 16px;
  }
`;

export const PurposeWrapper = styled.div`
  background-color: #fff;
  min-height: 732px;
  display: flex;
  flex-direction: column;
  @media(min-width: 320px){
    width: 100%;
  }
  @media(min-width: 768px){
    width: 510px;
  }
  @media(min-width: 992px){
    width: 320px;
  }
`;

export const CardImg = styled.img`
  
  width: auto;
  margin-right: auto;
  margin-left: auto;
  @media(min-width: 320px){
    height: 200px;
  }
  @media(min-width: 1200px){
    height: 253px;
  }
`;
export const PurposeDescription = styled.h2`
  padding-top: 22px;
  min-height: 80px;
  font-size: 24px;
  font-family: "Montserrat-SemiBold", sans-serif;
  line-height: 29px;
  text-align: center;
  margin-bottom: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const PurposeSubtitle = styled.p`
  font-weight: 400;
  font-family: "OpenSans-Regular", sans-serif;
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 15px;
  min-height: 72px;
  @media(max-width: 992px){
  min-height: 40px;
  }
`;
export const PurposeSubdescription = styled.p`
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 31px;
  min-height: 120px;
  @media(max-width: 992px){
    min-height: 40px;
    }
`;
export const PurposePrice = styled.p`
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 35px;
`;

export const Hilight = styled.mark`
  background-color: #faed61;
  font-family: "OpenSans-Bold", sans-serif;
`;
export const FormsCard = styled.div`
  z-index: 10;

  display: block;
  @media (min-width: 992px) {
    width: 400px;
    padding: 100px 0px 100px 0px;
  }
`;

export const WAicon = styled.img`
  height: max-content;
`;
export const ButtonWrap = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: auto;
  margin-left: auto;
  width: max-content;
  align-items: center;
`;

export const ButtonText = styled.p`
  margin-bottom: 0;
  padding-left: 8px;
  font-size: 16px;
  font-family: "Montserrat-regular";
`;
export const HeaderP = styled.p`
  line-height: 32px;
  font-family: OpenSans-Regular;
  font-size: 18px;
`;

export const InputHeader = styled.p`
  margin-top: 27px;
  margin-bottom: 5px;
  font-family: OpenSans-Regular;
  font-size: 14px;
`;

export const ButtonAlign = styled.div``;

export const WhatsapParagraph = styled.p`
  margin-bottom: 0;
`;

export const FormsCardBottom = styled.div`
z-index: 10;

display: block;
@media (min-width: 320px){
  width: 100%;
}
@media (min-width: 992px) {
  width: 480px;
  padding: 100px 0px 100px 0px;
}
@media (min-width: 1200px){
  margin-left: 110px;
}
`