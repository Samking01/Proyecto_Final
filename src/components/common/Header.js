import React from "react";
import{useHistory} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css"


const Header = ()=> {
    let history = useHistory();

    function logout (){
        localStorage.removeItem("usuario")
        history.push("/login");
        console.log("hola");
    }
    return(
        <div>
            <h2>Muro interactivo</h2>
            <button onClick = {logout}
                className = "btn btn-link"
            >Log out</button>
        </div>
    )

}

export default Header