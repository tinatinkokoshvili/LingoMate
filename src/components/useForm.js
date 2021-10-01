import React, {useState} from 'react'
import {TextField, Grid, makeStyles, } from '@material-ui/core';

export function useForm(initialFValues) {

    const [values, setValues] = useState(initialFValues);

    const handleInputChange = e => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value,
        })
    }

    return {
        values,
        setValues,
        handleInputChange,
    }

}

const useStyles = makeStyles(theme =>({
    root:{
        '& .MuiFormControl-root': {
            width: '80%',
            margin: theme.spacing(1),
        }
    }
}))

export function InnerForm(props) {
    const classes = useStyles();

    return (
        <form className={classes.root} autoComplete="off">
            {props.children}
        </form>
    )
}
