import React, {useRef} from 'react';
import {dataBase} from "../../DBconf";
import './Publicacion';

function NuevaPublicacion({agregarNuevaPublicacion}){
    const publicacionRef = useRef(null);


    const agregarPublicacion = ()=>{
        let usuario = JSON.parse(localStorage.getItem("usuario"));
        const Publicacion = {
            usuario:usuario.Nombre +" "+ usuario.Apellido,
            publicacion: publicacionRef.current.value,
            fecha: new Date().getDate()+"/"+(new Date().getMonth() + 1) +"/"+new Date().getFullYear(),
        }

        dataBase.collection('Publicaciones')
        .add(Publicacion);

        publicacionRef.current.value = "";
        agregarNuevaPublicacion(Publicacion);
    }

    return (
        <div class="card">
            <div class="card-header">
                Publicar
            </div>
            <div class="card-body">
                <textarea className= "form-control" ref={publicacionRef}  ></textarea>
                <br/>
                <button className="btn btn-primary" onClick={agregarPublicacion}>Agregar</button>
            </div>
         </div>
    );
}

export default NuevaPublicacion;