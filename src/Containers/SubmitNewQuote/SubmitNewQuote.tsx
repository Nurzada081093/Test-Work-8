import { Container } from '@mui/material';
import FormToAddNewQuote from '../../Components/FormToAddNewQuote/FormToAddNewQuote.tsx';

const SubmitNewQuote = () => {

  const submitForm = () => {
    console.log('Сохранение поста');
  };

  return (
    <Container sx={{padding: '5% 0'}}>
      <FormToAddNewQuote submitForm={submitForm}/>
    </Container>
  );
};

export default SubmitNewQuote;
