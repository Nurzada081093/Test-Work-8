import { Button, OutlinedInput, SelectChangeEvent, TextField, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import Textarea from '@mui/joy/Textarea';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import React, { useState } from 'react';
import { ICategory, IQuote } from '../../types';
import selectCategories from '../../Constants.ts';
import axiosAPI from '../../axiosAPI.ts';

const initialForm = {
  author: '',
  category: '',
  text: '',
};

const FormToAddNewQuote = () => {

  const [newQuote, setNewQuote] = useState<IQuote>(initialForm);

  const onChangeField = (e: SelectChangeEvent<string> | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const {name, value} = e.target;

    setNewQuote((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };


  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(newQuote);

    if (newQuote.author.trim().length === 0 || newQuote.category.trim().length === 0 || newQuote.text.trim().length ===0) {
      alert('Please enter the author, text and select a category!');
    } else {

      await axiosAPI.post('quotes.json', {...newQuote});
      // submitForm({...newPost});
      //
      // if (!postToEdit) {
      //   setNewPost({...initialForm});
      // }

      setNewQuote({...initialForm});

      // if (!postToEdit) {
      //
      // }
    }

  };

  return (
    <form onSubmit={onSubmit} style={{
      border: '1px solid lightgrey',
      width: '70%',
      margin: '0 auto 70px',
      padding: '50px 0',
      borderRadius: '20px',
      backgroundColor: 'white',
    }}>
      <Typography variant="h4" sx={{flexGrow: 1, textAlign: 'center', marginBottom: '20px'}}>
        {/*{postToEdit ? 'Edit ' : 'Add new '}*/}
        Submit New Quote
      </Typography>
      <Grid container spacing={2} sx={{mx: 'auto', width: '80%'}}>
        <Grid size={12}>
          <FormControl sx={{ width: '100%' }}>
            <InputLabel id="demo-multiple-name-label">Category</InputLabel>
            <Select
              labelId="demo-multiple-name-label"
              id="demo-multiple-name"
              variant="outlined"
              name="category"
              value={newQuote.category}
              onChange={onChangeField}
              input={<OutlinedInput label="Category" />}
            >
              {selectCategories.map((category: ICategory) => (
                <MenuItem
                  key={category.id}
                  value={category.id}
                >
                  {category.title}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid size={12}>
          <TextField
            sx={{width: '100%'}}
            id="outlined-basic"
            label="Author"
            name="author"
            variant="outlined"
            value={newQuote.author}
            onChange={onChangeField}
          />
        </Grid>
        <Grid size={12}>
          <Textarea
            id="outlined-basic"
            variant="outlined"
            placeholder="Description..."
            minRows={5}
            value={newQuote.text}
            name="text"
            onChange={onChangeField}
          />
        </Grid>
        <Grid size={12}>
          <Button sx={{width: '100%'}} variant="contained" type="submit">
            {/*{postToEdit ? 'Edit' : 'Save'}*/}
            save
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default FormToAddNewQuote;