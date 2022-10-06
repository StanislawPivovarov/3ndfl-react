import React from "react";
import
{
    PurposeWrapper,
    CardImg,
    PurposeDescription,
    PurposeSubtitle,
    PurposeSubdescription,
    PurposePrice,
    Hilight
} from "../../styles/Cards"
import {Button} from "antd";

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
            style={{ width: "100%", marginBottom: "16px", backgroundColor:'black', border: "1px solid black", color:"white"}}
            >ЗАКАЗАТЬ</Button>
            <Button type="default"
            style={{ width: "100%", marginBottom: "16px", backgroundColor:'none', border: "1px solid black", color:"black"}}
            >WhatsApp</Button>
        </PurposeWrapper>
    );
}

export default Purpose;