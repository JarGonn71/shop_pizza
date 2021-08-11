import React from "react";
import Navbar from "./components/Navbar";
import {Route, Switch} from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";


function App() {
  return (
      <div className="wrapper">
          <Navbar />
          <div className="content">
              <Switch>
                  <Route path='/' exact component={Home}/>
                  <Route path='/cart' exact component={Cart}/>
              </Switch>

          </div>
      </div>
  );
}

export default App;
