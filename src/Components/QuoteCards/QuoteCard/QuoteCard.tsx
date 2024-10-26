import { Box, Button, Card, CardContent, Typography } from '@mui/material';
import React from 'react';
import { IQuote } from '../../../types';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import axiosAPI from '../../../axiosAPI.ts';

interface Props {
  quote: IQuote;
}

const QuoteCard: React.FC<Props> = ({quote}) => {
  // const [louder, setLouder] = useState<boolean>(false);
  const navigate = useNavigate();

  const params = useParams<{id: string}>();

  const deleteQuote = async () => {
    try {
      // setLouder(true);
      if (params.id) {
        await axiosAPI.delete(`quotes/${params.id}.json`);
        navigate('/');
      }
    } catch (e) {
      alert(e);
    } finally {
      // setLouder(false);
    }
    console.log(params);

  };


  return (
    <>
      <Card sx={{borderRadius: '20px', padding: '20px', marginBottom: '20px'}}>
        <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
          <CardContent sx={{ width: '400px'}}>
            <Typography variant="body2" sx={{ color: 'black', fontSize: '18px'}}><b>«{quote.text}»</b> <br/> <span style={{fontStyle: 'italic', color: 'text.secondary'}}>- {quote.author} ©</span></Typography>
          </CardContent>
          <Box style={{width: '80px', height: '30px', display: 'flex', justifyContent: 'space-around', marginRight: '30px'}}>
            <Button sx={{width: '30px', height: '30', display: 'inline', padding: 0}} to={`/quotes/${quote.id}/edit`} component={NavLink}
            >
              <img  width="30" height="30" src="https://img.icons8.com/sf-regular/48/create-new.png" alt="create-new"/>
            </Button>
            <Button sx={{width: '30px', height: '30', display: 'inline', padding: 0}} to={`/`} component={NavLink} onClick={deleteQuote}>
              <img width="30" height="30" src="https://img.icons8.com/sf-black/64/delete-sign.png"
                   alt="delete-sign"/>
            </Button>
          </Box>
        </Box>
      </Card>
    </>
  );
};

export default QuoteCard;