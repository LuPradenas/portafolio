/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Sobremi from '../secciones/Seccion/sobremi';
import Contacto from '../secciones/Seccion/contacto';
import trabajos from '../secciones/Seccion/trabajos';
import Inicio from '../inicio/inicio';
import Menu from '../inicio/menu/menu';

const history = createBrowserHistory();

const AppRouter = ({ children }) => (
  <>
    <Menu />
    
    <Switch>
      <Route path="/sobremi" component={Sobremi} />
      <Route path="/contacto" component={Contacto} />
      <Route path="/trabajos" component={trabajos} />
      <Route path="/" component={Inicio} />
    </Switch>
    {children}
  </>
);
export default AppRouter;
