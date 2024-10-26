import { Container } from '@mui/material';
import FormToAddNewQuote from '../../Components/FormToAddNewQuote/FormToAddNewQuote.tsx';

const SubmitNewQuote = () => {
  return (
    <Container sx={{padding: '5% 0'}}>
      <FormToAddNewQuote/>
    </Container>
  );
};

export default SubmitNewQuote;
