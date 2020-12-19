import { Link } from 'react-router-dom'

import * as s from './styles'

const HomeWork2 = () => (
  <main>
  <s.Nav>
    <Link to="/">
      All Home Works
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
    <Link to="/atividade-3/5">
    Página 5
    </Link>
  </s.Nav>
  </main>
)

export default HomeWork2