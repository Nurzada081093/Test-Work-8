import QuoteCard from './QuoteCard/QuoteCard.tsx';
import { IQuote } from '../../types';
import React from 'react';
import { Box } from '@mui/material';

interface Props {
  quotes: IQuote[];
}

const QuoteCards: React.FC<Props> = ({quotes}) => {
  return (
    <Box sx={{marginTop: '30px'}}>
      {quotes.map((quote) => (
        <QuoteCard key={quote.id} quote={quote}/>
      ))}
    </Box>
  );
};

export default QuoteCards;