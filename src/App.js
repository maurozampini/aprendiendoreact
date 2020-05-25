import React from 'react';
import logo from './assets/images/logo.svg';
import './assets/css/App.css';

// importar componentes
import MiComponente from './components/MiComponente';

function Saludar(nombre, edad) {
  var presentacion = (
    <div>
      <h1>Hola, soy {nombre}</h1>
      <h2>Tengo {edad} años</h2>
    </div>
  )

  return presentacion;
}

function App() {
  var nombre = "Mauro Zampini"; 

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {Saludar(nombre, 27)}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          >
          Learn React
        </a>
        <section>
        <MiComponente />
      </section>
      </header>

    </div>
  );
}

export default App;
