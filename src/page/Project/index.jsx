import { useEffect, useState } from "react"
import Card from "../../components/Card"
import { Container } from "./style"

function Project(){

  const [repositories, setRepositories] = useState([])

  useEffect(() => {
    const searche = async () => {
      const response= await fetch('https://api.github.com/users/PedroRafael13/repos') 
      const data = await response.json()
      setRepositories(data)
    }
      console.log(repositories)
      searche()
  },[])

  return(
    <>
    <Container>
      <h1>Oi, bem-vindo! Fique à vontade para conferir os meus projetos</h1>
      {repositories && (
        repositories.length > 0
      )}
    </Container>
    </>    
  )
}

export default Project