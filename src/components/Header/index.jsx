import Logo from '../../assets/Logotipo.png.png'

function Header(){
  return(
    <div>
      <img src={Logo} alt="logo-pedro" style={{width: 500}} />
    </div>
  )
}

export default Header