import React from "react";
import logo from "../../assets/images/main-page/logo.svg";
import tel from "../../assets/images/main-page/phone.svg";
import wa from "../../assets/images/main-page/wa.svg";
import {
  Logotype,
  MainPage,
  MainPageHeader,
  MainPagePhone,
  MainPagePhoneWrapper,
  PhoneIcon,
  PhoneNumber,
  ButtonWrap,
  WhatsAppIcon,
  WaText,
  ButtonPosition,
  HeaderParagraph,
  SubParagraph,
  Filling
} from "../../styles/Header";
import FormCard from "../../Cards/Form";
import { Col, Row, Button } from "antd";

function Header() {
  return (
    <MainPage className="main-page">
      <MainPageHeader className="main-page-header">
        <Row>
          <Col span={24}>
            <Logotype src={logo} className="main-page-logo" alt="logo" />
            <MainPagePhone className="main-page-phone">
              <MainPagePhoneWrapper className="main-page-phone-wrapper">
                <PhoneIcon
                  className="main-page-phone-logo"
                  alt="phone"
                  src={tel}
                />
                <PhoneNumber
                  className="main-page-phone-num"
                  href="tel: +7800000000"
                >
                  +7800000000
                </PhoneNumber>
              </MainPagePhoneWrapper>
            </MainPagePhone>
            <ButtonPosition className="button-wrap">
              <Button ghost>
                <ButtonWrap className="button-wrapper">
                  <WhatsAppIcon
                    className="main-page-whatsapp-logo"
                    src={wa}
                    alt="wa"
                  />
                  <WaText className="">Написать в WhatsApp</WaText>
                </ButtonWrap>
              </Button>
            </ButtonPosition>
          </Col>
        </Row>
      </MainPageHeader>
      <Filling className="main-page-filling">
      <HeaderParagraph className="main-page-filling-headline">
                Заполним декларацию <br />
                3-НДФЛ
              </HeaderParagraph>
              <SubParagraph className="main-page-filling-sub-free-consult">
                Бесплатная консультация специалиста
              </SubParagraph>
              <SubParagraph className="main-page-filling-sub-payment">
                Оплата после выполнения
              </SubParagraph>
              <SubParagraph className="main-page-filling-sub-following">
                Сопровождение до завершения проверки декларации
              </SubParagraph>
<FormCard text="Заполните заявку и мы свяжемся с Вами в ближайшее время!
"/>
      </Filling>

    </MainPage>
  );
}

export default Header;
