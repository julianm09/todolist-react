import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    marginBottom: '25px',
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export const SimpleSelect = ({ todos, setTodos }) => {
  const classes = useStyles();
  const [sort, setSort] = React.useState('');

  const handleChange = (event) => {
       
  for (var i = 0; i < todos.length; i++){
    console.log(todos[i].date)
  }
 
    setSort(event.target.value);


 
    
  };

  return (


      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Sort</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={sort}

          onChange={handleChange}
          label="Sort"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>newest</MenuItem>
          <MenuItem value={20}>oldest</MenuItem>
          <MenuItem value={30}>longest</MenuItem>
        </Select>
      </FormControl>

  );
}