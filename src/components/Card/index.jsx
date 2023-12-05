import { Link } from "react-router-dom"
import { Container, link } from "./style"
import { FaArrowRight } from "react-icons/fa";

function Card({name, description, html_url, language}){
  return(
    <Container>
      <h1>{name}</h1>
      <p>{description}</p>
      <p>{language}</p>
      <Link to={html_url} className={style.link} >
        <FaArrowRight />
      </Link>
    </Container>
  )
}

export default Card