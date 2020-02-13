import React from 'react';
import Inicio from './components/inicio/inicio';
import Menu from './components/inicio/menu/menu';
import Arbol from './components/inicio/arbol/arbol';
import Work from './components/inicio/secciones/work';
import About from './components/inicio/secciones/about';

function App() {
  return (
    <div>
      <Inicio />
      <Menu />
      <Arbol />
      <Work />
      <About />
    </div>
  );
}

export default App;
