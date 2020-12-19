import React from 'react'
import { Link } from 'react-router-dom'

import * as s from './styles'

const Home = () => (
  <s.List>
    <Link to="/atividade-1">
      <li><h2>atividade - 1</h2></li>
    </Link>
    <Link to="/atividade-2">
      <li><h2>atividade - 2</h2></li>
    </Link>
    <Link to="/atividade-3">
      <li><h2>atividade - 3</h2></li>
    </Link>
  </s.List>
)

export default Home