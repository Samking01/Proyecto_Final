import React,{useState} from 'react';
import LoginController from "./LoginController";
import {Link} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.css"


const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const loginController = LoginController();

    // Funciones
    function changeEmail(e) {
      setEmail(e.currentTarget.value);
    }
    function changePassword(e) {
      setPassword(e.currentTarget.value);
    }
  
    function submit(e) {
      e.preventDefault();
     loginController.LoginUser(email,password);

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
        <button type="submit" className="btn btn-primary">
          Acceder
        </button>
        <br/>
        <Link to = "/register" >
          registro 
        </Link>
      </form>
    );
}

export default LoginPage;