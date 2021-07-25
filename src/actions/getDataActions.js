/* eslint-disable no-await-in-loop */
/* eslint-disable import/prefer-default-export */
import { types } from '../types';

export const loadImages = () => async (dispatch) => {
  const API = 'https://picsum.photos/200/300';
  try {
    const data = [];
    for (let i = 0; i < 10; i++) {
      const response = await fetch(API);
      data.push(response.url);
    }
    dispatch({ type: types.loadImages, payload: data });
  } catch (error) {
    alert(`a ocurrio un error. ${error.message}`);
  };

};
