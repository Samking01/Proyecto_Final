import Publicacion from './Publicacion';
import {useState, useEffect} from 'react';
import {dataBase} from "../../DBconf";
import NuevaPublicacion from "./nuevaPublicacion";
import Header from "../common/Header";

const PublicacionPage = ()=>{


const [publicaciones, setPublicaciones] = useState([]);

  const agregarNuevaPublicacion = (publicacion)=>{
    const tempPublicaciones = publicaciones.slice();
    tempPublicaciones.push(publicacion);
    setPublicaciones(tempPublicaciones);
  }

  useEffect(()=>{
    const listado = [];

    dataBase.collection('Publicaciones')
    .get()
    .then( resultado => {
      resultado.forEach( publicacion=>{
        listado.push(publicacion.data());
      })
      setPublicaciones(listado);
    }).catch( error=>console.log(error));
  }, []);
  return(<>
    <Header/>
    <NuevaPublicacion agregarNuevaPublicacion={agregarNuevaPublicacion} />
      {
        publicaciones && publicaciones.slice().reverse().map((publication, i)=>{
            const {usuario, publicacion, fecha} = publication;
            return (<Publicacion key={i} usuario={usuario} publicacion={publicacion} fecha={fecha} />) 
        })
      }
    </>)
}

export default PublicacionPage;