import React from 'react';
import { connect } from 'react-redux';

import Spinner from '../General/Spinner';
import Fatal from '../General/Fatal';

const Comentarios = (props) => {
  if (props.com_error) {
    return <Fatal mensaje={props.com_error} />;
  }

  if (props.com_loading && !props.comentarios.length) {
    return <Spinner />;
  }

  const ponerComentarios = () =>
    props.comentarios.map((comentario) => (
      <li>
        <b>
          <u>{comentario.email}</u>
        </b>
        <br />
        {comentario.body}
      </li>
    ));
  return (
    <div>
      <ul>{ponerComentarios()}</ul>
    </div>
  );
};

const mapStateToProps = ({ publicacionesReducer }) => publicacionesReducer;

export default connect(mapStateToProps)(Comentarios);
