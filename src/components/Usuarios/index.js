import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as usuariosActions from '../../actions/usuariosActions';
import Spinner from '../General/Spinner';
import Fatal from '../General/Fatal';
import Tabla from '../Usuarios/Tabla';

class Usuarios extends Component {
  componentDidMount() {
    if (!this.props.usuarios.length) {
      this.props.traerTodos();
    }
  }

  ponerContenidoExitoso = () => {
    if (this.props.loading) {
      return <Spinner />;
    }

    if (this.props.error) {
      return <Fatal mensaje={this.props.error} />;
    }

    return <Tabla />;
  };

  render() {
    //console.log(this.props.usuarios); //El componente recibe por medio de props el store de Redux
    return (
      <div>
        <h1>Usuarios</h1>
        {this.ponerContenidoExitoso()}
      </div>
    );
  }
}

const mapStateToProps = (reducers) => {
  //Función para traer los reduces que yo necesite --> Funciona recibiendo como parametro TODOS los reducers y retornando los que necesite
  return reducers.usuariosReducer;
};

export default connect(mapStateToProps, usuariosActions)(Usuarios);
