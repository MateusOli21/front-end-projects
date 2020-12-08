import React from "react";
import { Switch } from "react-router-dom";

import Route from "./Route";

import Home from "../pages/Home";
import Rooms from "../pages/Rooms";
import SingleRoom from "../pages/SingleRoom";
import ErrorPage from "../pages/Error";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/rooms" component={Rooms} />
      <Route path="/rooms/:room" component={SingleRoom} />
      <Route component={ErrorPage} />
    </Switch>
  );
}
