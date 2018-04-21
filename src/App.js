import React, { Component } from 'react'; //Este import va en todas las vistas, hace referencia a un pedacito de react
import './App.css'; //el .css sirve para dar estilos
import { Route, Switch } from "react-router-dom"; //hay que importar Route y switch ya que los ocuparemos
import Home from'./components/Home.js'; // importo componente de Home
import LogIn from './components/LogIn.js'; // importo componente de LogIn
import Logo from './components/images/logo-reto-bana.jpg';
import './components/style/Style.css';


class App extends Component {
  render() {
    let imgStyle = {
        width: '200px',
        height: 'auto',
        // borderRadius: '90px',
        display: 'block',
        margin: '0 auto',
        paddinga: '0',
      }
    return (
      <div>

      <nav className="padd navbar-dark bg-primary">
        <img style={imgStyle} src={Logo} />
      </nav>



      <Switch> //entre los switch escribimos los componentes que van a hacer un "cambio de vista"
        <Route component={LogIn} path="/" exact />
        <Route component={Home} path="/Home" />
      </Switch>

      <footer className="footer">
      <div className="container">
        <span className="text-muted">Preferencias Ayuda</span>
      </div>
    </footer>
      </div>
    );
  }
}

export default App;
