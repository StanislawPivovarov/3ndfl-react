import React from "react";

import styled from "styled-components";

export const WrapperCard = styled.div`
  background-color: #fff;
  padding: 16px 16px 24px 16px;
`;

export const PurposeWrapper = styled.div`
  padding: 64px 0px 26px 0px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
`;

export const CardImg = styled.img`
  height: 200px;
  width: auto;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 15px;
`;
export const PurposeDescription = styled.h2`
  font-size: 24px;
  line-height: 29px;
  text-align: center;
  margin-bottom: 8px;
`;
export const PurposeSubtitle = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 15px;
`;
export const PurposeSubdescription = styled.p`
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 31px;
`;
export const PurposePrice = styled.p`
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 35px;
`;

export const Hilight = styled.mark`
  background-color: #faed61;
`;
export const FormsCard = styled.div`
width: 100%;
z-index: 10;
display: block;
@media(min-width: 992px){
  width: 480px;
  padding: 100px 0px 100px 0px;
}
`