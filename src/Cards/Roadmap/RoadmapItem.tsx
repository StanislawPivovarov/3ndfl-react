import React from "react";
import { Col, Row } from "antd";
import { workData } from "./workData";
import {
  Circle,
  Number,
  Description,
  Subdescription,
  Line,
  RoadWrapp,
  RoadWord,
} from "../../styles/Roadmap";

function RoadMapItems() {
  return (
    <div>
      {workData.map((data, index) => (
        <RoadWrapp key={data.number + index}>
          <div>
            <Circle className="circle">
              <Number className="num">{data.number}</Number>
            </Circle>
            <Line
              className="line"
              style={{ display: data.lineVisability }}
            ></Line>
          </div>
          <RoadWord>
            <Description className="how-we-work">{data.name}</Description>

            <Subdescription className="how-we-work-sub">
              {data.description}
            </Subdescription>
          </RoadWord>
        </RoadWrapp>
      ))}
    </div>
  );
}

export default RoadMapItems;
