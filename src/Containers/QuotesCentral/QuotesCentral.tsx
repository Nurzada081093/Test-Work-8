import ToolBar from '../../Components/ToolBar/ToolBar.tsx';
import { Route, Routes } from 'react-router-dom';
import Quotes from '../Quotes/Quotes.tsx';
import { Typography } from '@mui/material';
import SubmitNewQuote from '../SubmitNewQuote/SubmitNewQuote.tsx';
import EditQuote from '../EditQuote/EditQuote.tsx';
import CategoriesQuote from '../CategoriesQuote/CategoriesQuote.tsx';

const QuotesCentral = () => {
  return (
    <>
     <header>
       <ToolBar/>
     </header>
      <main>
        <Routes>
          <Route path="/" element={<Quotes />} ></Route>
          <Route path="/quotes" element={<Quotes />} ></Route>
          <Route path="/quotes/add" element={<SubmitNewQuote />} ></Route>
          <Route path="/quotes/:idQuote/edit" element={<EditQuote/>}></Route>
          <Route path="/quotes/:id" element={<CategoriesQuote/>}></Route>
          <Route path="*" element={<Typography variant="h1">Not found</Typography>}></Route>
        </Routes>
      </main>
    </>
  );
};

export default QuotesCentral;