/* eslint-disable class-methods-use-this */
import React from 'react';
import './inicio.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faAngleDoubleDown);

class Inicio extends React.Component {
  constructor(props) {
    super(props);
    this.firstDiv = React.createRef();
    this.secondDiv = React.createRef();
    this.thirdDiv = React.createRef();
    this.fourthDiv = React.createRef();
    this.scroll = this.scroll.bind(this);
  }

  scroll(ref) {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  }

  render() {
    return (
      <div id="page-wrap">
        <div className="screen-wrap">
          <div className="content-wrap">
            <h1>Luciana Pradenas</h1>
            <p>Developer front end</p>
          </div>
          <FontAwesomeIcon icon={faAngleDoubleDown} onClick={() => this.scroll(this.secondDiv)} />
        </div>
      </div>
    );
  }
}

export default Inicio;
