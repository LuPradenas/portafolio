import React from 'react';
import './menu.css';

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
<div className="menu-section"onClick={this.toggleClass}>
  <div className="menu-toggle" >
    <div className="one"></div>
    <div className="two"></div>
    <div className="three"></div>
  </div>
  <div>
		<ul className={!this.state.menuOpen ? 'hidden' : ''}>
			<li><a href="/">work</a></li>
			<li><a href="/">about</a></li>
			<li><a href="/">resume</a></li>
			<li><a href="/">contact</a></li>
		</ul>
	</div>
</div>
</header>
  
  );
}
}


export default Menu;




//$(".menu-toggle").on('click', function() {
 // $(this).toggleClass("on");
 // $('.menu-section').toggleClass("on");
  //$("nav ul").toggleClass('hidden');
//});
//pasar esto a react