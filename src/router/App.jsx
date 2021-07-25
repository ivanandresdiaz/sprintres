/* eslint-disable import/prefer-default-export */
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  BrowserRouter,
  Switch,
  Redirect,
} from 'react-router-dom';
import { firebase } from '../firebase/firebaseconfig';
import Spinner from '../components/Spinner';
import Home from '../containers/Home/Home';

import { login } from '../actions/authActions';
import { AuthRouter } from './AuthRouter';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import Favoritos from '../containers/favoritos/Favoritos';

const App = () => {

  const [isLooged, setIsLogged] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(login(user.uid, user.displayName));
        setIsLogged(true);
      } else {
        setIsLogged(false);
      }
    });
  }, [isLooged, dispatch]);

  return (
    <BrowserRouter>
      <div>
        <Switch>
          <PublicRoute
            path='/auth'
            component={AuthRouter}
            isAuthenticated={isLooged}
          />

          <PrivateRoute
            exact
            path='/'
            component={Home}
            isAuthenticated={isLooged}
          />
          <PrivateRoute
            exact
            path='/favoritos'
            component={Favoritos}
            isAuthenticated={isLooged}
          />

          <Redirect to='/auth/login' />

        </Switch>
      </div>
    </BrowserRouter>
  );
};
export default App;
