/* eslint-disable react/no-array-index-key */
import React, { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { consultarFavoritos, getFavoritos } from '../../actions/storageActions';
import Header from '../../components/Header/Header';
import { getImagesFavoritos } from '../../reducers/storageReducer';
import { getName } from '../../reducers/loggedReducer';
import { getCargando } from '../../reducers/uiReducer';
import CardFavorito from '../../components/CardFavorito/CardFavorito';
import { DivContainerCards, DivContainerSpinner } from './styledFavorites';
import Spinner from '../../components/Spinner';

const Favoritos = () => {
  const name = useSelector(getName);
  const cargando = useSelector(getCargando);
  const imagesFavoritos = useSelector(getImagesFavoritos);

  const dispatch = useDispatch();
  useEffect(() => {
    if (imagesFavoritos.length === 0) {
      console.log('se mando a llamar el favoritos');
      dispatch(consultarFavoritos());
    }
  }, []);
  const handleCerrarSesion = useCallback(
    () => {
      dispatch(singOutAuth());
    },
    [name],
  );
  console.log(imagesFavoritos);
  return (
    <div>
      <Header name={name} handleCerrarSesion={handleCerrarSesion} />
      {cargando ? (
        <DivContainerSpinner>
          <Spinner />
        </DivContainerSpinner>
      ) : (
        <>
          <DivContainerCards>
            {imagesFavoritos.map((perro, index) => <CardFavorito key={perro.id} perro={perro.cover} nombre={perro.nombre} id={perro.id} />)}
          </DivContainerCards>
        </>
      )}

    </div>
  );
};

export default Favoritos;
