import React from 'react';
import Inicio from './components/inicio/inicio';
import Menu from './components/inicio/menu/menu';
import About from './components/inicio/secciones/about';
function App() {
  return (
    <div>
    <Inicio/>
    <Menu/>
    <About/>
    </div>
  );
}

export default App;
