import React, { Fragment } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import {home} from '../pages/Home';
import {Items} from '../pages/Items';
import {share} from '../pages/Share';
import {profile} from '../pages/Profile';

export default () => (
  <Fragment>
    {/* @TODO: Add your menu component here */} 
      
    <Switch>
      
      <Route exact path="/welcome" component={Home} />
      <Route exact path="/items" component={Items} />
      <Route exact path="/share" component={Share} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/profile/:userid" component={profile} />
      <Redirect to='/items'/>
      
    </Switch>
  </Fragment>
);
