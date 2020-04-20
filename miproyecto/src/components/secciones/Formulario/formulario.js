import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  style from './formulario.module.scss';


library.add(faEnvelope, faMapMarkerAlt);
class  Formulario extends React.Component{
    state = {
      nombre: "",
      email: "",
      comentarios: ""
    };
  
    valueToState = ({ name, value, type }) => {
      this.setState(() => {
        return { [name]: type === value };
      });
    };
  
    render() {
      return (
        <div className={style.form}>
          <form>
            <div className={style.formHorizontal}>
            <input
             className={style.formControl}
              name="nombre"
              type="text"
              placeholder="Nombre"
              onChange={event => this.valueToState(event.target)}
            />
            <input
            className={style.formControl}
              name="email"
              type="email"
              placeholder="ejemplo@gmail.com"
              onChange={event => this.valueToState(event.target)}
            />
        
            <textarea
            className={style.textarea}
              name="comentarios"
              placeholder="Mensaje"
              onChange={event => this.valueToState(event.target)}
            />
            <button
             className={style.button} id="submit" type="submit" >enviar</button>
          </div>
          </form>
          <div className={style.contactContainer}>
            <ul className={style.contactList}>
              <li className={style.item}>
                <FontAwesomeIcon icon={faMapMarkerAlt} className={style.icon} />
                <span className={style.contactText}>Buenos Aires | CABA</span>
              </li>
              <li className={style.item}>
                <FontAwesomeIcon icon={faEnvelope} className={style.icon} />
                <span className={style.contactText}>lucianapradenas3@gmail.com</span>
              </li>
            </ul>
            <hr></hr>
            
            <div className={style.copyright}>&copy; ALL OF THE RIGHTS RESERVED</div>
          </div>
          </div>
        
         );
      }
    }
    
    export default Formulario;