import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
    
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
