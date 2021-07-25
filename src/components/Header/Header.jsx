/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { Link } from 'react-router-dom';
import { FcNoIdea } from 'react-icons/fc';
import { MdFavorite, MdHome } from 'react-icons/md';
import { BiLogOut } from 'react-icons/bi';

import { DivItemNav, HeaderNav } from './styledHeader';

const Header = (props) => {
  const { name, handleCerrarSesion } = props;
  return (
    <HeaderNav>
      <Link to='/'>
        <DivItemNav>
          <MdHome />
          Home
        </DivItemNav>
      </Link>
      <Link to='/'>
        <DivItemNav>
          {name && name}
        </DivItemNav>
      </Link>
      <Link to='/favoritos'>
        <DivItemNav>
          <MdFavorite />
          Favoritos
        </DivItemNav>
      </Link>
      <DivItemNav onClick={handleCerrarSesion}>
        <BiLogOut color='#7A7C8B' size='4rem' />
        <p>Cerrar  sesion</p>
      </DivItemNav>
    </HeaderNav>
  );
};

export default Header;
