import React from 'react'
import { Link } from 'react-router-dom'

import * as s from './styles'

const Home = () => (
  <s.List>
    <Link to="/atividade-5">
      <li><h2>atividade - 5</h2></li>
    </Link>
  </s.List>
)

export default Home