import { Contacto } from "../models/contacto.class";
import '../estilos/style.css'

const EstadoContacto = ({Contacto}) => {

    return(
        <div>            

            <h1>Nombre: {Contacto.nombre}</h1> 
            
            <h2> Apellido: {Contacto.apellido}</h2>
            
            <h3>Email: {Contacto.email}</h3>

            <h4>Conectado: {Contacto.conectado ? 'Contacto en línea' : ' Contacto no disponible'}</h4>

        </div>

    )

}

export default EstadoContacto;

