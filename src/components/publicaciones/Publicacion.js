import React from 'react';
import "bootstrap/dist/css/bootstrap.css"


function Publicacion({usuario, publicacion, fecha}){
    return(
                <div className="card" style={{width:"100%"}}>
        <div className="card-body">
            <h5 className="card-title">{usuario}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{fecha}</h6>
            <p className="card-text">{publicacion}</p>
        </div>
        </div>
    );
}

export default Publicacion;