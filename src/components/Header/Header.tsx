import React from "react";
import logo from "../../assets/images/main-page/logo.svg";
import tel from "../../assets/images/main-page/phone.svg";
import wa from "../../assets/images/main-page/wawhite.svg";
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
  Filling,
  FillingWrapper,
} from "../../styles/Header";
import FormCard from "../../Cards/Form";
import { Button, Col, Row } from "antd";
import { Baseline } from "../../styles/Main";

function Header() {
  return (
    <MainPage className="main-page">
      <Baseline>
        <Row justify="center">
          <Col xs={23} md={22} lg={20} xl={24}>
            <MainPageHeader className="main-page-header">
              <a href="#">
                <Logotype src={logo} className="main-page-logo" alt="logo" />
              </a>
              <MainPagePhone className="main-page-phone">
                <MainPagePhoneWrapper className="main-page-phone-wrapper">
                  <PhoneIcon
                    className="main-page-phone-logo"
                    alt="phone"
                    src={tel}
                  />
                  <PhoneNumber
                    className="main-page-phone-num"
                    href="tel: +7 800 000 00 00"
                  >
                    +7 800 000 00 00
                  </PhoneNumber>
                </MainPagePhoneWrapper>
              </MainPagePhone>
              <a href="https://wa.me/78000000000">
                <ButtonPosition className="button-wrap">
                  <Button ghost>
                    <ButtonWrap className="button-wrapper">
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{ fill: "currentcolor" }}
                      >
                        <path d="M15.7225 13.0602C15.4671 12.9289 14.1944 12.3055 13.9577 12.2211C13.721 12.132 13.5475 12.0898 13.3764 12.3523C13.203 12.6125 12.7108 13.1914 12.5561 13.3672C12.4061 13.5406 12.2538 13.5617 11.9983 13.4328C10.4796 12.6734 9.48347 12.0781 8.48269 10.3602C8.21785 9.90313 8.74753 9.93594 9.24207 8.94922C9.32644 8.77578 9.28425 8.62813 9.21863 8.49688C9.153 8.36563 8.63738 7.09531 8.42175 6.57734C8.21316 6.07344 7.99753 6.14375 7.8405 6.13438C7.6905 6.125 7.51941 6.125 7.34597 6.125C7.17253 6.125 6.89363 6.19063 6.65691 6.44609C6.42019 6.70625 5.75222 7.33203 5.75222 8.60235C5.75222 9.87266 6.678 11.1031 6.80457 11.2766C6.93582 11.45 8.62566 14.0563 11.2202 15.1789C12.8608 15.8867 13.503 15.9477 14.3233 15.8258C14.8225 15.7508 15.8514 15.2024 16.0647 14.5953C16.278 13.9906 16.278 13.4727 16.2147 13.3649C16.1514 13.25 15.978 13.1844 15.7225 13.0602Z" />
                        <path d="M20.685 6.93125C20.1553 5.67266 19.3959 4.54297 18.428 3.57266C17.46 2.60469 16.3303 1.84297 15.0694 1.31563C13.7803 0.774219 12.4116 0.5 11.0006 0.5H10.9537C9.53343 0.507031 8.15765 0.788281 6.8639 1.34141C5.61468 1.87578 4.49437 2.63516 3.53578 3.60312C2.57718 4.57109 1.82484 5.69609 1.30453 6.95C0.765465 8.24844 0.49359 9.62891 0.500621 11.0492C0.507652 12.6758 0.896715 14.2906 1.62562 15.7344V19.2969C1.62562 19.8922 2.10843 20.375 2.70375 20.375H6.26859C7.71234 21.1039 9.32718 21.493 10.9537 21.5H11.003C12.4069 21.5 13.7686 21.2281 15.0506 20.6961C16.3045 20.1734 17.4319 19.4234 18.3975 18.4648C19.3655 17.5063 20.1272 16.3859 20.6592 15.1367C21.2123 13.843 21.4936 12.4672 21.5006 11.0469C21.5077 9.61953 21.2311 8.23438 20.685 6.93125ZM17.1436 17.1969C15.5006 18.8234 13.3209 19.7188 11.0006 19.7188H10.9608C9.5475 19.7117 8.14359 19.3602 6.90375 18.6992L6.70687 18.5938H3.40687V15.2938L3.3014 15.0969C2.64047 13.857 2.2889 12.4531 2.28187 11.0398C2.2725 8.70312 3.16547 6.50937 4.80375 4.85703C6.43968 3.20469 8.6264 2.29062 10.9631 2.28125H11.003C12.1748 2.28125 13.3116 2.50859 14.3827 2.95859C15.428 3.39687 16.3655 4.02734 17.1717 4.83359C17.9756 5.6375 18.6084 6.57734 19.0467 7.62266C19.5014 8.70547 19.7287 9.85391 19.7241 11.0398C19.71 13.3742 18.7936 15.5609 17.1436 17.1969Z" />
                      </svg>

                      <WaText className="">Написать в WhatsApp</WaText>
                    </ButtonWrap>
                  </Button>
                </ButtonPosition>
              </a>
            </MainPageHeader>
            <Filling className="main-page-filling">
              <FillingWrapper className="main-page-filling-wrapper">
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
              </FillingWrapper>

              <FormCard
                text="Заполните заявку и мы свяжемся с Вами в ближайшее время!"
                style={{ padding: 0 }}
                wa={{ display: "none" }}
              />
            </Filling>
          </Col>
        </Row>
      </Baseline>
    </MainPage>
  );
}

export default Header;
