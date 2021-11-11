import React, { useState } from 'react';
import { Button, InputAdornment } from '@material-ui/core';
import Grid from '@mui/material/Grid';
import logo from '../media/klipfolio-logo.png';
import TextField from '@mui/material/TextField';

function MyHeader() {
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <div className='bg-white py-4'>
            <Grid container rowSpacing={0.3} columnSpacing={0.3}>
                <Grid item xs={12} md={4} className='text-center'>
                    <img src={logo} alt="logo" className="p-0 w-40 h-auto"/>
                </Grid>
                <Grid item xs={12} md={4} className='text-center'>
                    {SearchBar(searchTerm, setSearchTerm)}
                </Grid>
                <Grid item xs={4} md={4} className='text-center'>
                </Grid>
            </Grid>
        </div>
    );
}

export default MyHeader;

function SearchBar(searchTerm, setSearchTerm) {
    return <TextField 
    id="outlined-basic" 
    label="Term.." 
    variant="outlined" 
    className="w-full" 
    InputProps={{
        endAdornment: (
            <InputAdornment position="start">
                <Button variant="contained" className='' color='primary'>Search</Button>
            </InputAdornment>
        ),
    }}
    onChange = {(event)=>{
        setSearchTerm(event.target.value);
        console.log(searchTerm);
        }}
    />;
}