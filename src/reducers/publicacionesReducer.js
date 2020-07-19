import {
  TRAER_POR_USUARIO,
  CARGANDO,
  ERROR,
} from '../types/publicacionesTypes';

const INITIAL_STATE = {
  publicaciones: [],
  loading: false,
  error: '',
};

const usuariosReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TRAER_POR_USUARIO:
      return {
        ...state,
        publicaciones: action.payload,
        loading: false,
        error: '',
      };

    case CARGANDO:
      return { ...state, loading: true };

    case ERROR:
      return { ...state, error: action.payload, loading: false };

    default:
      return state;
  }
};

export default usuariosReducer;
