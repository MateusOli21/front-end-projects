import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Base from "./pages/Base";
import Home from "./pages/Home";
import Order from "./pages/Order";
import Toppings from "./pages/Toppings";

const Routes = () => {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.key}>
        <Route exact path="/" component={Home} />
        <Route path="/base" component={Base} />
        <Route path="/toppings" component={Toppings} />
        <Route path="/order" component={Order} />
      </Switch>
    </AnimatePresence>
  );
};

export default Routes;
