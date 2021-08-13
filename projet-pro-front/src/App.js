import React, { useEffect, createContext, useReducer, useContext} from "react";
import { Route, Switch, BrowserRouter, useHistory } from "react-router-dom";

import { reducer, initialState } from "./reducers/userReducer";

import Home from "./pages/Home";
import Header from "./pages/partials/Header";
import { Login } from "./pages/Forms";
import { Signup } from "./pages/Forms";
import Profile from "./pages/Profile";
import Tours from "./pages/Tours";
import Details from "./pages/Details";

export const UserContext = createContext();

//create routing component to get access to the history
const Routing = () => {

  const {state,dispatch} = useContext(UserContext)
  const history = useHistory();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));

//if the user close the application but he hasn't logged out yet so in that case my state is getting destroyed so I should update the state
    if (user) {
      dispatch({type:"USER", payload:user})
      history.push("/profile");
     } else {
       history.push("/");
     }
  }, []);

  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/tours" component={Tours} />
        <Route exact path="/tour/:id" component={Details} />
      </Switch>
    </>
  );
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <UserContext.Provider value={{ state, dispatch }}>
      <BrowserRouter>
        <Header />
        <Routing />
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
