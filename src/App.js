import { GuardProvider, GuardedRoute } from 'react-router-guards';
import {Switch} from "react-router-dom";
import LoginPage from './components/login/LoginPage';
import PublicacionPage from './components/publicaciones/PublicacionPage';
import RegisterPage from './components/registro/RegisterPage';
import './App.css';


function App() {

  const requireLogin = (to, from, next) => {
    if (to.meta.auth) {
      let usuario = localStorage.getItem("usuario");
      if (usuario != null) {
        next();
      }
      next.redirect('/login');
    } else {
      next();
    }
  };
  return(
  <GuardProvider guards={[requireLogin]} >
  <Switch>
    <GuardedRoute path="/login" exact component={LoginPage} />
    <GuardedRoute path="/register" exact component={RegisterPage}/>
    <GuardedRoute path="/" exact component={PublicacionPage} meta={{ auth: true }} />
    {/* <GuardedRoute path="*" component={NotFound} /> */}
  </Switch>
</GuardProvider>
  )
}

export default App;
