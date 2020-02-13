import React from 'react';
import AppRouter from './components/navMenu/Router';
import Inicio from './components/inicio/inicio';
import Menu from './components/inicio/menu/menu';
import Arbol from './components/inicio/arbol/arbol';
import Work from './components/inicio/secciones/work';
import About from './components/inicio/secciones/about';

function App() {
  return (
    <AppRouter>
      <Inicio />
      <Menu />
      <Arbol />
      <Work />
      <About />
    </AppRouter>
  );
}

export default App;
