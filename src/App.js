import * as C from './style'
import './App.css';
import { Button } from './components/button';
import { Input } from './components/input';
import { Score } from './components/input/score'
import { useState } from 'react';
import { Modal } from './components/modal';
import { ActionsGame } from './components/actionsgame';


function App() {
  //array de mensagens para inserção nos modais apresentados em tela.
  const messages = {
    rules: {
      title: 'regras',
      message:'As regras são formas de agir em determinados espaços que nos mostram o que devemos fazer para conviver bem com as outras pessoas. Se cada um fizer a sua parte, fica mais fácil conviver.'
    }, user:{
      title: 'Usuário',
      message:'Por favor, preencha seu nome'
    },
    playerWiner:{
      title:'PARABÉNS!',
      message:'Me parece que você tem muita sorte, te desafio tentar outra vez.'
    },
    playerLost:{
      title:'QUE PENA!',
      message:'Não foi dessa vez, mas não desista, vamos outra ? Tenho certeza que dessa vez você consegue.'
    }
  }
  // array de objetos para inserção nos botões de seus valores e  ícones.
  const actions = [{
    value:1,
    label:'👊',
    description:'Rock'
  }, 
  {
    value:2,
    label:'🖐️',
    description:'Paper',
  },
  {
    value:3,
    label:'✌️',
    description:'Scissors'
  }]
 const [namePlayer, setNameplayer] = useState ('JOGADOR') //nome do jogador

 const [disabledaction, setDisabledAction] = useState(true) // botoões de ação

 const [open, setOpen] = useState (false)  // modal

 const [titleModal, setTitleModal] = useState () // título do modal

 const [messageModal, setMessageModal] = useState () // messagem do modal

 const [scorePlayer, setScorePlayer] = useState (0) // pontos do jogador

 const [scoreComputer, setScoreComputer] = useState (0) // pontos do computador

 const [actionPlayer, setActionPlayer] = useState ('⚠️') // ícone do jogador

 const [actionComputer, setActionComputer] = useState ('⚠️') // ícone do computador

 const [textGame, setTextGame] = useState ('Iniciar Jogo') // mensagem que apresenta quem ganhou ou perdeu ou se a partida precisa ser iniciada
 
 const [playGame, setPlaygame] = useState (false) // controla o estado da mensagem para inicar ou interromper a partida


 const closeModal = () => {
  setOpen(false)
  window.location.reload() // reload da página
 } 

// essa função acessa o array de mensagens recebe um tipo e insere dentro de seus respectivos estados.
const openModalmessage = (type) =>{
  if (!type) {
    setOpen(false)
    setTitleModal('')
    setMessageModal('')
    return;
  }
  setOpen(true)
  setTitleModal(messages?.[type].title)
  setMessageModal(messages?.[type].message)

 }
// recebe o valor capturado pelo onchange dentro do input digitado pelo usuário.
const valueInput = (value) => {
  if (!value) return setNameplayer('JOGADOR')
  setNameplayer(value)
  
}
// recebe todo o array de objeto de actions ficando a critério do dev o que quer chamar, value, label ou description.
const targetValue = (value) =>{
 setActionPlayer(value.label)
 const accComputer =randomComputer()
 setActionComputer(accComputer.label)
 checkWinner(value.value, accComputer.value)
 
}
// cria um número aleatório para ação do computador entre 0 e 2, seria um index dentro do array.
const randomComputer = () =>{
  const number = Math.floor(Math.random() * 3)
  return actions?.[number]
 
}
// função para verificar o vencedor, armazenado em variáveis os possíveis resultados e em seguida feita uma condicional para obtenção do resultado.
// 1 = Pedra
// 2 = Papel
// 3 = Tesoura
const checkWinner = (playerValue, computerValue) =>{
  const resultEqual = playerValue == computerValue
  const winnerPlayer = playerValue == 1 && computerValue == 3 || playerValue == 2 && computerValue == 1 || playerValue == 3 && computerValue == 2

  if(resultEqual){ 
    setTextGame('Empate')
  }
 else if(winnerPlayer){setScorePlayer((state) => state +1)
    setTextGame('Você Ganhou')
  }
  else {setScoreComputer((state) => state +1) 
    setTextGame('Você Perdeu')
  }
  // se o o computador atingir os 10 pontos o jogo será reiniciado e todas ao funções serão resetadas através de estados.
  if(scoreComputer == 10  ){
    
    setActionComputer('⚠️')
    setActionPlayer('⚠️')
    setScoreComputer(0)
    setScorePlayer(0)
    setDisabledAction(true)
    setTextGame('Iniciar Jogo')
    setNameplayer('JOGADOR')
    setPlaygame(false)
    openModalmessage('playerLost')
    return
  }
    else{   if(scorePlayer == 10 ){
   
    setActionComputer('⚠️')
    setActionPlayer('⚠️')
    setScoreComputer(0)
    setScorePlayer(0)
    setDisabledAction(true)
    setTextGame(!playGame)
    setNameplayer('JOGADOR')
    setPlaygame(false)
    openModalmessage('playerWiner')
    return
  }

  }
 
    
  }
    // se o o jogador atingir os 10 pontos o jogo será reiniciado e todas ao funções serão resetadas através de estados.

  // -1 caso o jogador opte por parar a partida durante o jogo esta função resetará todos os estados.
  const resetGame=() =>{
    setScoreComputer(0)
    setScorePlayer(0)
    setTextGame('Iniciar Jogo')
    setActionPlayer('⚠️')
    setActionComputer('⚠️')
    setPlaygame(false)
    setDisabledAction(true)
    setNameplayer('JOGADOR')
  }

// função que avalia se o usuário digitou seu nome, permitindo apenas inicar o jogo se houver digitado o nome.
  const startGame = () => {
  if (namePlayer == 'JOGADOR'){
     openModalmessage('user')
    return 
  }
  //caso tenha digitado seu nome, os botões de ação serão habilitados.
   else {
   setDisabledAction(false)
    setPlaygame(true)
    }
 // essa condicão valerá se o jogador durante a partida apertar o botão de pare que é controlado pelo estado playGame.
  if(playGame) return resetGame()
 
 }

  return (
    <div>
    <C.Container>
        <C.Flex direction='column'>
            <C.Tipography  fontWeight='400' size='30px' 
            >Jokenpô do vitor</C.Tipography>
            <Input placeHolder={'Por favor, digite aqui seu nome'} value={namePlayer == 'JOGADOR'? namePlayer : '' } onChange={(value) => valueInput(value)}/>
            <Button onClick={startGame} >{!playGame ? 'iniciar' : 'parar'}</Button>
            <Score namePlayer={namePlayer} scorePlayer={scorePlayer} scoreComputer={scoreComputer}/>
        </C.Flex>
        <C.Space margin='30px'/>
            <C.Flex justify='space-around'>
              <C.Tipography size='32px'>{actionPlayer}</C.Tipography>
              <C.Tipography size='32px'>{actionComputer}</C.Tipography>
            </C.Flex>
        <C.Space margin='30px'/>
              <C.Flex direction='column' gap='0px'>
                <C.Tipography>{textGame}</C.Tipography>
                <C.Rules  onClick={()=> openModalmessage ('rules')}>Regras</C.Rules>
                <C.Space margin='30px'/>
                <ActionsGame disabled={disabledaction} actions={actions} onClick={(value) => targetValue(value)}/>
                <Modal titleModal={titleModal} open={open} messageModal={messageModal} xModal={() => closeModal()}/>
          </C.Flex>
    </C.Container>
    </div>
  );
}

export default App;
