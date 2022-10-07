import React from "react";
import formImage from "../../assets/images/form.svg";
import FormCard from "../../Cards/Form";
import {
    FormWrapper,
    Image
} from "../../styles/Form"

function Form() {
  return (
    <FormWrapper>
      <Image src={formImage} alt="form-img" />
      <FormCard text="Закажите бесплатную консультацию"/>
    </FormWrapper>
  );
}
export default Form;
