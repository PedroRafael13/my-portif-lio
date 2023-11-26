import { Infor, Container,Poster } from "./style"
import Logo from '../../assets/asa_nortuna.png'
import Icon from "../../components/Icon"

function Home () {
  return (

  <>
    <Container>
      <Infor>
        <h1>Pedro Rafael</h1>
        <h2>Desenvolvedor <span>Front-End</span></h2>
        <p>Desenvolvedor de software apaixonado por criar soluções inovadoras e eficientes. Com experiência profissional desenvolvida nas habilidades das seguintes tecnologias: HTML, CSS, JavaScript e REACT. Vivência na criação de websites responsivos e interativos, proporcionando uma experiência excepcional ao usuário, contribuindo para o avanço da indústria a cada dia que passa.</p>
        <Icon />
      </Infor>
      <Poster>
        <img src={Logo} alt="poster-simbolo" />
      </Poster>
    </Container>  
  </>

  )
}

export default Home