import React from 'react';
import Chip from '@material-ui/core/Chip';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    root: {
      width: 500,
      '& > * + *': {
        marginTop: theme.spacing(3),
      },
    },
  }));


export default function MultiSelect(props) {
    const classes = useStyles();
    const { name, label, value, onChange, options } = props;    
    return (
        <Autocomplete multiple
        className={classes.root}
        id={name}
        options={options}
        getOptionLabel={(option) => option.title}
        // defaultValue={[top100Films[13]]}
        filterSelectedOptions
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            label={label}
            placeholder={label}
          />
        )}
      />
    )
}