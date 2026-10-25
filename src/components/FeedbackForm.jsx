import React, { useState } from 'react';

function FeedbackForm() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [comentario, setComentario] = useState('');

  function enviarFeedback() {
    alert(
      `Nome: ${nome}\nEmail: ${email}\nComentário: ${comentario}`
    );
  }

  return (
    <section className="feedback-form">
      <h2>Feedback</h2>

      <input
        type="text"
        value={nome}
        onChange={(event) => setNome(event.target.value)}
        placeholder="Nome"
      />

      <input
        type="text"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="Email"
      />

      <textarea
        value={comentario}
        onChange={(event) => setComentario(event.target.value)}
        placeholder="Comentário"
      />

      <button onClick={enviarFeedback}>
        Enviar
      </button>
    </section>
  );
}

export default FeedbackForm;
