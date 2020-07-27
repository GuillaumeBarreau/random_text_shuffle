import React from 'react';
import './App.css';
import quote from './data/quote.json';

import { RandomTextShuffle } from './components/RandomTextShuffle';
import { Container } from './components/Container';

function App() {

  const randomDataQuote = quote[Math.floor(Math.random() * quote.length)];

  return (
    <div className="App">
      <header className="App-header">
        <Container component="blockquote">
          <RandomTextShuffle>
            {randomDataQuote.quote}
          </RandomTextShuffle>
        </Container>
        <br />
        <Container variant="title">
          <RandomTextShuffle>
            {randomDataQuote.movie} 
          </RandomTextShuffle>
        </Container>
      </header>
    </div>
  );
}

export default App;
