/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ReactDOM from './react-dom';
import sobremi from '../inicio/secciones/Seccion/sobremi';
import contacto from '../inicio/secciones/Seccion/contacto';
import trabajos from '../inicio/secciones/Seccion/trabajos';

const App = () => (
  <BrowserRouter>
    <React.Fragment>
      <Route path="/sobremi" component={sobremi} />
      <Route path="/contacto" component={contacto} />
      <Route path="/trabajos" component={trabajos} />
    </React.Fragment>
  </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById('root'));
