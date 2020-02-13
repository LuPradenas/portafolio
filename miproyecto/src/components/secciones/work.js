/* eslint-disable class-methods-use-this */
import React from 'react';
import './work.modules.scss';

class Work extends React.Component {
  render() {
    return (
      <div className="boxes">
        <div className="box green">
          <a href="https://github.com/LuPradenas/portafolio"></a>
        </div>
        <div className="box red">
          <a href="https://github.com/Ghazj/paginaMate"></a>
        </div>
        <div className="box yellow">
          <a href="https://github.com/LuPradenas/memo-juego"></a>
        </div>
      </div>
    );
  }
}

export default Work;
