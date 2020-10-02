import React from "react";
import { Switch, Route } from "react-router-dom";
import "./css/App.css";
import Main from "./Main";
import Login from "./login";
import Plan from "./plan";
import Apps from "./Apps";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/login" component={Login} />
        <Route path="/plan" component={Plan} />
        <Route path="/mainapp" component={Apps} />
      </Switch>
    </>
  );
};

export default App;
