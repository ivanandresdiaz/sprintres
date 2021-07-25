import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { MdDelete } from 'react-icons/md';
import { deleteFavorite, updateFavorite } from '../../actions/storageActions';
import { ImgCard, DivAddFavorite, DivCard, DivCardDetails, DivContainerImg, NameCharacter } from './styledCardFavorito';

const Card = (props) => {
  const { perro, nombre, id } = props;
  const dispatch = useDispatch();
  const color1 = '#FD4937';
  const handleDeleteFavoritos = () => {
    dispatch(deleteFavorite(id));
  };
  const handleEditName = (id) => {
    const nuevoNombre = prompt('¿cual va ser el nuevo nombre del perro?');
    if (nuevoNombre) {
      dispatch(updateFavorite(id, nuevoNombre));
    }
  };
  return (
    <DivCard>
      <DivContainerImg onClick={() => handleEditName(id)}>
        <ImgCard src={perro} alt={`perro${nombre}`} />
      </DivContainerImg>
      <DivCardDetails className='card_details'>
        <NameCharacter className='name_character'>{`${nombre}`}</NameCharacter>
      </DivCardDetails>
      <DivAddFavorite onClick={() => {
        handleDeleteFavoritos(perro);
      }}
      >
        <MdDelete size='2rem' color={color1} />
      </DivAddFavorite>
    </DivCard>
  );
};

export default Card;
