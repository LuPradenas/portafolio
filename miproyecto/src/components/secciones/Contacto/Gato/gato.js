import React from 'react';
import style from './style.module.scss';

function Gato() {
  return (
    <>
      <div>
        <div className={style.main}>
          <div className={style.cat}>
            <div className={style.body}></div>
            <div className={style.head}>
              <div className={style.ear}></div>
              <div className={style.ear}></div>
            </div>
            <div className={style.face}>
              <div className={style.nose}></div>
              <div className={style.whiskerContainer}>
                <div className={style.whisker}></div>
                <div className={style.whisker}></div>
              </div>
              <div className={style.whiskerContainer}>
                <div className={style.whisker}></div>
                <div className={style.whisker}></div>
              </div>
            </div>
            <div className={style.tailContainer}>
              <div className={style.tail}>
                <div className={style.tail}>
                  <div className={style.tail}>
                    <div className={style.tail}>
                      <div className={style.tail}>
                        <div className={style.tail}>
                          <div className={style.tail}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Gato;