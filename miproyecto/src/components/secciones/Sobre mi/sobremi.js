/* eslint-disable class-methods-use-this */
import React from 'react';
import styles from './sobremi.module.scss';
import Mariposa from './Mariposa/mariposa';
import Container2 from './sobremi2';

class Sobremi extends React.Component {
  render() {
    return (
      <>
        <div className={styles.container}>
          <div className={styles.card}>
            <Mariposa />
            <h1 className={styles.title}> Sobre Mi </h1>
            <p className={styles.paragraph}>
              It is a long established fact that a reader will be distracted by the readable content of a page
              when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using Content here, content here, making it look like
              readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for lorem ipsum will uncover many web sites still in
              their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on
              purpose (injected humour and the like).
            </p>
            <div className={styles.heart}></div>
          </div>
        </div>
        <Container2 />
      </>
    );
  }
}
export default Sobremi;
