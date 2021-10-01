import React from 'react';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import DateFnsUtils from "@date-io/date-fns";

export default function DataPicker(props) {
    const { name, label, value, onChange } = props;

    const convertToDefaultEventPara = (name, value) => ({
        target: {
            name, value
        }
    })

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker disableTollbar
                variant="inline"
                inputVarint="outlined"
                label={label}
                formate="MMM/dd/yyyy"
                name={name}
                value={value}
                onChange={date => onChange(convertToDefaultEventPara(name, date))}
            />
        </MuiPickersUtilsProvider>
    )
}