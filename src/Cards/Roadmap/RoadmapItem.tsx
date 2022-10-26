import React from "react";
import { Col, Row } from "antd";
import { workData } from "./workData";
import {
  Circle,
  Number,
  Description,
  Subdescription,
  Line,
} from "../../styles/Roadmap";

function RoadMapItems() {
  return (
    <div>
      {workData.map((data, index) => (
        <div key={data.number + index}>
          <Row>
            <Col span={5}>
              <Circle className="circle">
                <Number className="num">{data.number}</Number>
              </Circle>
              <Line
                className="line"
                style={{ display: data.lineVisability }}
              ></Line>
            </Col>
            <Col span={19}>
              <Row>
                <Col>
                  <Description className="how-we-work">{data.name}</Description>
                </Col>
              </Row>
              <Col>
                <Subdescription className="how-we-work-sub">
                  {data.description}
                </Subdescription>
              </Col>
            </Col>
          </Row>
        </div>
      ))}
    </div>
  );
}

export default RoadMapItems;
