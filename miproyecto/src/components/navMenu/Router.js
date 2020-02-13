/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import sobremi from '../inicio/secciones/Seccion/sobremi';
import contacto from '../inicio/secciones/Seccion/contacto';
import trabajos from '../inicio/secciones/Seccion/trabajos';

const AppRouter = () => (
  <App>
    <Switch>
      <Route path="/sobremi" component={sobremi} />
      <Route path="/contacto" component={contacto} />
      <Route path="/trabajos" component={trabajos} />
    </Switch>
  </App>
);
export default AppRouter;
