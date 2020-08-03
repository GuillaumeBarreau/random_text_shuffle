import React, {useState, useEffect} from 'react';
import './App.css';
import quote from './data/quote.json';

import { RandomTextShuffle } from './components/RandomTextShuffle';
import { Container } from './components/Container';
import { Button } from './components/Button';

const randomDataQuote = quote[Math.floor(Math.random() * quote.length)];

function App() {

  const [quoteData, setQuoteData] = useState(randomDataQuote);
  const [childKey, setchildKey ] = useState(0);

  const onButtonClick = () => {
    setchildKey(childKey+1)
    setQuoteData(quote[Math.floor(Math.random() * quote.length)])
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <Container component="section" key={childKey}>
          <Container  component="blockquote">
            <RandomTextShuffle>
              {quoteData.quote}
            </RandomTextShuffle>
          </Container>
          <br />
          <Container variant="title">
            <RandomTextShuffle>
              {quoteData.movie} 
            </RandomTextShuffle>
          </Container>
          <br />
          <Button eventOnclick={onButtonClick}>New Quote</Button>
        </Container>
      </header>
    </div>
  );
}

export default App;
