import { Flex, Tipography } from "../../../style"

export const Score = ({namePlayer, scorePlayer, scoreComputer}) => {
    namePlayer = namePlayer.length > 12 ?`${namePlayer.slice(0,8)}...` : 
    namePlayer;

return(
<Flex direction='column'>
    <Tipography size='32px'>Placar</Tipography>
        <Flex ustify='space-between'>
            <Flex direction='column'>
                <Tipography>{namePlayer}</Tipography>
                <Tipography>{scorePlayer}</Tipography>
            </Flex>
                <Tipography>X</Tipography>
                    <Flex direction='column'>
                        <Tipography>COMPUTA...</Tipography>
                        <Tipography>{scoreComputer}</Tipography>
                    </Flex>
        </Flex>

</Flex>
)

}