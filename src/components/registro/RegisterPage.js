import React,{useState} from 'react';
import LoginController from "../login/LoginController";
import {Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css"


const RegisterPage = () => {

    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setconfirmPassword] = useState("");
    const loginController = LoginController();
  
    // Funciones
    function changeEmail(e) {
      setEmail(e.currentTarget.value);
    }
    function changePassword(e) {
      setPassword(e.currentTarget.value);
    }
    function changeConfirmPassword(e) {
        setconfirmPassword(e.currentTarget.value);
      }
    function changeNombre(e){
        setNombre(e.currentTarget.value);
    }
    function changeApellido(e){
        setApellido(e.currentTarget.value);
    }
  
    function submit(e) {
      e.preventDefault();
      if(password===confirmPassword){         
        loginController.UserExist(email).then(resultado =>{
            if(resultado){
                alert("El usuario ya existe")
                return;
            }
            loginController.RegisterUser(email,nombre,apellido,password);
        })}
    }
  
    return (
      <form onSubmit={submit}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            onChange={changeEmail}
            value={email}
          />
          <small id="emailHelp" className="form-text text-muted">
            We&apos;ll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            onChange={changePassword}
            value={password}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Confirm Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Confirm Password"
            onChange={changeConfirmPassword}
            value={confirmPassword}
          />
        </div>
        <div className="form-group">
          <label htmlFor="inputName">Nombre</label>
          <input
            type="text"
            className="form-control"
            id="inputName"
            placeholder="Nombre"
            onChange={changeNombre}
            value={nombre}
          />
        </div>
        <div className="form-group">
          <label htmlFor="inputLastname">Apellido</label>
          <input
            type="text"
            className="form-control"
            id="inputLastname"
            placeholder="Apellido"
            onChange={changeApellido}
            value={apellido}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Registrarme
        </button>
        <br/>
        <Link to = "/login" >
          Ya estoy Registrado
        </Link>
        
      </form>
    );
}

export default RegisterPage;