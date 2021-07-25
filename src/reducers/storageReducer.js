/* eslint-disable import/prefer-default-export */
import { types } from '../types';

const initialState = {
  imagesRandom: [],
  imagesFavoritos: [],
};

export const storageReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.loadImages:
      return {
        ...state,
        imagesRandom: [...state.imagesRandom, ...action.payload],
      };
    case types.loadFavorites:
      return { ...state, imagesFavoritos: [...action.payload] };
    default:
      return state;
  }
};

export const getImagesRandom = (state) => state.storage.imagesRandom;
export const getImagesFavoritos = (state) => state.storage.imagesFavoritos;
