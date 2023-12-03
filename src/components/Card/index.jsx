import {Container, Button} from "./style"

function Card({name, description, url, language}){
  return(
    <Container>
      <h1>{name}</h1>
      <p>{description}</p>
      <p>{language}</p>
      <Button>
        
      </Button>
    </Container>
  )
}

export default Card