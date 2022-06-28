import React from 'react'
import PropTypes from 'prop-types'
import { Contacto } from "../models/contacto.class";
import EstadoContacto from '../puros/componenteB';


const ComponenteA = () => {

    const primerContacto = new Contacto('Nicolas', 'Di Scala', 'nd@gmail', true);
    const segundoContacto = new Contacto('Tomas', 'Perez', 'tperez@gmail', false);
    const tercerContacto = new Contacto('Axel', 'Rodriguez', 'Arodriguez@gmail', true);



  return (
    <div>
            
            <EstadoContacto Contacto={primerContacto}> </EstadoContacto>
            
            <EstadoContacto Contacto={segundoContacto}> </EstadoContacto>

            <EstadoContacto Contacto={tercerContacto}> </EstadoContacto>

    </div>
  )
}

ComponenteA.propTypes = {

}

export default ComponenteA