/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import sobremi from '../inicio/secciones/Seccion/sobremi';
import contacto from '../inicio/secciones/Seccion/contacto';
import trabajos from '../inicio/secciones/Seccion/trabajos';

const history = createBrowserHistory();

const AppRouter = ({ children }) => (
  <Router history={history}>
    <Switch>
      <Route path="/sobremi" component={sobremi} />
      <Route path="/contacto" component={contacto} />
      <Route path="/trabajos" component={trabajos} />
    </Switch>
    {children}
  </Router>
);
export default AppRouter;
