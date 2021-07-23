import React from 'react';
import { Grid, } from '@material-ui/core';
import Controls from '../../components/controls/Controls';
import {useForm, InnerForm} from '../../components/useForm';
import * as employeeService from  "../../services/Countries";

const genderItems = [
    { id: 'male', title: 'Male' },
    { id: 'female', title: 'Female' },
    { id: 'other', title: 'Other' },
]
    

const initialFValues = {
    id: 0,
    fullName: '',
    email: '',
    birthDate: new Date(),
    country: '',
    city: '',
    gender: 'male',
    bio: '',
    nationality: '',
    interests: '',
    langSpeak: [],
    langLearn: [],
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
            <Controls.RadioGroup 
                name="gender"
                label="gender"
                value={values.gender}
                onChange={handleInputChange}
                items={genderItems}
            />
            <Controls.DatePicker
                name="birthDate"
                label="Birth Date"
                value={values.birthDate}
                onChange={handleInputChange}
            />
            <div style={{margin: '7px', color: '#38363b'}}>Location</div>
            <Controls.Input
                name="country"
                label="Country"
                value={values.country}
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
            <Controls.Input
                name="bio"
                label="Bio"
                value={values.bio}
                onChange={handleInputChange}
            />
            <Controls.Select 
                name="nationality"
                label="Natinoality"
                value={values.nationality}
                onChange={handleInputChange}
                options={employeeService.getCountriesCollection()}
            />
            <Controls.Input
                name="interests"
                label="Interests"
                value={values.interests}
                onChange={handleInputChange}
            />
            <Controls.MultiSelect 
                name="langSpeak"
                label="Languages Spoken"
                value={values.langSpeak}
                onChange={handleInputChange}
                options={employeeService.getCountriesCollection()}
            />
            <Controls.MultiSelect 
                name="langLearn"
                label="Languages to Learn"
                value={values.LangLearn}
                onChange={handleInputChange}
                options={employeeService.getCountriesCollection()}
            />
            {/* <Controls.Checkbox
                name="is"
                label="Permanent"
                value={values.is}
                onChange={handleInputChange}
            /> */}
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