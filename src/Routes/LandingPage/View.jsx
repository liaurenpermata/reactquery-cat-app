import React from 'react';
import CatList from './components/CatList';
import './view.css';

const View = () => (
  <div>
    <div className="container">
      <h1>
        <span className="colorMagenta">Catology</span> by{' '}
        <span className="colorPurple">RISTEK SISTECH UI</span>
      </h1>
    </div>
    <CatList />
  </div>
);

export default View;
