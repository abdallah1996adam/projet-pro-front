import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import Header from "./pages/partials/Header";
import { Login } from "./pages/Forms";
import { Signup } from "./pages/Forms";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
