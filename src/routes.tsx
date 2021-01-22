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
    <Route path="/atividade-1" component={HomeWork1} />
    <Route path="/atividade-2" component={HomeWork2} />
    <Route path="/atividade-3" exact component={HomeWork3} />
    <Route path="/atividade-3/1" component={Page1} />
    <Route path="/atividade-3/2" component={Page2} />
    <Route path="/atividade-3/3" component={Page3} />
    <Route path="/atividade-3/4" component={Page4} />
    <Route path="/atividade-3/5" component={Page5} />
    <Route path="/atividade-5" component={HomeWork5} />
  </Switch>
)

export default MainRoutes;