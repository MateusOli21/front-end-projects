import { Switch, Route } from "react-router-dom";

import Base from "./pages/Base";
import Home from "./pages/Home";
import Order from "./pages/Order";
import Toppings from "./pages/Toppings";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/base" component={Base} />
      <Route path="/toppings" component={Toppings} />
      <Route path="/order" component={Order} />
    </Switch>
  );
};

export default Routes;
