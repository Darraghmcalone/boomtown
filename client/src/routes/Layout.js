import React, { Fragment } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import Home from '../pages/Home';
import Items from '../pages/Items';
import Share from '../pages/Share';
import Profile from '../pages/Profile';
import Test from '../pages/Test';

export default () => (
  <Fragment>
    {/* @TODO: Add your menu component here */} 
      
    <Switch>
      
      <Route exact path="/welcome" component={Home} />
      <Route exact path="/items" component={Items} />
      <Route exact path="/test" component={Test} />
      <Route exact path="/share" component={Share} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/profile/:userid" component={Profile} />

      <Redirect to='/items'/>
      
    </Switch>
  </Fragment>
);
