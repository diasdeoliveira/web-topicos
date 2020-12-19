import { Link } from 'react-router-dom'

import * as s from './styles'

const HomeWork2 = () => (
  <main>
  <s.Nav>
    <Link to="/">
      All Home Works
    </Link>
    <Link to="/atividade-3">
      Home
    </Link>
    <Link to="/atividade-3/1">
      Página 1
    </Link>
    <Link to="/atividade-3/2">
    Página 2
    </Link>
    <Link to="/atividade-3/3">
    Página 3
    </Link>
    <Link to="/atividade-3/4">
    Página 4
    </Link>
  </s.Nav>
  <s.Text>Ás páginas anteriores mostram tecnologias usadas para construção de websites, incluindo esse que você está acessando agora!</s.Text>
  </main>
)

export default HomeWork2