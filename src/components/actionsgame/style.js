import styled from "styled-components";

export const Action = styled.button`
width: 58px;
height: 58px;
border-radius: 50%;
background-color: white;
opacity:${((props) => props.disabled ?'0.5' : '1')};
&:hover{
opacity: ${((props)=> props.disabled ? '1' : '0.5')};
cursor: ${((props) => props.disabled ? 'not-allowed' : 'pointer')};

}

`