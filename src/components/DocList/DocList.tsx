import React from "react";
import { Collapse, Row, Col } from "antd";
import { AccordionWrapper, Header } from "../../styles/Docs";
import { Baseline } from "../../styles/Main";
import file from "../../assets/images/paper.svg"
const { Panel } = Collapse;
const text =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fermentum nisl ut scelerisque ultrices. Quisque nec consequat odio, eu interdum elit. Suspendisse sodales sagittis urna. Fusce non nisi dapibus, convallis arcu eget, suscipit elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In molestie quam et sem dignissim, porta placerat lectus ultricies. Aliquam accumsan tortor sed tempus auctor. Quisque eget justo in arcu efficitur efficitur. Vivamus tristique dapibus lacus quis rhoncus. Donec posuere vel enim vitae tempor. Sed id sapien porttitor, congue orci nec, varius elit. Pellentesque ac risus tortor. Suspendisse in nunc sit amet turpis euismod placerat. Integer imperdiet ut metus quis sodales. Curabitur sit amet sapien enim.";
function Docs() {
  return (
<AccordionWrapper>
      <Baseline>
      <Row justify="center">
        <Col xs={23} md={22} lg={20} xl={24}>
          <Header className="list-docs">Список необходимых документов</Header>
          <Collapse accordion>
            <Panel
              header="Необходимые документы при имущественном вычете при покупке квартиры"
              key="1"
              style={{fontSize: '24px', fontFamily:"Montserrat-Semibold"}}
            >
              <p>{text}</p>
            </Panel>
            <Panel
              header="Необходимые документы при продаже квартиры/дома/дачи/автомобиля/гаража?"
              key="2"
              style={{fontSize: '24px', fontFamily:"Montserrat-Semibold"}}
            >
              <p>{text}</p>
            </Panel>
            <Panel
              header="Необходимые документы при сдаче имущества в аренду"
              key="3"
              style={{fontSize: '24px', fontFamily:"Montserrat-Semibold"}}
            >
              <p>{text}</p>
            </Panel>
            <Panel header="Необходимые документы на вычет за лечение"
            key="4"
            style={{fontSize: '24px', fontFamily:"Montserrat-Semibold"}}>
              <p>{text}</p>
            </Panel>
            <Panel header="Необходимые документы на вычет за обучение" key="5"
            style={{fontSize: '24px' , fontFamily:"Montserrat-Semibold"}}>
              <p>{text}</p>
            </Panel>
            <Panel
              header="Необходимые документы на вычет за оплату страхования жизни"
              key="6"
              style={{fontSize: '24px', fontFamily:"Montserrat-Semibold"}}
            >
              <p>{text}</p>
            </Panel>
            <Panel
              header="Необходимые документы на вычет за инвестиционный счет"
              key="7"
              style={{fontSize: '24px', fontFamily:"Montserrat-Semibold"}}
            >
              <p>{text}</p>
            </Panel>
          </Collapse>
        </Col>
      </Row>
      </Baseline>
      
    </AccordionWrapper>

  );
}

export default Docs;
