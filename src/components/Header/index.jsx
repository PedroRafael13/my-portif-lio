import { Link, useLocation } from "react-router-dom"
import { Container, Menu, Li } from "./style"
import Logo from '../..//assets/Logo_Peter.png'

function Header(){
const { pathname } = useLocation()

  return(
    <>
      <Container>
        <img src={Logo} />
          <Menu>
            <Li isActive={pathname === '/'}>
              <Link to='/' >Home</Link>
            </Li>

            <Li isActive={pathname.includes('/AboutMe')}>
              <Link to='/AboutMe' >About Me</Link>
            </Li>

            <Li isActive={pathname.includes('/Project')}>
              <Link to='/Project' >Project</Link>
            </Li>

            <Li isActive={pathname.includes('/Skills') }>
              <Link to='/Skills'>Skills</Link>
            </Li>
          </Menu>
      </Container>
    </>
  )
}

export default Header