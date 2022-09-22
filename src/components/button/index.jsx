import { ButtonStyle } from "./style"
export const Button = ({onClick, children, disabled}) =>{
return(

   <ButtonStyle disabled={disabled} onClick={onClick}>{children}</ButtonStyle>
)

}