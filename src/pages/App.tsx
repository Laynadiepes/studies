
import React from 'react';
import Button from '../components/button';
import Formulario from '../components/Form';
import List from '../components/List';
import style from './app.module.scss'

function App() {
  return (
    <div className={style.AppStyle}>
     <Formulario/>
     <List/>
    </div>
  );
}

export default App;
