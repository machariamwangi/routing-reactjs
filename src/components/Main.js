import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Meetsup from './Meetsup';
import About from './About';

const Main = () => {
    return (
        <Switch>
  <Route exact path="/" Component={Meetsup} >
      <Meetsup/>
  </Route>
  <Route exact path="/about" Component={About}>
      <About />
  </Route>

        </Switch>
    );
}

export default Main;
