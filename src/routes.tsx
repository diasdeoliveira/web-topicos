import { Switch, Route } from "react-router-dom";
import Home from './pages/Home'
import HomeWork1 from './pages/HomeWork1'
import HomeWork2 from './pages/HomeWork2'
import HomeWork3 from './pages/HomeWork3'
import Page1 from './pages/HomeWork3/pages/Page1'
import Page2 from './pages/HomeWork3/pages/Page2'
import Page3 from './pages/HomeWork3/pages/Page3'
import Page4 from './pages/HomeWork3/pages/Page4'
import Page5 from './pages/HomeWork3/pages/Page5'
import HomeWork5 from './pages/HomeWork5'

const MainRoutes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/atividade-5" component={HomeWork5} />
  </Switch>
)

export default MainRoutes;