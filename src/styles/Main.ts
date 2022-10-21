import styled from "styled-components";

export const Wrapper = styled.div`
display: grid;
justify-content: space-between;
@media(min-width: 320px){
    grid-template-columns: 100%
}
@media(min-width: 768px){
    grid-template-columns: 45% 45%;
}
@media(min-width: 1200px){
    grid-template-columns: 30% 30% 30%;
}

`
export const RegisterIp = styled.div`
padding: 64px 0px 100px 0px;
display: flex;
flex-direction: column;
@media(min-width: 992px){
    flex-direction: row;
}
`
export const Img = styled.img`
width: 200px;
display: block;
margin-left: auto;
margin-right: auto;
@media(min-width: 992px){
    width: 400px;
}
`
export const Header = styled.p`
font-style: normal;
font-weight: 600;
font-size: 24px;
line-height: 29px;
text-align: center;
padding-top: 45px;
font-family: "Montserrat-SemiBold";
@media(min-width: 992px){
    text-align: left;
}
`

export const UlList = styled.ul`
list-style-type: none;
padding-left: 0px;
`

export const ListElement = styled.li`
font-weight: 400;
font-size: 16px;
line-height: 22px;
padding-bottom: 15px;
font-family: "OpenSans-Regular";
`
export const TextWrapper = styled.div`
width: 100%;
`
export const Baseline = styled.div`
display: block;
margin: 0 auto 0 auto;
@media(min-width: 1200px){
    width: 1140px;
}
`

export const Bold = styled.span`
font-weight: bold;
`