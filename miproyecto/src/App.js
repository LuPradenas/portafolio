import React, { Fragment } from 'react';
import AppRouter from './components/navMenu/Router';

import Menu from './components/inicio/menu/menu';

function App() {
  return (
    <Fragment>
      <Menu />
      <AppRouter />
    </Fragment>
  );
}

export default App;
