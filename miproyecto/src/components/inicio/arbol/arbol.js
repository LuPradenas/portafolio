/* eslint-disable class-methods-use-this */
import React from 'react';
import arbol from './arbol.svg';
import './arbol.css';

class Arbol extends React.Component {
  render() {
    return (
      <div>
        <img src={arbol} alt="arbol" />
      </div>
    );
  }
}

export default Arbol;
