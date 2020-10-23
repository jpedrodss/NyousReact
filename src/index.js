import React from 'react';
import jwt_decode from 'jwt-decode';
import ReactDOM from 'react-dom';
import './index.css';

import Home from './pages/home';
import Login from './pages/login';
import Eventos from './pages/eventos'
import Cadastrar from './pages/cadastrar';
import AcessoNegado from './pages/acessonegado';
import Dashboard from './pages/admin/dashboard';
import NaoEncontrada from './pages/naoencontrada';
import CrudEventos from './pages/admin/crudeventos';
import CrudCategorias from './pages/admin/crudcategorias';

import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

const RotaPrivada = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      localStorage.getItem('token-nyous') !== null ?
        (<Component {...props} />) :
        (<Redirect to={{ pathname: '/login', state: { from: props.location } }} />)
    }
  />
);

const RotaPrivadaAdmin = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      localStorage.getItem('token-nyous') !== null && jwt_decode(localStorage.getItem('token-nyous')).Role === "1" ?
        (<Component {...props} />) :
        (<Redirect to={{ pathname: '/acessonegado', state: { from: props.location } }} />)
    }
  />
);

// Define as rotas da aplicação
const routing = (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/cadastrar" component={Cadastrar} />
      <RotaPrivada path="/eventos" component={Eventos} />
      <RotaPrivadaAdmin path="/admin/dashboard" component={Dashboard} />
      <RotaPrivadaAdmin path="/admin/crudeventos" component={CrudEventos} />
      <RotaPrivadaAdmin path="/admin/crudcategorias" component={CrudCategorias} />
      <Route path="/acessonegado" component={AcessoNegado} />
      <Route component={NaoEncontrada} />
    </Switch>
  </Router>
)

ReactDOM.render(
  routing,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
