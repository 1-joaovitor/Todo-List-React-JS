import styled from "styled-components";

export const ButtonStyle =styled.button`
width: 100%;
height: 38px;
background-color: white;
color: black;
border-radius: 12px;
font-weight: 700;
font-size: 20px;
opacity: ${((props)=> props.disabled ? '1' : '0,5')};

`