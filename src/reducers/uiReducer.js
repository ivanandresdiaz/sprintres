/* eslint-disable import/prefer-default-export */
import { types } from '../types';

const initialState = {
  cargando: true,
  error: '',
};

export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.cargandoUi:
      return {
        ...state,
        cargando: true,
      };
    case types.cargandoDoneUi:
      return { ...state, cargando: false };
    default:
      return state;
  }
};

export const getCargando = (state) => state.ui.cargando;
export const getError = (state) => state.ui.error;
