import React from 'react';
import './about.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import {faAngleDoubleDown} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  library.add(faAngleDoubleDown)


class About extends React.Component{
 render () {
     return (
<div>
<div>
    <h1>About Me</h1>

 <FontAwesomeIcon
  icon={faAngleDoubleDown}
    onClick={() => this.scroll(this.secondDiv)}
  />
    </div>
    </div>
     );
   }
}

export default About;