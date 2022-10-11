import { Col, Row } from "antd";
import React from "react";
import formImage from "../../assets/images/form.svg";
import FormCard from "../../Cards/Form";
import { ContentWrapper, FormWrapper, Image } from "../../styles/Form";

function Form() {
  return (
    <FormWrapper>
      <Row justify="center">
        <Col xs={23} md={22} lg={20} xl={19}>
          <ContentWrapper className="">
          <Image src={formImage} alt="form-img" />
          <FormCard text="Закажите бесплатную консультацию" style={{
            width: "100%",}}/>
          </ContentWrapper>
        </Col>
      </Row>
    </FormWrapper>
  );
}
export default Form;
