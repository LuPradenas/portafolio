import React from 'react';
import style from './work.modules.scss';

function Work() {
  return (
    <div className={style.boxes}>
      <div className={style.boxGreen}></div>
      <div className={style.boxRed}></div>
      <div className={style.boxYellow}></div>
    </div>
  );
}

export default Work;
