import Grid from '@mui/material/Grid';
import { React } from 'react';
import MetricList from './MetricList';
import Button from '@mui/material/Button';

function MetricSection() {

    return (
        <div className=''>
            <p className='pl-4 text-xl font-semibold'>Recommended Metrics</p>
            <br/>
            <Grid container rowSpacing={0.3} columnSpacing={0.3}>
                <Grid item xs={12} md={12} className='text-center'>
                    {
                    <MetricList/>
                    }
                </Grid>
                <Grid item xs={12} md={12}><br/></Grid>
                <Grid item xs={12} md={10}/>
                <Grid item xs={12} md={2} className='text-center'>
                    <Button variant="outlined">More Metrics</Button>
                </Grid>
            </Grid>
        </div>
    );
}

export default MetricSection;