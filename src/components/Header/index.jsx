import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

import Logo from '../../assets/logo.png'
import { Container, Menu, Li } from './styles'

function Header() {
  const [chageBackground, setChageBackground] = useState(false)
  const { pathname } = useLocation()

  window.onscroll = () => {
    if (!chageBackground && window.pageYOffset > 150) {
      setChageBackground(true)
    }
    if (chageBackground && window.pageYOffset <= 150) {
      setChageBackground(false)
    }
  }

  return (
    <Container chageBackground={chageBackground}>
      <img src={Logo} alt="logo-dev-movies" />
      <Menu>
        <Li isActive={pathname === '/'}>
          <Link to="/">Home</Link>
        </Li>
        <Li isActive={pathname.includes('filmes')}>
          <Link to="/filmes">Filmes</Link>
        </Li>
        <Li isActive={pathname.includes('series')}>
          <Link to="/series">Séries</Link>
        </Li>
      </Menu>
    </Container>
  )
}
export default Header
