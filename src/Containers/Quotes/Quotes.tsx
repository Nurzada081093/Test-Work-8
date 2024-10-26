import { Container, Typography } from '@mui/material';
import { useCallback, useEffect, useState } from 'react';
import { IQuote, IQuoteAPI } from '../../types';
import axiosAPI from '../../axiosAPI.ts';
import QuoteCards from '../../Components/QuoteCards/QuoteCards.tsx';
import Grid from '@mui/material/Grid2';
import CategoryList from '../../Components/CategoryList/CategoryList.tsx';

const Quotes = () => {
  const [quotes, setQuotes] = useState<IQuote[]>([]);

  const getAllQuotes = useCallback(async () => {

    try {
      // setLouder(true);
      const responseQuotes: {data: IQuoteAPI} =  await axiosAPI<IQuoteAPI>('quotes.json');
      const quotesData = responseQuotes.data;

      if (quotesData) {
        const postsInfoFromAPI = Object.keys(quotesData).map((quoteInfo) => {
          return {
            ...responseQuotes.data[quoteInfo],
            id: quoteInfo,
          };
        });

        setQuotes(postsInfoFromAPI);
      }
    } catch (e) {
      alert(e);
    } finally {
      // setLouder(false);
    }
  }, []);

  useEffect(() => {
    void getAllQuotes();
  }, [getAllQuotes]);


  return (
    <Container>
      <Grid container spacing={1}>
        <Grid size={6}><Typography variant="h1" sx={{color: 'white'}}><CategoryList/></Typography></Grid>
        <Grid size={6}> <QuoteCards quotes={quotes}/></Grid>
      </Grid>
    </Container>
  );
};

export default Quotes;