import { Col, Row } from "antd";
import React from "react";
import { Baseline } from "../../styles/Main";
import formImage from "../../assets/images/form.svg";
import FormCard from "../../Cards/Form";
import { ContentWrapper, FormWrapper, Image } from "../../styles/Form";

function Form() {
  return (
    <FormWrapper>
      <Baseline>
      <Row justify="center">
        <Col xs={23} md={22} lg={20} xl={24}>
          <ContentWrapper className="">
          <Image src={formImage} alt="form-img" />
          <FormCard text="Закажите бесплатную консультацию" style={{}} wa={{display: "block"}}/>
          </ContentWrapper>
        </Col>
      </Row>
      </Baseline>
      
    </FormWrapper>
  );
}
export default Form;
