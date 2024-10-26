export interface ICategory {
  title: string;
  id: string;
}

export interface IQuote {
  author: string;
  category: string;
  text: string;
  id?: string;
}

export interface IQuoteAPI {
  [id: string]: IQuote;
}