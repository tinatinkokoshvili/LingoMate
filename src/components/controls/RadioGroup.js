import React from 'react'
import {TextField, Grid, makeStyles, FormControl, FormLabel,
    FormControlLabel, Radio, RadioGroup as MuiRadioGroup} from '@material-ui/core';

export default function RadioGroup(props) {

    const { name, label, value, onChange, items } = props;


    return (
        <FormControl>
            <FormLabel>{label}</FormLabel>
            <MuiRadioGroup row={true}
                    name={name}
                    value={value}
                    onChange={onChange}>

                {
                    items.map(
                        item => (
                            <FormControlLabel key={item.id} value={item.id} control={<Radio />} label={item.title}/>
                        )

                    )
                }
            </MuiRadioGroup>
        </FormControl>
    )
}

























