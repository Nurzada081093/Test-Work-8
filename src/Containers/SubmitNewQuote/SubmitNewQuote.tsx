import { Container } from '@mui/material';
import FormToAddNewQuote from '../../Components/FormToAddNewQuote/FormToAddNewQuote.tsx';
import { useNavigate } from 'react-router-dom';
import { IQuote } from '../../types';
import axiosAPI from '../../axiosAPI.ts';
import { useState } from 'react';
import Louder from '../../Components/UI/Louder/Louder.tsx';

const SubmitNewQuote = () => {
  const navigate = useNavigate();
  const [prelouder, setPrelouder] = useState<boolean>(false);

  const submitForm = async (quote: IQuote) => {
    try {
      setPrelouder(true);
      await axiosAPI.post('quotes.json', {...quote});
      navigate('/');
    } catch (e) {
      console.error(e);
    } finally {
      setPrelouder(false);
    }
  };

  return (
    <>
      {prelouder ? <Louder/> : <Container sx={{padding: '5% 0'}}>
        <FormToAddNewQuote submitForm={submitForm}/>
      </Container>
      }
    </>
  );
};

export default SubmitNewQuote;
