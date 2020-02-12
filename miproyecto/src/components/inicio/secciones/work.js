/* eslint-disable class-methods-use-this */
import React from 'react';
import './work.modules.scss';

class Work extends React.Component {
  render() {
    return (
      <div className="boxes">
        <div className="box green"></div>
        <div className="box red"></div>
        <div className="box yellow"></div>
      </div>
    );
  }
}

export default Work;
