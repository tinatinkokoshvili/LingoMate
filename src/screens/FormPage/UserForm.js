import React from 'react';
import { Grid, } from '@material-ui/core';
import Controls from '../../components/controls/Controls';
import {useForm, InnerForm} from '../../components/useForm';
import * as employeeService from  "../../services/employeeService";

const genderItems = [
    { id: 'male', title: 'Male' },
    { id: 'female', title: 'Female' },
    { id: 'other', title: 'Other' },
]
    

const initialFValues = {
    id: 0,
    fullName: '',
    email: '',
    mobile: '',
    city: '',
    gender: 'male',
    departmentId: '',
    hireDate: new Date(),
    isPermanent: false,
}


export default function UForm() {

    const{
        values,
        setValues,
        handleInputChange,
    } = useForm(initialFValues);


    return (
        <InnerForm>
        <Grid container>
            <Grid items xs={6}>
            <Controls.Input
                name="fullName"
                label="Full Name"
                value={values.fullName}
                onChange={handleInputChange}
            />
            <Controls.Input
                name="email"
                label="Email"
                value={values.email}
                onChange={handleInputChange}
            />
            </Grid>
            <Grid items xs={6}>
                <Controls.RadioGroup 
                    name="gender"
                    label="gender"
                    value={values.gender}
                    onChange={handleInputChange}
                    items={genderItems}
                />
                <Controls.Select 
                    name="departmentId"
                    label="Department"
                    value={values.departmentId}
                    onChange={handleInputChange}
                    options={employeeService.getDeaprtmentCollection()}
                />
            </Grid>
        </Grid>
        </InnerForm>
    )
}




