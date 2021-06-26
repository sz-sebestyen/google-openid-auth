import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import NotFound from "./NotFound";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route exact path="/login">
        <Login />
      </Route>

      <Route path="/*">
        <NotFound />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Router;
