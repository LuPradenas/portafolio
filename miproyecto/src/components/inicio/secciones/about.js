import React from 'react';
import './about.css';
import arbol from './arbol.svg';

class About extends React.Component {
  render() {
    return (
      <div>
        <img src={arbol} alt="arbol" />
      </div>
    );
  }
}

export default About;
