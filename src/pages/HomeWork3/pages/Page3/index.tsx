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
    <Link to="/atividade-3/4">
    Página 4
    </Link>
    <Link to="/atividade-3/5">
    Página 5
    </Link>  
  </s.Nav>
  <s.Img src="https://miro.medium.com/max/700/1*ahpxPO0jLGb9EWrY2qQPhg.jpeg" alt="Logo do JavaScript" />
  </main>
)

export default HomeWork2