import { Row, Col } from "antd";
import React from "react";
import { Baseline } from "../../styles/Main";
import RoadMapItems from "../../Cards/Form/Roadmap";
import { WorkWrapper, Header } from "../../styles/Roadmap";
function Work() {
  return (
    <WorkWrapper>
      <Baseline>
      <Row justify="center">
        <Col xs={23} md={22} lg={20} xl={24}>
          <Header>Как мы работаем</Header>
          <RoadMapItems
            number={1}
            style="block"
            name="Закажите декларацию 3-НДФЛ, получите БЕСПЛАТНУЮ консультацию специалиста"
            description="Специалист проконсультирует по списку документов, по возможностям законного уменьшения налога и поможет получить налоговый вычет максимально выгодно для Вас. Сделайте закладку сайта и обращайтесь в удобное для Вас время! Пишите на WhatsApp, Viber или звоните +79033660552 - это ускорит время заполнения Вашей декларации."
          />
          <RoadMapItems
            number={2}
            style="block"
            name="Пришлите документы"
            description="Пришлите фотографии документов на WhatsApp, Viber или на электронную почту nalog.2@mail.ru наш специалист проверит Ваши документы, проконсультирует и заполнит Вашу декларацию 3-НДФЛ."
          />
          <RoadMapItems
            number={3}
            name="Получите декларацию 3-НДФЛ на почту"
            style="block"
            description="Специалист заполненную декларацию 3-НДФЛ пришлет Вам на электронную почту в удобном для Вас формате!"
          />
          <RoadMapItems
            number={4}
            style="block"
            name="Оплатите услугу, после получения декларации 3-НДФЛ на вашу почту"
            description="Оплачиваете услугу только после получения декларации 3-НДФЛ на Вашу электронную почту."
          />
          <RoadMapItems
            number={5}
            style="none"
            name="Подайте декларацию 3-НДФЛ или доверьте это нам"
            description="Подайте декларацию и все необходимые документы к ней в налоговую любым удобным для Вас способом. Или доверьте это нам, выбрав тариф Всё включено - VIP"
          />
        </Col>
      </Row>
      </Baseline>
      
    </WorkWrapper>
  );
}
export default Work;
