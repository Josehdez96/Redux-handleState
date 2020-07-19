import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Menu from './Menu';
import Usuarios from './Usuarios';
import Publicaciones from './Publicaciones';

const Tareas = () => <div>Tareas</div>;

const App = () => (
  <BrowserRouter>
    <Menu />
    <div className="margen">
      <Route exact path="/" component={Usuarios} />
      <Route exact path="/tareas" component={Tareas} />
      <Route exact path="/publicaciones/:key" component={Publicaciones} />
      {/* el :key es para recibir los parametros por URL que le pasamos en el componente Tabla*/}
    </div>
  </BrowserRouter>
);

export default App;
