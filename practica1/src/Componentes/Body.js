//Importacion de librería y hoja de estilos
import React, {Component} from 'react';
import './Body.css';

function Body(props){
    return(
        <div className='Body'>
           {props.arreglo.map((e,index)=><h1 key={index}>{e}</h1>)
           }
        </div>
    );
}
export default Body;