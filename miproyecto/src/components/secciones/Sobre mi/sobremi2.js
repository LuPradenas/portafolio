import React from 'react';
import style from './styles.module.scss';
import Cesped from './cesped/cesped';

function Container2() {
  return (
    <section className={style.contenedor}>
      <h1 className={style.titulo2}>Framework</h1>
      <div className={style.globos}>
        <div className={style.balloon}>
          <span className={style.subtitle}>HTML</span>
        </div>
        <div className={style.balloon}>
          <span className={style.subtitle}>CSS</span>
        </div>
        <div className={style.balloon}>
          <span className={style.subtitle}>JS</span>
        </div>
        <div className={style.globos2}>
          <div className={style.balloon}>
            <span className={style.subtitle}>REACT JS</span>
          </div>
          <div className={style.balloon}>
            <span className={style.subtitle}>REACT NATIVE</span>
          </div>
          <div className={style.balloon}>
            <span className={style.subtitle}>BOOTSTRAP</span>
          </div>
        </div>
      </div>
      <Cesped />
    </section>
  );
}

export default Container2;
