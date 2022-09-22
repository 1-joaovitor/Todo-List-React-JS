import { StyleInput } from "./style"


export const Input = ({ placeHolder, onChange})=>{
  return(

      <StyleInput  placeholder={placeHolder} onChange={(e) => onChange(e.target.value)}/>
  )

  
    
}