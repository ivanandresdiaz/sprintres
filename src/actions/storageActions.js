/* eslint-disable import/prefer-default-export */
import { db, firebase } from '../firebase/firebaseconfig';
import { types } from '../types';

export const cargandoUi = () => {
  return { type: types.cargandoUi };
};
export const cargandoDoneUi = () => {
  return { type: types.cargandoDoneUi };
};

export const getFavoritos = () => (dispatch) => {
  db.collection('mascotas').get()
    .then((snapshot) => {
      const data = snapshot.docs.map((doc) => {
        const dataDocument = doc.data();
        return { ...dataDocument, id: doc.id };
      });
      console.log(data);
    });
};

export const consultarFavoritos = () => async (dispatch) => {
  dispatch(cargandoUi());
  db.collection('mascotas').onSnapshot((querySnapshot) => {
    const favoritos = [];
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      return favoritos.push({ ...data, id: doc.id });
    });
    dispatch({ type: types.loadFavorites, payload: favoritos });
    dispatch(cargandoDoneUi());
  });
};
export const addFavorite = (ImagennuevoPerro, nombre) => async (dispatch, getState) => {
  try {
    const usuario = getState().logged.name;
    const referenciaDocumento = await db.collection('mascotas').add({
      cover: ImagennuevoPerro,
      dueño: usuario,
      nombre,
      fecha: firebase.firestore.FieldValue.serverTimestamp(),
    });
    if (referenciaDocumento) {
      alert('Agregado a favoritos');
      dispatch(consultarFavoritos());
    }
  } catch (error) {
    alert('no se puedo agregar a favoritos, intente de nuevo...');
  };

};
export const deleteFavorite = (id) => async (dispatch) => {
  dispatch(cargandoUi());
  await db.collection('mascotas').doc(id).delete();
  dispatch(consultarFavoritos());
};

export const updateFavorite = (id, nombre) => async (dispatch) => {
  await db.collection('mascotas').doc(id).update({
    nombre,
  });
  dispatch(consultarFavoritos());
};
