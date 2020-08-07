import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars1.githubusercontent.com/u/35742444?s=460&u=615da6f99e337de679ca83d591de19558e526b15&v=4"
          alt="Pedro Pacheco"
        />
        <div>
          <strong>Pedro Pacheco</strong>
          <span>Programação</span>
        </div>
      </header>

      <p>Apaixonado por Javascript e tecnologias</p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 40</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
