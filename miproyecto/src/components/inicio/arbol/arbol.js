/* eslint-disable class-methods-use-this */
import React from 'react';
import './arbol.css';
import arbol from './arbol.svg';

class Arbol extends React.Component {
  render() {
    return (
      <div>
        <div>
          <img src={arbol} alt="arbol" />
        </div>
      </div>
    );
  }
}

export default Arbol;
