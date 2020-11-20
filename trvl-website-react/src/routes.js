import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Services from "./pages/Services";

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/services" component={Services} />
      <Route path="/products" component={Products} />
    </Switch>
  );
}

export default Routes;
