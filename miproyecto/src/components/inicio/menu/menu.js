import React from 'react';
import './menu.css';

class Menu extends React.Component {
  state={menuOpen: false};
  toggleClass =() => {
    const menuSeccionOpenValue = ! this.state.menuOpen;
    this.setState({isOpen:menuSeccionOpenValue
    });
  };
render(){

  return (
  <header>
<div className="menu-section">
  <div className="menu-toggle" onClick={this.toggleClass}>
    <div className="one"></div>
    <div className="two"></div>
    <div className="three"></div>
  </div>
  <div>
		<ul className="hidden">
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