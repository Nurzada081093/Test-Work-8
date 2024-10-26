import { AppBar, Box, Button, Container, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { NavLink } from 'react-router-dom';

const ToolBar = () => {
  return (
    <Box sx={{flexGrow: 1}}>
      <AppBar position="static" sx={{background: '#263238'}}>
        <Container maxWidth="lg">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{mr: 2}}
            >
              <MenuIcon/>
            </IconButton>
            <Typography color="inherit" to="/" variant="h6" component={NavLink}
                        sx={{flexGrow: 1, textDecoration: 'none', padding: '18px 0'}}>
              <img src="https://static.canva.com/web/images/8439b51bb7a19f6e65ce1064bc37c197.svg" alt="metrobank"/>
            </Typography>
            <Box sx={{display: 'flex', flexWrap: 'wrap'}}>
              <Button color="inherit" to="/" component={NavLink} sx={{color: 'inherit', '&.active': {fontSize: '20px'}}}>Quotes</Button>
              <Button color="inherit" to="/quotes/add" component={NavLink} sx={{color: 'inherit', '&.active': {fontSize: '20px'}}}>Submit new quote</Button>
            </Box>
            <IconButton color="inherit" sx={{marginLeft: '20px'}}>
              <SearchIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default ToolBar;