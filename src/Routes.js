import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from './pages/Main/Main';
import Question from './pages/Question/Question';
import Result from './pages/Result/Result';

const Routes = () => {
  return (
    <Switch> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' component={Main}></Route>
      <Route exact path='/questions' component={Question}></Route>
      <Route exact path='/result' component={Result}></Route>
    </Switch>
  );
}

export default Routes;