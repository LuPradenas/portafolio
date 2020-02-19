/* eslint-disable class-methods-use-this */
import React from 'react';
import pajaro from './imagenes/pajaro.png';
import Formulario from './Formulario/formulario';

class Contacto extends React.Component {
  render() {
    return (
      <div>
        <div>
          <h2> Contacto</h2>
          <img src={pajaro} alt="pajaro" />
        </div>
        <Formulario />
      </div>
    );
  }
}

export default Contacto;
