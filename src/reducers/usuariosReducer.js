import { TRAER_TODOS, CARGANDO, ERROR } from '../types/usuariosTypes';

const INITIAL_STATE = {
  usuarios: [],
  loading: false,
  error: '',
};

const usuariosReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TRAER_TODOS:
      return {
        ...state,
        usuarios: action.payload,
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
