import CategoryList from '../../Components/CategoryList/CategoryList.tsx';
import Grid from '@mui/material/Grid2';
import QuoteCards from '../../Components/QuoteCards/QuoteCards.tsx';
import { useCallback, useEffect, useState } from 'react';
import { IQuote, IQuoteAPI } from '../../types';
import { Container } from '@mui/material';
import axiosAPI from '../../axiosAPI.ts';
import { useParams } from 'react-router-dom';
import Louder from '../../Components/UI/Louder/Louder.tsx';


const CategoriesQuote = () => {
  const [quotes, setQuotes] = useState<IQuote[]>([]);
  const [prelouder, setPrelouder] = useState<boolean>(false);

  const params = useParams<{id: string}>();

  const getOnePost = useCallback(async (id: string) => {

    try {
      setPrelouder(true);
      const responseQuotes: {data: IQuoteAPI} =  await axiosAPI<IQuoteAPI>(`quotes.json?orderBy="category"&equalTo="${id}"`);
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
    if (params.id !== undefined) {
      void getOnePost(params.id);
    }
  }, [getOnePost, params]);

  return (
    <>
      {prelouder ? <Louder/> :
        <Container sx={{paddingBottom: '30%'}}>
          <Grid container spacing={1}>
            <Grid size={6}><CategoryList/></Grid>
            <Grid size={6}>
              <QuoteCards quotes={quotes}/>
            </Grid>
          </Grid>
        </Container>
      }
    </>
  );
};

export default CategoriesQuote;