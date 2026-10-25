import React from 'react';
import './App.css';
import { MainContent, Card } from './components/MainContent';
import FeedbackForm from './components/FeedbackForm';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Mini Projeto React</h1>
        <p>Componentes, props, props.children e useState</p>
      </header>

      <main className="app-main">
        <MainContent
          titulo="Conteúdo principal"
          descricao="Este componente recebe informações por meio de props."
        >
          <p>
            Este texto foi passado para o componente usando <strong>children</strong>.
          </p>
        </MainContent>

        <section className="cards">
          <Card titulo="React">
            <p>Biblioteca para criação de interfaces.</p>
          </Card>

          <Card titulo="Componentes">
            <p>Partes reutilizáveis da interface.</p>
          </Card>

          <Card titulo="Props">
            <p>Permitem passar dados de um componente para outro.</p>
          </Card>

          <Card titulo="Props.children">
            <p>Permite renderizar conteúdo aninhado dentro do componente.</p>
          </Card>
        </section>

        <FeedbackForm />
      </main>
    </div>
  );
}

export default App;
