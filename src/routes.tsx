import { Switch, Route } from "react-router-dom";
import Home from './pages/Home'
import HomeWork1 from './pages/HomeWork1'

const MainRoutes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/atividade-1" component={HomeWork1} />
  </Switch>
)

export default MainRoutes;