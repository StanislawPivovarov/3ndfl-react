import React from "react";
import
{
    PurposeWrapper,
    CardImg,
    PurposeDescription,
    PurposeSubtitle,
    PurposeSubdescription,
    PurposePrice,
    Hilight,
    ButtonWrap,
    WAicon,
    ButtonText
} from "../../styles/Cards"
import {Button} from "antd";
import wapp from "../../assets/images/main-page/wa.svg"

interface PurposeProps{
    imageUrl: string;
    description: string;
    subtitle: string;
    subdescription: string;
    price: string;
}

function Purpose(props: PurposeProps){
    return(
        <PurposeWrapper>
            <CardImg src={props.imageUrl} alt="img" />
            <PurposeDescription>{props.description}</PurposeDescription>
            <PurposeSubtitle>{props.subtitle}</PurposeSubtitle>
            <PurposeSubdescription>{props.subdescription}</PurposeSubdescription>
            <PurposePrice>
                <Hilight>
                    {props.price}
                </Hilight>
                </PurposePrice>
            <Button type="primary"
            style={{ width: "100%", marginBottom: "16px", border: "1px solid black"}}
            >ЗАКАЗАТЬ</Button>
            <Button type="default"
            style={{ width: "100%", marginBottom: "16px", border: "1px solid black"}}
            >
                <ButtonWrap>
      <WAicon src={wapp} alt="" className="whatsapp" />
      <ButtonText className="text-us">Написать в WhatsApp</ButtonText>
      </ButtonWrap>
            </Button>
        </PurposeWrapper>
    );
}

export default Purpose;