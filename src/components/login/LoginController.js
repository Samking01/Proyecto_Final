import {dataBase} from "../../DBconf";
import{useHistory} from "react-router-dom";

const LoginController = ()=>{

    let history = useHistory();
    return{
        LoginUser(email,password) {
            dataBase.collection('Usuarios')
            .get()
            .then( resultado => {
                let usuarios = [];
                resultado.forEach(usuarioBD=>{usuarios.push(usuarioBD.data())});
                let usuario = usuarios.filter(usuarioBD=>usuarioBD.Usuario===email&&usuarioBD.Clave===password )[0];
                if(usuario!=null){
                    localStorage.setItem("usuario",JSON.stringify(usuario));
                    history.push("/");
                }
            });
        },

        UserExist(email){
            return dataBase.collection('Usuarios') 
            .get()
            .then(resultado => {
                let usuarios = [];
                resultado.forEach(usuarioBD=>{usuarios.push(usuarioBD.data())});
                let usuario = usuarios.filter(usuarioBD=>usuarioBD.Usuario===email)[0];
                return usuario !== undefined;
            })
        },

        RegisterUser(email,nombre,apellido,password){
            const usuario = {
                Usuario: email,
                Nombre: nombre,
                Apellido: apellido,
                Clave: password
            }

            dataBase.collection('Usuarios')
            .add(usuario);
            localStorage.setItem("usuario",JSON.stringify(usuario));
            history.push("/");
        }



    }
}



export default LoginController;