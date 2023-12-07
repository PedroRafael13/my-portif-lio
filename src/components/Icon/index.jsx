import { Container, Ul } from './style';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

function icon () {
  return(
    <Container>
      <Ul>
        <li>
          <a href="https://github.com/PedroRafael13"><FaGithub/></a>
        </li>
        <li>
        <a href="https://www.linkedin.com/in/pedro-rafael13/"><FaLinkedin/></a>
        </li>
        <li>
        <a href="mailto:pedrorafaeldsn12@gmail.com"><FaEnvelope/></a>
        </li>
      </Ul>
    </Container>
  )
}

export default icon