import Grid from '@mui/material/Grid';
import React, { useState } from 'react';
import DataSourceList from './DataSourceList';



function DataSourceSection() {
    const [value, setValue] = React.useState(0);
    
    const handleChange = (event, newValue) => {
        setValue(newValue);
        console.log(value);
    };

    return (
        <div className=''>
            <p className=''>Existing Data Source</p>
            <br/>
            <Grid container rowSpacing={0.3} columnSpacing={0.3}>
                <Grid item xs={12} md={12} className='text-center'>
                    {
                    <DataSourceList/>
                    }
                </Grid>
            </Grid>
        </div>
    );
}

export default DataSourceSection;