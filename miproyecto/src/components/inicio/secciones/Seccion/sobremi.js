import React from 'react';
import Menu from './components/inicio/menu/menu';
import cesped from './imagenes/cesped.svg';
import from './sobremi.css';

class About extends React.Component {
  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <section id="caja">
        <Menu />
        <div className="container">
          <div className="card">
            <h1>Sobre Mi </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua.
            </p>
            <div className="heart"></div>
          </div>
        </div>
        <img src={cesped} alt="cesped" />
      </section>
    );
  }
}
export default About;
