import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => (
  <ul>
    <Link to="/atividade-1">
      <li><h2>atividade - 1</h2></li>
    </Link>
    <Link to="/atividade-2">
      <li><h2>atividade - 2</h2></li>
    </Link>
  </ul>
)

export default Home