import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import Stack from '@mui/joy/Stack';
import selectCategories from '../../Constants.ts';
import { NavLink } from 'react-router-dom';
import { Container } from '@mui/material';

const CategoryList = () => {

  return (
    <Container>
      <Stack spacing={2} sx={{marginTop: '20px', marginLeft: '30px'}}>
        <List marker="circle">
          {selectCategories.map((category) => (
            <ListItem key={category.id} sx={{color: 'white', fontSize: '23px', textDecoration: 'none', '&.active': {fontSize: '28px',fontWeight: '600'}}} to={`/quotes/${category.id}`} component={NavLink}>
              {category.title}
            </ListItem>
          ))}
        </List>
      </Stack>
    </Container>
  );
};


export default CategoryList;