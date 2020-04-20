import React from 'react';
import style from './style.module.scss';

function Mariposa() {
  return (
    <div className={style.container2}>
      <div className={style.butterfly}>
        <div className={style.wing}>
          <div className={style.bit}></div>
          <div className={style.bit}></div>
        </div>
        <div className={style.wing}>
          <div className={style.bit}></div>
          <div className={style.bit}></div>
        </div>
      </div>
    </div>
  );
}
export default Mariposa;
