import React from 'react';
import { Link } from 'react-router-dom';
import styles from './menu.module.scss';

function Menu() {
  return (
    <header>
      <div>
        <nav>
        
            <li>
              <Link className={styles.link} to="/">
                Inicio
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
        
        </nav>
      </div>
    </header>
  );
}

export default Menu;
