import { Container, H1, Skills} from "./style"
import { FaHtml5, FaCss3, FaReact, FaNode } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";

function Skiils(){
  return(
   <>
    <Container>
      <H1>
        <h1>Tecnologias que Uso : </h1>
      </H1>
    </Container>

      <Skills>
        <ul>
          <li>
             <FaHtml5 />
          </li>
          <li>
            <FaCss3 /> 
          </li>
          <li>
            <IoLogoJavascript />
          </li>
          <li>
            <FaReact />
          </li>
          <li>
          <FaNode />
          </li>
        </ul>
      </Skills>
    </>   
  )
}

export default Skiils