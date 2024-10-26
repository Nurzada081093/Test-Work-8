import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import Stack from '@mui/joy/Stack';
import selectCategories from '../../Constants.ts';
import { NavLink, useParams } from 'react-router-dom';
import { Container } from '@mui/material';

const CategoryList = () => {
  const params = useParams();


  return (
    <Container>
      <Stack spacing={2}>
        <List marker="circle">
          {selectCategories.map((category) => (
            <ListItem key={category.id} sx={{color: 'white'}} to={`/quotes/${category.id}`} component={NavLink}>
              {category.title}
            </ListItem>
          ))}
        </List>
      </Stack>
    </Container>
  );
};


export default CategoryList;