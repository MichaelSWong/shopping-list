import { useState, useEffect } from 'react';
import { IQuote } from './interfaces';
import { getRandomQuotes } from './utlity';

import './App.css';

const App = () => {
  const [quotes, setQuotes] = useState<IQuote[]>([{ text: '', author: '' }]);
  const [quote, setQuote] = useState<IQuote | null>(null);

  useEffect(() => {
    fetch('https://type.fit/api/quotes')
      .then((res) => res.json())
      .then((json) => {
        setQuotes(json);
        setQuote(json[0]);
      });
  }, []);

  const getNewQuote = () => {
    setQuote(getRandomQuotes(quotes));
  };
  return (
    <main>
      <h2>Project 3: Quote Generator</h2>
      <section>
        <button onClick={getNewQuote}>New Quote</button>
        <h3>
          <span>"</span>
          {quote?.text}
        </h3>
        <i>-{quote?.author}</i>
      </section>
    </main>
  );
};

export default App;
