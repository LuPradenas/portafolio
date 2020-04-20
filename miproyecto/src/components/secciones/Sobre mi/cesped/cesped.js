import React from 'react';
import cesped from './cesped.svg';
import style from './cesped.module.scss';

function Caja() {
  return (
    <div>
      <img src={cesped} className={style.cesped} alt="cesped" />
    </div>
  );
}

export default Caja;
