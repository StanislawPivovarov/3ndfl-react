import React from "react";
import Purpose from "../../Cards/Purposes";
import house from "../../assets/images/purpose/appartments.svg";
import education from "../../assets/images/purpose/education.svg";
import medical from "../../assets/images/purpose/med.svg";
import income from "../../assets/images/purpose/additional-income.svg";
import insurance from "../../assets/images/purpose/insurance.svg";
import invest from "../../assets/images/purpose/investitions.svg";
import { Header, Img, ListElement, RegisterIp, TextWrapper, UlList, Wrapper } from "../../styles/Main";
import ip from "../../assets/images/purpose/ip-ooo.svg";
import { Button, Col, Row } from "antd";
function Main() {
  return (
    <Row justify="center">
      <Col xs={23} md={22} lg={20} xl={19}>
        <>
          <Wrapper>
            <Purpose
              imageUrl={house}
              description="КУПИЛИ НЕДВИЖИМОСТЬ"
              subtitle="Вы приобрели недвижимость (квартира, дом, комната, земельный участок с домом)?"
              subdescription="Вы можете вернуть до 260 000 рублей с суммы, уплаченной за вашу квартиру или дом, а также можете вернуть до 390 000 рублей с уплаченных процентов по ипотеке."
              price="300 ₽"
            />
            <Purpose
              imageUrl={education}
              description="ОПЛАТИЛИ ОБУЧЕНИЕ"
              subtitle="Вы заплатили за свое обучение, за своих детей, или братьев, сестер?"
              subdescription="Вы можете вернуть до 260 000 рублей с суммы, уплаченной за вашу квартиру или дом, а также можете вернуть до 390 000 рублей с уплаченных процентов по ипотеке."
              price="300 ₽"
            />
            <Purpose
              imageUrl={medical}
              description="ОПЛАТИЛИ ЛЕЧЕНИЕ"
              subtitle="Вы приобрели недвижимость (квартира, дом, комната, земельный участок с домом)?"
              subdescription="Вы можете вернуть до 260 000 рублей с суммы, уплаченной за вашу квартиру или дом, а также можете вернуть до 390 000 рублей с уплаченных процентов по ипотеке."
              price="300 ₽"
            />
            <Purpose
              imageUrl={income}
              description="ДОПОЛНИТЕЛЬНЫЙ ДОХОД"
              subtitle="Вы приобрели недвижимость (квартира, дом, комната, земельный участок с домом)?"
              subdescription="Вы можете вернуть до 260 000 рублей с суммы, уплаченной за вашу квартиру или дом, а также можете вернуть до 390 000 рублей с уплаченных процентов по ипотеке."
              price="300 ₽"
            />
            <Purpose
              imageUrl={insurance}
              description="СТРАХОВАНИЕ"
              subtitle="Вы заплатили за свое обучение, за своих детей, или братьев, сестер?"
              subdescription="Вы можете вернуть до 260 000 рублей с суммы, уплаченной за вашу квартиру или дом, а также можете вернуть до 390 000 рублей с уплаченных процентов по ипотеке."
              price="300 ₽"
            />
            <Purpose
              imageUrl={invest}
              description="ИНВЕСТИЦИИ"
              subtitle="Вы приобрели недвижимость (квартира, дом, комната, земельный участок с домом)?"
              subdescription="Вы можете вернуть до 260 000 рублей с суммы, уплаченной за вашу квартиру или дом, а также можете вернуть до 390 000 рублей с уплаченных процентов по ипотеке."
              price="300 ₽"
            />
          </Wrapper>
          <RegisterIp className="registration-ip">
            <div className="image-wrapper">
              <Img src={ip} alt="ip" />
            </div>
            <TextWrapper className="text-wrapper">
              <Header className="header">Бесплатная регистрация ИП и ООО</Header>
              <UlList className="list">
                <ListElement>Подготовим все нужные документы</ListElement>
                <ListElement>
                  Поможем выбрать систему налогооблажения и виды деятельности
                </ListElement>
                <ListElement>Вы не платите госпошлину 800 ₽</ListElement>
                <ListElement>Вам не нужно ходить в налоговую</ListElement>
              </UlList>
              <Button style={{width: "100%"}}>Оставить заявку</Button>
            </TextWrapper>
          </RegisterIp>
        </>
      </Col>
    </Row>
  );
}

export default Main;
