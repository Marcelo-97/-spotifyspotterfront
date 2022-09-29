import * as React from "react";
import { BrowserRouter as Router,Switch, Route } from 'react-router-dom';
import Home from "./pages/home";
import Game from "./pages/game";
function App() {
  return (

    <Router>
      
      <Switch>
         <Route path="/game" ><Game /> </Route>
         <Route path="/" > <Home/></Route>
        </Switch>
       
    </Router>
  );
}

export default App;
