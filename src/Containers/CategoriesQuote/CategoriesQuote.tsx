import CategoryList from '../../Components/CategoryList/CategoryList.tsx';
import Grid from '@mui/material/Grid2';

import QuoteCards from '../../Components/QuoteCards/QuoteCards.tsx';
import { useCallback, useEffect, useState } from 'react';
import { IQuote, IQuoteAPI } from '../../types';
import { Container } from '@mui/material';
import axiosAPI from '../../axiosAPI.ts';
import { useParams } from 'react-router-dom';


const CategoriesQuote = () => {
  const [quotes, setQuotes] = useState<IQuote[]>([]);

  const params = useParams<{id: string}>();

  const getOnePost = useCallback(async (id: string) => {

    try {
      // setLouder(true);
      const responsePost: {data: IQuote[]} =  await axiosAPI<IQuote[]>(`quotes.json?orderBy="category"&equalTo="${id}"`);
      const postInfo = responsePost.data;

      console.log(postInfo);


      if (postInfo) {
        setQuotes(postInfo);
      }

    } catch (e) {
      alert(e);
    } finally {
      // setLouder(false);
    }

  }, []);

  useEffect(() => {
    if (params.id !== undefined) {
      void getOnePost(params.id);
    }
  }, [getOnePost, params]);

  console.log(quotes);

  return (
    <Container>
      <Grid container spacing={1}>
        <Grid size={6}><CategoryList/></Grid>
        <Grid size={6}> <QuoteCards quotes={quotes}/></Grid>
      </Grid>

    </Container>
  );
};

export default CategoriesQuote;