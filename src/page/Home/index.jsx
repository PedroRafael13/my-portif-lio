import { Infor, Container, Poster } from "./style"
import Logo from '../../assets/poster.png'

function Home () {
  return (

  <>  
    <Container>
      <Infor>
        <h1>Pedro Rafael</h1>
        <p>Programador Front-End</p>
        <p>Desenvolvedor de software apaixonado por criar soluções inovadoras e eficientes. Com experiência profissional desenvolvida nas habilidades das seguintes tecnologias: HTML, CSS, JavaScript e REACT. Vivência na criação de websites responsivos e interativos, proporcionando uma experiência excepcional ao usuário, contribuindo para o avanço da indústria a cada dia que passa.</p>
      </Infor>

      <Poster>
        <img src={Logo} alt="" />
      </Poster>
    </Container>
  </>

  )
}

export default Home