import { Flex, Tipography } from "../../style"
import { Action } from "./style"


export const ActionsGame = ({actions, onClick, disabled}) => {
return(
    <Flex>
        {actions.map((action) => <Action disabled={disabled} key={action.value} onClick={() => onClick(action)}><Tipography size='32px'>{action.label}</Tipography></Action>)}

    </Flex>
)

}