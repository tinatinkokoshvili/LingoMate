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
            <Controls.Input
                name="mobile"
                label="Mobile"
                value={values.mobile}
                onChange={handleInputChange}
            />
            <Controls.Input
                name="city"
                label="City"
                value={values.city}
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
                <Controls.DatePicker
                    name="hireDate"
                    label="Hire Date"
                    value={values.hireDate}
                    onChange={handleInputChange}
                />
                <Controls.Checkbox
                    name="isPermanent"
                    label="Permanent Employee"
                    value={values.isPermanent}
                    onChange={handleInputChange}
                />
                <div>
                    <Controls.Button
                        type="submit"
                        text="Submit"
                    />
                    <Controls.Button
                        type="reset"
                        text="Reset"
                        color="default"
                    />
                </div>
            </Grid>
        </Grid>
        </InnerForm>
    )
}




