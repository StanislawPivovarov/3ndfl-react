import { Col, Row } from "antd";
import React from "react";
import {BaselineForm } from "../../styles/Main";
import formImage from "../../assets/images/form.svg";
import { ContentWrapper, FormWrapper, Image } from "../../styles/Form";
import FormCardBottom from "../../Cards/Form/Bottom";

function Form() {
  return (
    <FormWrapper>
      <BaselineForm>
        <Row justify="center">
          <Col xs={23} md={22} lg={24} xl={24}>
            <ContentWrapper className="">
              <Image src={formImage} alt="form-img" />
              <FormCardBottom
              style={{}}
                text="Закажите бесплатную консультацию"
                wa={{ display: "block" }}
              />
            </ContentWrapper>
          </Col>
        </Row>
      </BaselineForm>
    </FormWrapper>
  );
}
export default Form;
