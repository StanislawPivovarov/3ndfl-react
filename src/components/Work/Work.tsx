import React from "react";
import {BaselineRoadmap } from "../../styles/Main";
import RoadMapItems from "../../Cards/Roadmap";
import { WorkWrapper, Header } from "../../styles/Roadmap";
function Work() {
  return (
    <WorkWrapper>
      <BaselineRoadmap>
        <Header>Как мы работаем</Header>
        <RoadMapItems />
      </BaselineRoadmap>
    </WorkWrapper>
  );
}
export default Work;
