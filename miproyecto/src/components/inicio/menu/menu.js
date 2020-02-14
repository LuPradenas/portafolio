import React from "react";
import styles from "./menu.module.scss";
import { Link } from "react-router-dom";

class Menu extends React.Component {
  state = { menuOpen: false };

  toggleClass = () => {
    const menuSeccionOpenValue = !this.state.menuOpen;
    this.setState({ menuOpen: menuSeccionOpenValue });
    console.log(this.state.menuOpen);
  };
  render() {
    return (
      <header>
        <div
          className={this.state.menuOpen ? styles.menuOpen : styles.menu}
          onClick={this.toggleClass}
        >
          <div className={styles.toggle} onClick={this.toggleClass}>
            <div
              className={
                !this.state.menuOpen
                  ? `${styles.one} ${styles.toggle} `
                  : styles.one
              }
            ></div>
            <div
              className={
                !this.state.menuOpen
                  ? `${styles.barrados} ${styles.toggle}   `
                  : styles.two
              }
            ></div>
            <div
              className={
                !this.state.menuOpen
                  ? `${styles.barratres} ${styles.toggle}  `
                  : styles.three
              }
            ></div>
          </div>
          <div>
            <nav>
              <ul
                className={
                  !this.state.menuOpen
                    ? `${styles.hidden} ${styles.ul}`
                    : styles.ul
                }
              >
                 <li>
                  <Link className={styles.link} to="/">
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link className={styles.link} to="/trabajos">
                    Proyectos
                  </Link>
                </li>
                <li>
                  <Link className={styles.link} to="/sobremi">
                    Sobre mi
                  </Link>
                </li>
                <li>
                  <Link className={styles.link} to="/contacto">
                    Contacto
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    );
  }
}

export default Menu;
