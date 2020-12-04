import { Switch, Route } from "react-router-dom";

import Base from "./pages/Base";
import Home from "./pages/Home";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/base" component={Base} />
    </Switch>
  );
};

export default Routes;
