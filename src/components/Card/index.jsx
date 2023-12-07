import { Link } from "react-router-dom"
import { Container,} from "./style"
import { FaArrowRight } from "react-icons/fa";

function Card({name, full_name, html_url, language}){
  return(
    <Container>
      <h1>{name}</h1>
      <p>{language}</p>
      <p>{full_name}</p>
      <Link to={html_url}>
        <FaArrowRight />
      </Link>
    </Container>
  )
}

export default Card