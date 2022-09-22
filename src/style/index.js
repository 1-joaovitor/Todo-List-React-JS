import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyled = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    border: none;
    outline: none;
    transition:0.3 ease ;
    font-family: 'Poppins', sans-serif;
   
}

body{
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    background-color:#A9A9A9;
}
button{
    cursor: pointer;
    box-shadow:0 5px 0 	#363636;

    &:hover{
        opacity:0.8 ;
    }
    &:active{
        opacity:0.6 ;
        position: relative;
        top: 3px;
        box-shadow: none;
    }
}
`
export const Container = styled.div`
    width: 428px;
    padding:20px 50px;

`
export const Flex = styled.div`
display: flex;
width: 100%;
align-items: ${(props) => props.align || 'center'};
justify-content: ${(props) => props.justify || 'center'};
flex-direction: ${(props) => props.direction || 'row'};
gap: ${(props) => props.gap || '16px'};
`
export const Space = styled.div`
width: 100%;
margin: ${(props) =>props.margin || '20px'};
`
export const Tipography = styled.p`
font-weight: ${(props) => props.fontWeigth || '700'};
font-size: ${(props) => props.size || '24px'};
line-height: ${(props) => props.lineHeight || '27px' };
color: ${(props) => props.primary ? '#ececec': 'black'};
`
export const Rules = styled.button`
width: 100%;
background-color: white;
font-size: 16px;
font-weight: 700;
line-height: 24px;
color: black;
border-radius: 15px;
margin-top: 30px;

`