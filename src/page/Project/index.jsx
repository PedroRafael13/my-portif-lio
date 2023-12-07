import { useEffect, useState } from "react"
import Card from "../../components/Card"
import { Container, H1 } from "./style"

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
    <H1>Oi, bem-vindo! Fique à vontade para conferir os meus projetos</H1>
    <Container>
      {repositories && (
        repositories.length > 0 ? (

          repositories.slice(0,4).map((repo) => (
            <Card key={repo.id} name={repo.name} full_name={repo.full_name} language={repo.language} html_url={repo.html_url} />
          ))
        ) : (
          <p>Carregando....</p>
        )
      )}
    </Container>
    </>    
  )
}

export default Project