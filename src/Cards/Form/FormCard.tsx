import React from "react";
import {Button, Checkbox, Form, Input, Select} from "antd";
import {FormsCard, WAicon, WrapperCard, ButtonWrap, ButtonText, HeaderP, InputHeader, WhatsapParagraph} from "../../styles/Cards";
import wapp from "../../assets/images/main-page/wa.svg"
const { Option } = Select;

interface propsText {
  text: string;
  style: React.CSSProperties;
  wa: React.CSSProperties;
}

function FormCard(props:propsText){
    return(
        <FormsCard className="form" style={props.style}>
            <WrapperCard className="form-wrapper">
                <HeaderP className="form-header">{props.text}</HeaderP>
                <InputHeader className="phone-number">Телефон для связи</InputHeader>
                <Form
      name="basic"
      initialValues={{
        remember: true,
      }}
      autoComplete="off"
    >
      <Form.Item
        name="phone-num"
        rules={[
          {
            required: false,
            message: 'Введите Ваш номер',
          },
        ]}
      >
        <Input />
        
      </Form.Item>
      <InputHeader className="ndfl-purpose">На что у Вас 3-НДФЛ</InputHeader>
      <Select
      defaultValue="property"
      style={{
        width: "100%"
      }}
      >
        <Option value="property">Имущественный вычет</Option>
      <Option value="standart">Стандартный вычет</Option>
      <Option value="social">Социальный вычет</Option>
      <Option value="investions">Инвестиционный вычет</Option>
      <Option value="professional">Профессиональный вычет</Option>
      </Select>
      <Form.Item>
      <Button type="primary" htmlType="submit" style={{ width: "100%", marginTop: "16px"}}>
          ЗАКАЗАТЬ
        </Button>
      </Form.Item>
      <div className="form-whatsapp" style={props.wa}>
        <WhatsapParagraph className="whatsapp-txt">Напите нам в WhatsApp</WhatsapParagraph>
        <a href="https://wa.me/78000000000">
        <Button className="button-whatsapp" type="default" style={{ width: "100%", marginTop: "16px",}}>
      <ButtonWrap>
      <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg" style={{fill: "currentcolor"}}>
<path d="M0.5 16L1.876 11.8723C1.17779 10.6979 0.775862 9.32745 0.775862 7.86207C0.775862 3.52 4.29586 0 8.63793 0C12.98 0 16.5 3.52 16.5 7.86207C16.5 12.2041 12.98 15.7241 8.63793 15.7241C7.31683 15.7241 6.07269 15.3967 4.98 14.8212L0.5 16Z" />
<path d="M13.6538 10.4787C13.2908 9.79264 11.9521 9.00809 11.9521 9.00809C11.6492 8.8354 11.2836 8.81609 11.111 9.12395C11.111 9.12395 10.6759 9.64561 10.5653 9.72064C10.0599 10.063 9.59178 10.0497 9.11923 9.57719L8.02102 8.47899L6.92281 7.38078C6.45026 6.90823 6.43702 6.44009 6.77937 5.93471C6.8544 5.82409 7.37606 5.38906 7.37606 5.38906C7.68392 5.21609 7.66461 4.85085 7.49192 4.54795C7.49192 4.54795 6.70737 3.20919 6.0213 2.84616C5.72943 2.69168 5.37109 2.74575 5.13771 2.97912L4.65275 3.46409C3.11426 5.00257 3.87178 6.7394 5.41026 8.27788L6.81633 9.68395L8.2224 11.09C9.76088 12.6285 11.4977 13.386 13.0362 11.8475L13.5212 11.3626C13.7545 11.1286 13.8083 10.7703 13.6538 10.4787Z" fill="white"/>
</svg>
      <ButtonText className="text-us">Написать в WhatsApp</ButtonText>
      </ButtonWrap>
        </Button>
        </a>
        
      </div>
    </Form>

            </WrapperCard>
        </FormsCard>
    );
}
export default FormCard;