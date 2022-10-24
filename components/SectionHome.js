import React from 'react';
import teste from '../styles/teste.css'

// import { Container } from './styles';

function SectionHome({titulo,descricao}) {
  return (	
    <section className={teste.sectionOne}>
      <div style={{flex:1, backgroundColor:'red'}}>
        <p style={{fontSize:'25px'}}>
          {titulo}
        </p>
      </div>
      <div style={{flex:2, backgroundColor:'blue'}}>
        {descricao}
      </div>
      </section>
  )
}

export default SectionHome;



