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
    <s.Img src="https://tecnoblog.net/wp-content/uploads/2014/10/html5.jpg" alt="Logo do HTML5" />
  </main>
)

export default HomeWork2