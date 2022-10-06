import React from "react";
import {Button, Checkbox, Form, Input, Select} from "antd";
import {WrapperCard} from "../../styles/Cards"
const { Option } = Select;

function FormCard(){
    return(
        <div className="form">
            <WrapperCard className="form-wrapper">
                <p className="form-header">Заполните заявку и мы свяжемся с Вами в ближайшее время!</p>
                <p className="phone-number">Телефон для связи</p>
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
            message: 'Введите Ваше номер',
          },
        ]}
      >
        <Input />
        
      </Form.Item>
      <p className="ndfl-purpose">На что у Вас 3-НДФЛ</p>
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
      <Button type="primary" htmlType="submit" style={{ width: "100%", marginTop: "16px", backgroundColor:"black", border: "none"}}>
          ЗАКАЗАТЬ
        </Button>
      </Form.Item>
      <div className="form-whatsapp">
        <p className="whatsapp-txt">Напите нам в WhatsApp</p>
        <Button type="default" style={{ width: "100%", marginTop: "16px", backgroundColor:'none', border: "1px solid black", color:"black"}}>
      тут кнопка с логотипом ватсапа
        </Button>
      </div>
    </Form>

            </WrapperCard>
        </div>
    );
}
export default FormCard;