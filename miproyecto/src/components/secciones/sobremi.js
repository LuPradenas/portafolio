/* eslint-disable class-methods-use-this */
import React from 'react';
import styles from './sobremi.module.scss';

class Sobremi extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.card}>
          <h1 className={styles.title}> Sobre mi </h1>
          <p className={styles.paragraph}>
            ssakjlfhslkdgsfd sdgksdlgdfjkgjdf;lg fdbgjdfkghjdkfghnjfdk dgdsjhgdfgjkdsgfdj
            sgjkdsgdsjkgfndkndfkdf sakjlfhslkdgsfd sdgksdlgdfjkgjdf;lg fdbgjdfkghjdkfghnjfdk
            dgdsjhgdfgjkdsgfdj sgjkdsgdsjkgfndkndfkdf sakjlfhslkdgsfd sdgksdlgdfjkgjdf;lg
            fdbgjdfkghjdkfghnjfdk dgdsjhgdfgjkdsgfdj sgjkdsgdsjkgfndkndfkdf
          </p>
          <div className={styles.heart}></div>
        </div>
      </div>
    );
  }
}
export default Sobremi;
