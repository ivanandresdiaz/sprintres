import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { registerWithEmailPassword } from '../../actions/authActions';
import useForm from '../../hooks/useForm';
import { DivContainerLogin, ContainerLogin } from './styledRegister';

const Register = (props) => {
  const dispatch = useDispatch();
  const [values, handleInputChange, reset] = useForm({
    name: '',
    email: '',
    password: '',
    password2: '',
  });
  const { name, email, password, password2 } = values;
  const handleRegistro = (event) => {
    event.preventDefault();
    if (password === password2) {
      if (password.length >= 6) {
        dispatch(registerWithEmailPassword(email, password, name));

        reset();
      } else {
        alert('la contraseña no puede tener menos de 6 caracteres');
      }

    } else {
      alert('las contraseñas no coinciden');
    }
  };
  return (
    <DivContainerLogin>
      <ContainerLogin>
        <h3>Registro</h3>
        <form onSubmit={handleRegistro}>
          <input
            type='text'
            placeholder='Nombre'
            name='name'
            value={name}
            onChange={handleInputChange}
          />

          <input
            type='text'
            placeholder='Email'
            name='email'
            value={email}
            onChange={handleInputChange}
          />

          <input
            type='password'
            placeholder='Contraseña'
            name='password'
            value={password}
            onChange={handleInputChange}
          />

          <input
            type='password'
            placeholder='Confirmar contraseña'
            name='password2'
            value={password2}
            onChange={handleInputChange}
          />

          <button
            type='submit'
          >
            Registrarse
          </button>

          <Link
            to='/auth/login'
          >
            volver al Login
          </Link>

        </form>
      </ContainerLogin>

    </DivContainerLogin>
  );
};

export default Register;
