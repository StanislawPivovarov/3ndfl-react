import styled from 'styled-components'

export const FooterWrapper = styled.div`
width: 100%;
padding-top: 64px;
background-color: #262626;
display: flex;
flex-direction: column;
`
export const TextWrapper = styled.div`
display: flex;
flex-direction: column;
@media(min-width: 992px){
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}
`
export const Logo = styled.img`
width: 229px;
height: auto;
padding-bottom: 30px;
`
export const Link = styled.a`
padding-bottom: 30px;
font-weight: 400;
font-size: 14px;
line-height: 19px;
text-decoration: none;
color: #fff;
`

export const Divider = styled.hr`
width: 100%;
height: 0.3px;
background-color: #DADAE0;
`

export const Copyright = styled.p`
font-weight: 400;
font-size: 14px;
line-height: 19px;
margin-bottom: 60px;
color: #fff;
text-transform: uppercase;
`