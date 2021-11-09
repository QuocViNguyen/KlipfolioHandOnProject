import Grid from '@mui/material/Grid';
import React, { useState } from 'react';
import DataSourceList from './DataSourceList';
import Button from '@mui/material/Button';

function DataSourceSection() {
    const [value, setValue] = React.useState(0);
    
    const handleChange = (event, newValue) => {
        setValue(newValue);
        console.log(value);
    };

    return (
        <div className=''>
            <p className='text-xl font-semibold'>Existing Data Source</p>
            <br/>
            <Grid container rowSpacing={0.3} columnSpacing={0.3}>
                <Grid item xs={12} md={12} className='text-center'>
                    {
                    <DataSourceList/>
                    }
                </Grid>
                <Grid item xs={12} md={12}><br/></Grid>
                <Grid item xs={12} md={10}/>
                <Grid item xs={12} md={2} className='text-center'>
                    <Button variant="outlined">More Data Sources</Button>
                </Grid>
            </Grid>
        </div>
    );
}

export default DataSourceSection;