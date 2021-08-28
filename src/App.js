import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {HomePage} from './pages/home-page'
import {HomesList} from './pages/homes-list'

function App() {
  return (
    <Router>
     <Switch>
       <Route exact path="/">
         <HomePage />
       </Route>
       <Route path="/homes-list">
         <HomesList />
       </Route>
     </Switch>
   </Router>
  );
}

export default App;
