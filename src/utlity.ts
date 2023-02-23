import { IQuote } from './interfaces';

export const getRandomQuotes = (quotes: IQuote[]) => {
  return quotes[Math.floor(Math.random() * quotes.length)];
};
