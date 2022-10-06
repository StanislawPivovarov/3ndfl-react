import React from "react";
import { Col, Row } from "antd";
import {
    Circle,
    Number,
    Description,
    Subdescription,
    Line
} from "../../../styles/Roadmap"
interface RoadMapProps {
  number: number;
  name: string;
  description: string;
}
function RoadMapItems(props: RoadMapProps) {


  return (
    
    <Row>
      <Col span={6}>
        <Circle className="circle">
          <Number className="num">{props.number}</Number>
        </Circle>
        <Line className="line"></Line>
      </Col>
      <Col span={18}>
        <Row>
          <Col>
            <Description className="how-we-work">{props.name}</Description>
          </Col>
        </Row>
        <Col>
          <Subdescription className="how-we-work-sub">{props.description}</Subdescription>
        </Col>
      </Col>
    </Row>
  );
  
}


export default RoadMapItems;
