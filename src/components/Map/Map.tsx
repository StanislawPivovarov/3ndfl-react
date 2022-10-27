import React from "react";
import {
  ContactInfo,
  AdressWrapper,
  Lists,
  Subheader,
  ListElement,
  SocialWrapper,
  SocialIcon,
  Subs,
  LinkWrapper,
  MailLink,
  MapWrapper,
  Wrapper,
} from "../../styles/Map";

import { Col, Row } from "antd";
import vk from "../../assets/images/vk.svg";
import insta from "../../assets/images/instagram.svg";
import MyPlacemark from "../YandexMap";
function Map() {
  return (
    <Wrapper>
      <AdressWrapper>
        <ContactInfo className="contact-info">
          Контактная информация
        </ContactInfo>
        <Subheader className="adress">Адрес</Subheader>
        <Lists>
          <ListElement>г. Москва, Новая Площадь, д. 6</ListElement>
          <ListElement>г. Санкт-Петербург, ул. Гороховая, д. 46</ListElement>
          <ListElement>г. Оренбург проспект Гагарина, д. 23В</ListElement>
        </Lists>
        <Subheader className="phone">Телефоны</Subheader>
        <Lists>
          <ListElement>+7 (903) 366-05-52</ListElement>
          <ListElement>+7 (903) 366-05-52</ListElement>
        </Lists>
        <Subheader className="mail">Электронная почта</Subheader>
        <LinkWrapper>
          <MailLink href="mailto: nalog.2@mail.ru" className="link-mail">
            nalog.2@mail.ru
          </MailLink>
        </LinkWrapper>

        <Subheader className="social">Мы в соц сетях</Subheader>
        <Row>
          <Col span={6}>
            <SocialWrapper className="wrapper-vk">
              <a href="http://vk.com" target="blank">
                <SocialIcon src={vk} alt="vk" className="vk-logo" />
              </a>
              <Subs className="subs-vk">4501</Subs>
            </SocialWrapper>
          </Col>
          <Col span={6}>
            <SocialWrapper className="wrapper-insta">
              <a href="http://instagram.com" target="blank">
                <SocialIcon
                  src={insta}
                  alt="instagram"
                  className="insta-logo"
                />
              </a>
              <Subs className="subs-insta">349</Subs>
            </SocialWrapper>
          </Col>
        </Row>
      </AdressWrapper>
      <MapWrapper>
        <MyPlacemark />
      </MapWrapper>
    </Wrapper>
  );
}

export default Map;
