import { Flex, Space, Tipography } from "../../style"
import { CloseModal, StyledModal } from "./style"

export const Modal = ({open, xModal, titleModal,messageModal}) => {
    return(
        <StyledModal open={open}>
                <CloseModal  onClick={() => xModal()}>X</CloseModal>
                    <Flex direction='column'>
                        <Tipography>{titleModal}</Tipography>
                        <Space margin='10px'/>
                        <Tipography size='18px'>{messageModal} </Tipography> 
                    </Flex>
        </StyledModal>
    )
}