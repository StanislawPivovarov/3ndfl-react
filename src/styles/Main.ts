import styled from "styled-components";

export const Wrapper = styled.div`
display: grid;
grid-template-columns: 100%;
justify-content: space-between;
grid-gap: 60px;
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
@media(min-width: 992px){
    text-align: left;
}
`

export const UlList = styled.ul`
list-style-type: none;
`

export const ListElement = styled.li`
font-weight: 400;
font-size: 16px;
line-height: 22px;
padding-bottom: 15px;
`
export const TextWrapper = styled.div`
width: 100%;
`