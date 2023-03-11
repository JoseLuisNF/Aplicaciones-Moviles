//Importacion de librería y hoja de estilos
import React from 'react';
import './Footer.css';

function Footer(props){
        return(
            <div className='Footer'>
               {props.etiqueta}
            </div>
        );
}
export default Footer;