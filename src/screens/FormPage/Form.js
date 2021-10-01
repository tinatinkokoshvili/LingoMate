import React from 'react';
import UForm from './UserForm';
import { Paper, makeStyles, } from '@material-ui/core';

const useStyles = makeStyles(theme =>({
    pageContent:{
        margin: theme.spacing(5),
        
        padding: theme.spacing(3),
    }
}))


export default function Form() {
    const classes = useStyles();

    return (
        <Paper className={classes.pageContent}>
            <UForm />
        </Paper>
    
    )
}










