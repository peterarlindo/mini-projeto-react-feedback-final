import React from 'react';
import './MainContent.css';

function MainContent({ titulo, descricao, children }) {
  return (
    <section className="main-content">
      <h2>{titulo}</h2>
      <p>{descricao}</p>
      {children}
    </section>
  );
}

function Card({ titulo, children }) {
  return (
    <article className="card">
      <h3>{titulo}</h3>
      {children}
    </article>
  );
}

export { MainContent, Card };