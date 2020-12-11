import { Switch, Route } from "react-router-dom";
import Home from './pages/Home'
import HomeWork1 from './pages/HomeWork1'
import HomeWork2 from './pages/HomeWork2'

const MainRoutes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/atividade-1" component={HomeWork1} />
    <Route path="/atividade-2" component={HomeWork2} />
  </Switch>
)

export default MainRoutes;