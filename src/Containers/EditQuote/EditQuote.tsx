import FormToAddNewQuote from '../../Components/FormToAddNewQuote/FormToAddNewQuote.tsx';
import { IQuote } from '../../types';
import { useCallback, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axiosAPI from '../../axiosAPI.ts';
import Louder from '../../Components/UI/Louder/Louder.tsx';
import { Container } from '@mui/material';


const EditQuote = () => {
  const [quote, setQuote] = useState<IQuote>();
  const params = useParams<{ idQuote: string }>();
  const navigate = useNavigate();
  const [prelouder, setPrelouder] = useState<boolean>(false);

  const getOneQuote = useCallback(async (id: string) => {

    try {
      setPrelouder(true);
      const responseOneQuote: { data: IQuote } = await axiosAPI<IQuote>(`quotes/${id}.json`);
      const quoteData = responseOneQuote.data;

      if (quoteData) {
        setQuote(quoteData);
      }

    } catch (e) {
      console.error(e);
    } finally {
      setPrelouder(false);
    }

  }, []);

  useEffect(() => {
    if (params.idQuote) {
      void getOneQuote(params.idQuote);
    }

  }, [params.idQuote, getOneQuote]);

  const submitForm = async (quote: IQuote) => {
    try {
      if (params.idQuote) {
        setPrelouder(true);
        await axiosAPI.put(`quotes/${params.idQuote}.json`, {...quote});
        navigate('/');
      }
    } catch (e) {
      console.error(e);
    } finally {
      setPrelouder(false);
    }
  };

  return (
    <Container sx={{marginTop: '5%', paddingBottom: '5%'}}>
      {prelouder ? <Louder/> : <FormToAddNewQuote quoteToEdit={quote} submitForm={submitForm}/>}
    </Container>
  );
};

export default EditQuote;