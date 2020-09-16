import Inferno from 'inferno'
import { Route, IndexRoute } from 'inferno-router'
import App from '../pages/App'
// import NotFound from '../pages/404'
import Homepage from '../pages/Homepage'
import Roulette from "../pages/Roulette";
import NotFound from "../pages/NotFound";

export default (
  <Route component={App}>
    <IndexRoute component={Homepage} />
    <Route path="/roulette" component={Roulette} />
    <Route path="*" component={ NotFound }/>
  </Route>
);
