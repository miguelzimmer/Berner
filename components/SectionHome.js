import React from 'react';
import style from '../styles/SectionHome.module.css'

// import { Container } from './styles';

function SectionHome({ id, titulo,descricao,corFundo}) {
  return (	
    <div  id={id}className={style.sectionOne} style={{backgroundColor:corFundo}}>
      <div className={style.divOne}>
        <h1 className={style.titulo}>
          {titulo}
        </h1>
      </div>
      <div className={style.divSecond}>
        <p className={style.descricao}>
        {descricao}
        </p>
      </div>
    </div>
  )
}

export default SectionHome;



