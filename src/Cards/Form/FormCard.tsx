import React from "react";
import {Button, Checkbox, Form, Input, Select} from "antd";
import {FormsCard, WAicon, WrapperCard, ButtonWrap, ButtonText, HeaderP, InputHeader} from "../../styles/Cards";
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
            required: true,
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
        <p className="whatsapp-txt">Напите нам в WhatsApp</p>
        <Button type="default" style={{ width: "100%", marginTop: "16px", border: "1px solid black"}}>
      <ButtonWrap>
      <WAicon src={wapp} alt="" className="whatsapp" />
      <ButtonText className="text-us">Написать в WhatsApp</ButtonText>
      </ButtonWrap>
        </Button>
      </div>
    </Form>

            </WrapperCard>
        </FormsCard>
    );
}
export default FormCard;