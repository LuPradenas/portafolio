import React from 'react';
import  styles from './menu.module.scss';
import { Link ,Route } from 'react-router-dom';


class Menu extends React.Component {
  state = {menuOpen: false};
  toggleClass =() => {
    const menuSeccionOpenValue = ! this.state.menuOpen;
    this.setState({menuOpen:menuSeccionOpenValue
    });
  console.log(this.state.menuOpen)
  };
render(){

  return (
  <header>
<div className="menu-section" onClick={this.toggleClass}>
  <div className="menu-toggle " onClick={this.toggleClass} >
    <div className={styles.one}></div>
    <div className={styles.two}></div>
    <div className={styles.three}></div>
  </div>
  <div>
  
  <React.Fragment>
		<ul className={!this.state.menuOpen ? 'hidden' : ''} >
			<li>
      <Link to="/inicio">Inicio</Link>
      </li>
      <li>
      <Link to="/trabajos">Proyectos</Link>
      </li>
			<li>
    
    <Link to="/sobremi">Sobre mi</Link>
  
      </li>
			<li>
      <Link to="/contacto">Contacto</Link>
      </li>
		</ul>
    </React.Fragment>
	</div>
</div>
</header>
  
  );
}
}


export default Menu;




