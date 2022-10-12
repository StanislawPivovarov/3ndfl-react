import { Col, Row } from "antd";
import React from "react";
import logo from "../../assets/images/main-page/logo.svg";
import { FooterWrapper, Logo, Copyright, TextWrapper, Divider, Link } from "../../styles/Footer";
function Footer() {
  return (
    <FooterWrapper>
        <Row justify="center">
        <Col xs={23} md={22} lg={20} xl={19}>
      <TextWrapper className="">
        <Logo src={logo} alt="logo" className="logo" />
        <Link href="#" className="fill-declaration">
          Заполним 3-ндфл недорого
        </Link>
        <Link href="#" className="requesrt-declaration">
          Закажите декларацию 3-НДФЛ онлайн
        </Link>
      </TextWrapper>
      <Divider className="solid" />
      <Copyright className="copyright">© 2022, Центр Отчетности </Copyright>
      </Col>
      </Row>
    </FooterWrapper>
  );
}
export default Footer;
