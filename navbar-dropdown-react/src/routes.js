import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Marketing from "./pages/Marketing";
import Products from "./pages/Products";
import Services from "./pages/Services";
import Design from "./pages/Design";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/services" component={Services} />
      <Route path="/products" component={Products} />
      <Route path="/marketing" component={Marketing} />
      <Route path="/design" component={Design} />
    </Switch>
  );
};

export default Routes;
