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
  <s.Img src="https://colorlib.com/wp/wp-content/uploads/sites/2/creative-css3-tutorials.jpg" alt="Logo do CSS3" />
  </main>
)

export default HomeWork2