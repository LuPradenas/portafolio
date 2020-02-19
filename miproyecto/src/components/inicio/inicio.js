/* eslint-disable class-methods-use-this */
import React from 'react';
// import './inicio.module.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import About from '../circulos/about';
import Work from '../circulos/work';
import Arbol from './arbol/arbol';

import styles from './inicio.module.scss';

library.add(faAngleDoubleDown);

class Inicio extends React.Component {
  render() {
    // eslint-disable-next-line no-console
    console.log(styles);
    return (
      <>
        <div id="page-wrap">
          <div className={styles.screenwrap}>
            <div className={styles.contentwrap}>
              <h1 className={styles.titulo}>Luciana Pradenas</h1>
              <p className={styles.parrafo}>Developer front end</p>
            </div>
            <FontAwesomeIcon icon={faAngleDoubleDown} />
          </div>
          <About />
          <Arbol />
          <Work />
        </div>
      </>
    );
  }
}

export default Inicio;
