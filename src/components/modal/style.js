import styled from "styled-components";

export const StyledModal = styled.div`
width:75%;
background-image: linear-gradient(#696969, white);
position: absolute;
padding: 16px;
top: 150px;
z-index:2;
border-radius: 15px;
transition: 0.5s ease;
top:${(props) => props.open ? '15px' : '-100%'};

`
export const CloseModal = styled.button`
width: 30px;
height: 30px;
border-radius: 50%;
background-color: black;
color: white;
position: relative;
font-weight: 700;
font-size: 27px;

`