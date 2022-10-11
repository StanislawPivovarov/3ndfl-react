import React from "react";
import { Collapse, Row, Col } from "antd";
import { AccordionWrapper, Header } from "../../styles/Docs";
const { Panel } = Collapse;
const text =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fermentum nisl ut scelerisque ultrices. Quisque nec consequat odio, eu interdum elit. Suspendisse sodales sagittis urna. Fusce non nisi dapibus, convallis arcu eget, suscipit elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In molestie quam et sem dignissim, porta placerat lectus ultricies. Aliquam accumsan tortor sed tempus auctor. Quisque eget justo in arcu efficitur efficitur. Vivamus tristique dapibus lacus quis rhoncus. Donec posuere vel enim vitae tempor. Sed id sapien porttitor, congue orci nec, varius elit. Pellentesque ac risus tortor. Suspendisse in nunc sit amet turpis euismod placerat. Integer imperdiet ut metus quis sodales. Curabitur sit amet sapien enim.";
function Docs() {
  return (
    <AccordionWrapper>
      <Row justify="center">
        <Col xs={23} md={22} lg={20} xl={19}>
          <Header className="list-docs">Список необходимых документов</Header>
          <Collapse accordion>
            <Panel
              header="Необходимые документы при имущественном вычете при покупке квартиры"
              key="1"
            >
              <p>{text}</p>
            </Panel>
            <Panel
              header="Необходимые документы при продаже квартиры/дома/дачи/автомобиля/гаража?"
              key="2"
            >
              <p>{text}</p>
            </Panel>
            <Panel
              header="Необходимые документы при сдаче имущества в аренду"
              key="3"
            >
              <p>{text}</p>
            </Panel>
            <Panel header="Необходимые документы на вычет за лечение" key="4">
              <p>{text}</p>
            </Panel>
            <Panel header="Необходимые документы на вычет за обучение" key="5">
              <p>{text}</p>
            </Panel>
            <Panel
              header="Необходимые документы на вычет за оплату страхования жизни"
              key="6"
            >
              <p>{text}</p>
            </Panel>
            <Panel
              header="Необходимые документы на вычет за инвестиционный счет"
              key="7"
            >
              <p>{text}</p>
            </Panel>
          </Collapse>
        </Col>
      </Row>
    </AccordionWrapper>
  );
}

export default Docs;
