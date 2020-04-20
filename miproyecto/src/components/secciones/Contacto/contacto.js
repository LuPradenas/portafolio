import React from 'react';

import style from './styles.module.scss';
import Gato from './Gato/gato';
import Formulario from '../Formulario/formulario';

function Contacto() {
  return (
    <>
      <Gato />
      <div className={style.rectangle}>
        <div className={style.rectangleOne}>
          <h1 className={style.sectionHeader}>Contacto</h1>
          <Formulario />
        </div>

      </div>
    </>
  );
}

export default Contacto;
