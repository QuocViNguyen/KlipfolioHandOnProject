import Grid from '@mui/material/Grid';
import { React, useState } from 'react';
import ServiceList from './ServiceList';
import facebook from '../media/facebook.png';
import dropbox from '../media/dropbox.png';
import googledrive from '../media/googledrive.png';
import slack from '../media/slack.png';
import Button from '@mui/material/Button';

function ServiceSection() {
    const [value, setValue] = useState(0);
    
    const handleChange = (event, newValue) => {
        setValue(newValue);
        console.log(value);
    };

    return (
        <div className=''>
            <p className='text-xl font-semibold'>Recommended services</p>
            <br/>
            <Grid container rowSpacing={0.3} columnSpacing={0.3}>
                <Grid item xs={12} md={12} className='text-center'>
                    <ServiceList
                        list={[
                            {name:"facebook", API:"Place Holder API", logo: facebook},
                            {name:"dropbox", API:"Place Holder API", logo: dropbox},
                            {name:"google drive", API:"Place Holder API", logo: googledrive},
                            {name:"slack", API:"Place Holder API", logo:slack},
                            {name:"facebook", API:"Place Holder API", logo: facebook},
                            {name:"dropbox", API:"Place Holder API", logo: dropbox},
                            {name:"google drive", API:"Place Holder API", logo: googledrive},
                            {name:"slack", API:"Place Holder API", logo:slack},
                            {name:"facebook", API:"Place Holder API", logo: facebook},
                            {name:"dropbox", API:"Place Holder API", logo: dropbox},
                            {name:"google drive", API:"Place Holder API", logo: googledrive},
                            {name:"slack", API:"Place Holder API", logo:slack},
                            {name:"facebook", API:"Place Holder API", logo: facebook},
                            {name:"dropbox", API:"Place Holder API", logo: dropbox},
                            {name:"google drive", API:"Place Holder API", logo: googledrive},
                            {name:"slack", API:"Place Holder API", logo:slack}
                        ]}
                    />
                </Grid>
                <Grid item xs={12} md={12}><br/></Grid>
                <Grid item xs={12} md={10}/>
                <Grid item xs={12} md={2} className='text-center'>
                    <Button variant="outlined">More Services</Button>
                </Grid>
            </Grid>
        </div>
    );
}

export default ServiceSection;