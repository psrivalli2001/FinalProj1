import { connect } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import React, { useEffect } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import { Messaging } from "./components/Messaging";
import { getUserAuth } from "./actions";
import { MyBuddies } from "./components/MyBuddies";
import { Opportunities } from "./components/Opportunities";
import { Notifications } from "./components/Notifications";

function App(props) {
  useEffect(() => {
    props.getUserAuth();

  }, []);
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/Home">
            <Header />
            <Home />
          </Route>
          <Route path = "/Messaging">
            <Header/>
            <Messaging/>
          </Route>
          <Route path = "/MyBuddies">
            <Header/>
            <MyBuddies/>
          </Route>
          <Route path = "/Opportunities">
            <Header/>
            <Opportunities/>
          </Route>
          <Route path = "/Notifications">
            <Header/>
            <Notifications/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

const mapStateToProps = (stae) =>{
  return {};
};
const mapDispatchToProps = (dispatch) => ({
  getUserAuth: () => (getUserAuth()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);


//export default App;
