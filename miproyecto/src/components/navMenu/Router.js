/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Sobremi from '../secciones/Sobre mi/sobremi';
import Contacto from '../secciones/Contacto/contacto';
import Inicio from '../inicio/inicio';
import Menu from '../menu/menu';

const history = createBrowserHistory();

const AppRouter = ({ children }) => (
  <>
    <Menu />
    <Switch>
      <Route path="/sobremi" component={Sobremi} />
      <Route path="/contacto" component={Contacto} />
      <Route path="/" component={Inicio} />
    </Switch>
    {children}
  </>
);
export default AppRouter;
