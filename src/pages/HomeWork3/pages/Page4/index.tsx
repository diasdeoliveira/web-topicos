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
    <Link to="/atividade-3/5">
    Página 5
    </Link>
  </s.Nav>
  <s.Img src="https://sujeitoprogramador.com/wp-content/uploads/2019/04/react.png" alt="Logo do React.JS" />
  </main>
)

export default HomeWork2