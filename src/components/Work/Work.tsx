import { Row, Col } from "antd";
import React from "react";
import { Baseline } from "../../styles/Main";
import RoadMapItems from "../../Cards/Roadmap";
import { WorkWrapper, Header } from "../../styles/Roadmap";
function Work() {

  return (
    <WorkWrapper>
      <Baseline>
        <Row justify="center">
          <Col xs={23} md={24} lg={24} xl={24}>
            <Header>Как мы работаем</Header>
            <RoadMapItems/>
          </Col>
        </Row>
      </Baseline>
    </WorkWrapper>
  );
}
export default Work;
