import React from 'react';
import '../styles/components/Spinner.scss';

const Spinner = () => {
  return (
    <div className='Spinner-container'>
      <div className='lds-roller'>
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
};

export default Spinner;
