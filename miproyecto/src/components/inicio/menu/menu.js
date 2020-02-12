import React from 'react';
import  styles from './menu.module.scss';


class Menu extends React.Component {
  state={menuOpen: false};
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
  <nav>
		<ul className={!this.state.menuOpen ? 'hidden' : ''} >
			<li><a href="/">work</a></li>
			<li><a href="/">about me</a></li>
			<li><a href="/">resume</a></li>
			<li><a href="/">contact</a></li>
		</ul>
    </nav>
	</div>
</div>
</header>
  
  );
}
}


export default Menu;




