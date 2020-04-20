/* eslint-disable class-methods-use-this */
import React from 'react';
import style from './about.modules.scss';

function About() {
  return (
    <div className={style.boxes}>
      <div className={style.boxOne}></div>
      <div className={style.boxTwo}></div>
      <div className={style.boxThree}></div>
    </div>
  );
}

export default About;
