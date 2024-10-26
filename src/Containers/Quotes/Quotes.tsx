import { Container, Typography } from '@mui/material';
import { useCallback, useEffect, useState } from 'react';
import { IQuote, IQuoteAPI } from '../../types';
import axiosAPI from '../../axiosAPI.ts';
import QuoteCards from '../../Components/QuoteCards/QuoteCards.tsx';
import Grid from '@mui/material/Grid2';
import CategoryList from '../../Components/CategoryList/CategoryList.tsx';
import Louder from '../../Components/UI/Louder/Louder.tsx';

const Quotes = () => {
  const [quotes, setQuotes] = useState<IQuote[]>([]);
  const [prelouder, setPrelouder] = useState<boolean>(false);

  const getAllQuotes = useCallback(async () => {

    try {
      setPrelouder(true);
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
      setPrelouder(false);
    }
  }, []);

  useEffect(() => {
    void getAllQuotes();
  }, [getAllQuotes]);


  return (
    <>
      {prelouder ? <Louder/> :
        <Container>
          <Grid container spacing={1}>
            <Grid size={6}><Typography variant="h1" sx={{color: 'white'}}><CategoryList/></Typography></Grid>
            <Grid size={6}>
              <Typography variant="h2" sx={{color: 'white', margin: '20px 25%'}}>All quotes</Typography>
              <QuoteCards quotes={quotes}/>
            </Grid>
          </Grid>
        </Container>
      }
    </>
  );
};

export default Quotes;